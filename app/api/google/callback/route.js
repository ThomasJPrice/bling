import { linkNewOrder } from "@/actions/checkout";
import { createClient } from "@/utils/supabase/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  // Get the code and query params
  const code = searchParams.get('code');
  const redirect_url = searchParams.get('redirect_url');
  const marketing = searchParams.get('marketing') === 'true';
  const mode = searchParams.get('mode')
  const sessionId = searchParams.get('sessionId')

  if (!mode) {
    console.log('No method passed');
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/`)
  }

  if (!code) {
    console.log('No code present in URL');
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/`);
  }

  const supabase = await createClient();

  // Exchange the "code" for a session
  try {
    const { data: sessionData, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);

    if (sessionError) {
      console.log('Error exchanging code for session:', sessionError);
      return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/`);
    }
  } catch (error) {
    console.log(error);
  }

  // Get the current user (this now works because the session exists)

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    console.log('Error getting user:', userError);
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/`);
  }

  if (mode === 'signup') {
    // Update user metadata
    const { data, error } = await supabase.auth.updateUser({
      data: {
        initial_marketing_consent: marketing
      }
    });

    if (error) {
      console.log('Error updating metadata:', error);
    }
  }

  // create new supabase user (will error if signing in)
  const { data: newUserData, error: newUserError } = await supabase.from('users').insert({
    id: userData.user.id,
    name: userData.user.user_metadata.name
  }).select().single()

  if (newUserError) {
    console.log(newUserError);
  }

  if (mode === 'signup') {
    await linkNewOrder(newUserData, sessionId)
  } else {
    await linkNewOrder({ id: userData.user.id }, sessionId)
  }

  // Redirect back to the provided URL or homepage
  return Response.redirect(`${process.env.NEXT_PUBLIC_URL}${redirect_url || '/'}`);
}
