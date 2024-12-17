'use server'

import { createClient } from "@/utils/supabase/server"

export async function getStravaStatus() {
  const supabase = await createClient()

  const { data: {user} } = await supabase.auth.getUser()

  if (!user) return {
    status: false
  }

  const {data: userData} = await supabase.from('users').select().eq('id', user.id).single()

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