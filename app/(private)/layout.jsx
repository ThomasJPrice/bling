import { checkSignedIn } from '@/actions/login'
import { redirect } from 'next/navigation'
import React from 'react'

const PrivateLayout = async ({ children }) => {
  const signedIn = await checkSignedIn()
  
  if (!signedIn) redirect(`/`)

  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateLayout