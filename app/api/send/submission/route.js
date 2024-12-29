import InternalOrderEmail from "@/components/emails/InternalOrderEmail";
import InternalSubmissionEmail from "@/components/emails/InternalSubmissionEmail";
import OrderEmail from "@/components/emails/OrderEmail";
import SubmissionEmail from "@/components/emails/SubmissionEmail";

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { submissionData, orderData } = await req.json()

  if (!submissionData || !orderData) return Response.json({ error: 'Missing order or submission data' }, { status: 400 })

  try {
    const { data, error } = await resend.emails.send({
      from: 'BLING Club <updates@email.blingclub.co.uk>',
      to: orderData.customer_email,
      subject: 'Congratulations, Your Medal is On Its Way! 🎉',
      react: SubmissionEmail({ orderData: orderData, submissionData: submissionData }),
      replyTo: 'hello@blingclub.co.uk'
    })

    // // internal
    const { data: internalData, error: internalError } = await resend.emails.send({
      from: 'BLING Club <updates@email.blingclub.co.uk>',
      to: 'hello@blingclub.co.uk',
      subject: `New submission for ${orderData.challenge.replace('Pre-Order', '')}! 🎉`,
      react: InternalSubmissionEmail({ orderData: orderData, submissionData: submissionData }),
      replyTo: 'hello@blingclub.co.uk'
    })

    if (error) return Response.json({ error }, { status: 500 })

    return Response.json({ data })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}