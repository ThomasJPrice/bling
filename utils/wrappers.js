import { createClient } from "./supabase/server"

export async function SignedIn({ children }) {
  const supabase = await createClient()

  const {data: userData} = await supabase.auth.getUser()

  if (!userData.user) return null

  return (
    <>
      {children}
    </>
  )
}

export async function SignedOut({children}) {
  const supabase = await createClient()

  const {data: userData} = await supabase.auth.getUser()

  if (userData.user) return null

  return (
    <>
      {children}
    </>
  )
}