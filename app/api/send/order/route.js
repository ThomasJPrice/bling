import InternalOrderEmail from "@/components/emails/InternalOrderEmail";
import OrderEmail from "@/components/emails/OrderEmail";

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { orderData } = await req.json()

  if (!orderData) return Response.json({ error: 'Missing order data' }, { status: 400 })

  try {
    const { data, error } = await resend.emails.send({
      from: 'BLING Club <updates@email.blingclub.co.uk>',
      to: orderData.customer_email,
      subject: 'Thank you for your order! 🎉',
      react: OrderEmail({ orderData: orderData }),
      replyTo: 'hello@blingclub.co.uk'
    })

    // internal
    const { data: internalData, error: internalError } = await resend.emails.send({
      from: 'BLING Club <updates@email.blingclub.co.uk>',
      to: 'hello@blingclub.co.uk',
      subject: `New order for ${orderData.challenge}! 🎉`,
      react: InternalOrderEmail({ orderData: orderData }),
      replyTo: 'hello@blingclub.co.uk'
    })

    if (error) return Response.json({ error }, { status: 500 })

    return Response.json({ data })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}