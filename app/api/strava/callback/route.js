// 1. get code and scopes from params
// 2. check scopes - if not correct redirect
// 3. use code to get info
// 4. get user and push to db

import { createClient } from "@/utils/supabase/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams

  const code = searchParams.get('code')
  const scopeParam = searchParams.get('scope')

  if (!code || !scopeParam) {
    console.log('Request not coming from Strava');
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/link-strava?error=unauthorized`)
  }

  const scopes = scopeParam.split(',')

  const requiredScopes = ['read', 'activity:read', 'read_all'];

  const hasAllScopes = requiredScopes.every((requiredScope) =>
    scopes.includes(requiredScope)
  );

  if (!hasAllScopes) {
    console.log('Invalid scopes')
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/link-strava?error=scopes`)
  }

  try {
    const url = `https://www.strava.com/api/v3/oauth/token?code=${code}&client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&grant_type=authorization_code`

    const response = await fetch(url, {
      method: 'POST'
    })

    const data = await response.json()

    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/link-strava?error=unauthorized`)

    const { data: supabaseData, error: supabaseError } = await supabase.from('users').update({
      city: data.athlete.city,
      country: data.athlete.country,
      strava_access_token: data.access_token,
      strava_refresh_token: data.refresh_token,
      strava_expires_at: data.expires_at,
      sex: data.athlete.sex
    }).eq('id', user.id)

    if (supabaseError) {
      console.log('Error updating supabase user', supabaseError);
    }

  } catch (error) {
    console.log(error);
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/link-strava?error=true`)
  }

  return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/me`)
}