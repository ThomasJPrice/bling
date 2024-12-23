import React from 'react'
import EmailWrapper from './EmailWrapper'
import EmailPreview from './EmailPreview'
import { Heading } from '@react-email/components'

const SignUpEmail = ({ userData }) => {
  return (
    <EmailWrapper>
      <EmailPreview>
        You're all set up and ready to take on a challenge.
      </EmailPreview>

      <Heading as='h1' className='text-2xl text-center font-bold mb-6 text-[#d4af37]'>
        Welcome to BLING Club!
      </Heading>
    </EmailWrapper>
  )
}

export default SignUpEmail