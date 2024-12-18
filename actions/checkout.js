'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import Stripe from "stripe"

export async function createCheckoutSession(item) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const supabase = await createClient()

  if (!item) return

  const { data: { user } } = await supabase.auth.getUser()

  let redirectPath = null

  console.log(user.id);
  

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: user ? `${process.env.NEXT_PUBLIC_URL}/api/stripe/checkout-success?session_id={CHECKOUT_SESSION_ID}` : `${process.env.NEXT_PUBLIC_URL}/sign-up?session_id={CHECKOUT_SESSION_ID}&next=/link-strava`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/`,
      line_items: [{
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.title,
            images: [item.image],
            metadata: {
              slug: item.slug,
              user_id: user ? user.id : null
            }
          },
          unit_amount: Math.round(item.price * 100)
        },
        quantity: 1
      }],
      allow_promotion_codes: true,
      shipping_address_collection: {
        allowed_countries: ['GB']
      },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: 'Free UK Royal Mail 1st Class Shipping',
            fixed_amount: {
              amount: 0,
              currency: 'gbp'
            },
            type: 'fixed_amount'
          }
        }
      ],
      metadata: {
        slug: item.slug,
      }
    })

    redirectPath = session.url
  } catch (error) {
    console.log(error);
    return true
  } finally {
    if (redirectPath) {
      redirect(redirectPath)
    }
  }

}


export async function linkNewOrder(user, sessionId) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const supabase = await createClient()

  if (!user || !sessionId) {
    return
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)

  if (!session) {
    return
  }

  const { data: currentUserData, error: currentUserError } = await supabase.from('users').select().eq('id', user.id).single()

  if (currentUserError) {
    console.log(currentUserError);
    return
  }

  var userChallenges = currentUserData.challenges

  if (userChallenges.find((value) => value.stripe_id === session.id)) {
    console.log('Already added purchase.');
    return
  }

  userChallenges.push({
    slug: session.metadata.slug,
    status: 'purchased',
    submission: null,
    purchaseDate: session.created,
    stripe_id: session.id
  })

  const { data: insertedChallengeData, error: insertedChallengeError } = await supabase.from('users').update({
    challenges: userChallenges
  }).eq('id', user.id)

  if (insertedChallengeError) {
    console.log(insertedChallengeError);
    return
  }
}