'use server'

import { createClient } from "@/utils/supabase/server"

export async function getStravaStatus() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return {
    status: false
  }

  const { data: userData } = await supabase.from('users').select().eq('id', user.id).single()

  if (!userData) return {
    status: false
  }

  const status = userData.strava_access_token !== null

  if (status) {
    return {
      status: true,
      access_token: userData.strava_access_token,
      refresh_token: userData.strava_refresh_token,
      expires_at: userData.strava_expires_at,
    }
  } else {
    return {
      status: false
    }
  }
}

export async function connectToStrava() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  const { data: userData } = await supabase.from('users').select().eq('id', user.id).single()

  const strava_access_token = userData.strava_access_token
  const strava_refresh_token = userData.strava_refresh_token
  const strava_expires_at = userData.strava_expires_at

  if (!strava_access_token || !strava_refresh_token || !strava_expires_at) {
    // not connected to strava
    return false
  }

  if (new Date(strava_expires_at * 1000) < new Date()) {
    // refresh token
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: strava_refresh_token
      })
    })

    const data = await response.json()
    
    if (data.access_token) {
      await supabase.from('users').update({
        strava_access_token: data.access_token,
        strava_refresh_token: data.refresh_token,
        strava_expires_at: data.expires_at
      }).eq('id', user.id)

      return {
        access_token: data.access_token
      }
    } else {
      return false
    }
  } else {
    return {
      access_token: strava_access_token
    }
  }
}

export async function getStravaRuns(access_token, startDate, endDate) {
  // const query = `https://www.strava.com/api/v3/athlete/activities?before=${endDate}&after=${startDate}`
  const query = `https://www.strava.com/api/v3/athlete/activities?before=1734718390&after=1733681306&type=Run`

  const response = await fetch(query, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const data = await response.json()

  return data
}

export async function submitRun({ distance, stripeId, endDate, startDate, slug }) {
  const supabase = await createClient()

  try {
    const { data: { user } } = await supabase.auth.getUser()

    // const stravaData = await connectToStrava()
    const stravaData = {
      access_token: '4485b1dfe6ef555b751cc170d828cbf2da7985e3'
    }

    if (!stravaData) {
      return {
        ok: false,
        error: "You don't seem to be connecrted to Strava. Please connect to Strava in settings to submit your run."
      }
    }

    const stravaRuns = await getStravaRuns(stravaData.access_token, startDate, endDate)
    
    // verify if there is a run that matches the challenge
    const run = stravaRuns.find(run => run.distance >= distance * 1000)
    
    if (!run) {
      return {
        ok: false,
        error: "We couldn't find a run that matches the challenge. Please try again."
      }
    }

    // submit the run    
    const { error: supabaseSubmissionError } = await supabase.from('submissions').insert({
      user_id: user.id,
      challenge_slug: slug,
      run_id: run.id,
      distance: run.distance,
      run_date: run.start_date,
      stripe_id: stripeId
    })

    if (supabaseSubmissionError) {
      console.log(supabaseSubmissionError);
      
    }

    return {
      ok: true
    }

  } catch (error) {
    console.log('Error submitting run', error)
    return {
      ok: false
    }
  }
}