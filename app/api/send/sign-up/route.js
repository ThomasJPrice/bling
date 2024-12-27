import SignUpEmail from "@/components/emails/SignUpEmail";

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { userData } = await req.json()

  if (!userData) return Response.json({ error: 'Missing user data' }, { status: 400 })

  try {
    const { data, error } = await resend.emails.send({
      from: 'BLING Club <updates@email.blingclub.co.uk>',
      to: userData.email,
      subject: 'Welcome to BLING Club!',
      react: SignUpEmail({ userData: userData }),
      replyTo: 'hello@blingclub.co.uk'
    })

    if (error) return Response.json({ error }, { status: 500 })

    return Response.json({ data })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}