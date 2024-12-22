import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function addToMailingList(email, firstName, lastName) {
  await resend.contacts.create({
    email: email,
    firstName: firstName,
    lastName: lastName,
    unsubscribed: false,
    audienceId: process.env.RESEND_AUDIENCE_ID
  })
}