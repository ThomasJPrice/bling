'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// formData comes in as 
// - email
// - firstName lastName
// - password
// - terms
// - marketing

export async function SignInWithPassword(formData, redirectUrl) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (error) {
    return error.code
  }

  redirect(`${process.env.NEXT_PUBLIC_URL}${redirectUrl || '/'}`)
}

export async function SignInWithGoogle(marketingConsent, redirectUrl, mode) {
  const supabase = await createClient()

  const redirectTo = mode === 'signup' ? `${process.env.NEXT_PUBLIC_URL}/api/google/callback?redirect_url=${redirectUrl || '/'}&marketing=${marketingConsent}&mode=signup` : `${process.env.NEXT_PUBLIC_URL}/api/google/callback?redirect_url=${redirectUrl || '/'}&mode=signup`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectTo
    }
  })

  if (data.url) {
    redirect(data.url)
  }

  if (error) return error
}

export async function SignUpWithPassword(formData, redirectUrl) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signUp({
    email: formData.get('email'),
    password: formData.get('password'),
    options: {
      data: {
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
        initial_marketing_consent: formData.get('marketing') === 'on'
      },
    }
  })

  if (error) {
    return error.code
  }

  redirect(`${process.env.NEXT_PUBLIC_URL}${redirectUrl || '/'}`)
}

export async function checkSignedIn() {
  const supabase = await createClient()

  const { data: userData, error } = await supabase.auth.getUser()

  if (userData.user) return true

  if (error) {
    console.log(error);
  }

  return false
}