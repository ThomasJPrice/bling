import { insertNewOrder } from "@/actions/sheets";
import { createClient } from "@supabase/supabase-js";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {

  const headerList = await headers()
  const sig = headerList.get('stripe-signature')

  const reqBody = await request.text()

  let event;

  try {
    event = stripe.webhooks.constructEvent(reqBody, sig, process.env.STRIPE_SIGNING_SECRET)
  } catch (err) {
    return Response.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed':

      const session = event.data.object

      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id
      )

      const addressObject = session.shipping_details.address
      const address = `${addressObject.line1}
${addressObject.line2}
${addressObject.city}
${addressObject.state}
${addressObject.postal_code}
${addressObject.country}`.replaceAll('null\n', '')

      const data = {
        stripe_id: session.id,
        challenge: lineItems.data[0].description,
        amount: session.amount_total / 100,
        customer_email: session.customer_details.email,
        name: session.shipping_details.name,
        address: address,
        challenge_slug: session.metadata.slug,
        status: 'purchased'
      }


      // SEND CONFIRMATION EMAIL
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderData: data
        })
      })


      // post row to google sheets
      await insertNewOrder(data)

      // post row to supabase
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

      const { data: supabaseData, error: supabaseError } = await supabase.from('orders').insert(data)

      if (supabaseError) {
        console.log('Error pushing to supabase,', supabaseError);
      }

      // decrement challenge qty by 1
      const { data: decrementData, error: decrementError } = await supabase.rpc("decrement_quantity_left", {
        _challenge_slug: data.challenge_slug
      })

      if (decrementError) {
        console.log('Error decreasing qty,', decrementError);
      }

      break
    default: {
      console.log(`Unhandled event type ${event.type}`);
    }
  }
  return Response.json({ received: true })
}