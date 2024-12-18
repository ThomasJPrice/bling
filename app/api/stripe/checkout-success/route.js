import { linkNewOrder } from "@/actions/checkout";
import { createClient } from "@/utils/supabase/server";
import Stripe from "stripe"

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  const searchParams = await request.nextUrl.searchParams

  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    console.log('No session ID provided');
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/`)
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)

  if (!session) {
    console.log('No session exists with that ID');
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/`)
  }

  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    console.log('Not signed in');
    return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/sign-up?session_id=${sessionId}&next=/link-strava`)
  }

  await linkNewOrder(user, sessionId)

  return Response.redirect(`${process.env.NEXT_PUBLIC_URL}/me`)
}