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

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/canceled`,
      customer_email: user ? user.email : null,
      line_items: [{
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.title,
            images: [item.image],
            metadata: {
              slug: item.slug
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
      ]
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