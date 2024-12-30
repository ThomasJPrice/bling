'use server'

import { getChallengeEndDate } from "@/lib/utils"
import { client } from "@/sanity/lib/client"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import Stripe from "stripe"

const countryCodes = [
  "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AT", "AU", "AW", "AX", "AZ",
  "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS",
  "BT", "BV", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO",
  "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER",
  "ES", "ET", "FI", "FJ", "FK", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL",
  "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID",
  "IE", "IL", "IM", "IN", "IO", "IQ", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI",
  "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV",
  "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MK", "ML", "MM", "MN", "MO", "MQ", "MR", "MS", "MT",
  "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NU",
  "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PY", "QA",
  "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL",
  "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ",
  "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA",
  "VC", "VE", "VG", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW", "ZZ"
];


export async function createCheckoutSession(item) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const supabase = await createClient()

  if (!item) return

  const { data: { user } } = await supabase.auth.getUser()

  let redirectPath = null

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
        allowed_countries: countryCodes
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
          },
        },
        {
          shipping_rate_data: {
            display_name: 'Non-UK Post and Packing',
            fixed_amount: {
              amount: 500,
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

  const sanityChallengeData = await client.fetch(`*[_type == 'challenge' && slug.current == $slug][0]`, { slug: session.metadata.slug })

  if (!sanityChallengeData) {
    console.log('No challenge found.');
    return
  }

  const openFromDate = new Date(sanityChallengeData.openFrom)
  const purchaseDate = new Date(session.created)

  const endDate = getChallengeEndDate(openFromDate, purchaseDate, sanityChallengeData.duration)

  userChallenges.push({
    slug: session.metadata.slug,
    status: 'purchased',
    submission: null,
    purchaseDate: session.created,
    stripe_id: session.id,
    endDate: endDate
  })

  const { data: insertedChallengeData, error: insertedChallengeError } = await supabase.from('users').update({
    challenges: userChallenges
  }).eq('id', user.id)

  if (insertedChallengeError) {
    console.log(insertedChallengeError);
    return
  }
}