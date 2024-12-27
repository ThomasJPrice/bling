import React from 'react'
import EmailWrapper from './EmailWrapper'
import EmailPreview from './EmailPreview'
import { Button, Heading, Img, Link, Text } from '@react-email/components'

const SignUpEmail = ({ userData }) => {
  return (
    <EmailWrapper>
      <EmailPreview>
        You're all set up and ready to take on a challenge.
      </EmailPreview>

      {/* <Img src='https://bling-lilac.vercel.app/email-image.png' className='h-[150px] w-full object-cover object-top' /> */}

      <div className='p-2'>
        <Heading as='h1' className='text-2xl text-center font-bold mb-6 text-[#d4af37]'>
          Welcome to BLING Club!
        </Heading>

        <Text>
          Hi {userData.name}, thank you for creating an account - you're all set up and ready to take on a challenge.
        </Text>

        <Text>
          Our aim is to provide an affordable and motivational way to recognise your achievements - and by joining us, we know this is important to you too.
        </Text>

        <Text>
          As you know we retire the limited edition BLING medal designs when the challenges sell out so by being part of BLING Club you'll be among the first to know when a new challenge drops.
        </Text>

        <Text>
          Your BLING account is ready for you - you'll find details of the challenges you've bought and the all-important <em>Submit</em> button. This is where your Strava account lets us know if you have completed any eligible runs.
        </Text>

        <div className='flex justify-center items-center w-full'>
            <Link href='https://blingclub.co.uk/me' className='text-[#171717] bg-[#d4af37] flex items-center justify-center mx-auto rounded-[0.3rem] text-sm font-medium px-4 py-2'>View your account</Link>
        </div>

        <Text className='!mb-0'>
          Want to give us feedback or have a question? We'd love to hear from you. Drop us a line at <Link className='text-[#d4af37] font-semibold' href='mailto:hello@BLINGClub.co.uk'>hello@BLINGClub.co.uk</Link>
        </Text>
      </div>
    </EmailWrapper>
  )
}

export default SignUpEmail