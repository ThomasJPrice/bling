import React from 'react'
import EmailWrapper from './EmailWrapper'
import EmailPreview from './EmailPreview'
import { Button, Heading, Img, Link, Text } from '@react-email/components'

const SubmissionEmail = ({ orderData, submissionData }) => {
  return (
    <EmailWrapper>
      <EmailPreview>
        Well done on completing the challenge! Your submission has been verified, and your medal is now being shipped to you.
      </EmailPreview>

      <Img src="https://bling-lilac.vercel.app/main-logo.png" alt="BLING Logo" className="w-[120px] mx-auto mt-4" />

      <div className='p-2'>
        <Heading as='h1' className='text-2xl text-center font-bold my-4 text-[#d4af37]'>
          Congratulations, {orderData.name.split(' ')[0]}! 🎉
        </Heading>

        <Text>
          You've officially completed the <strong>{orderData.challenge.replace('Pre-Order', '')}</strong> and proven your dedication and determination. We're so proud of your achievement!
        </Text>

        <div className='border border-[#d4af37] p-4 my-4 rounded-[0.3rem] border-solid'>
          <p className='text-lg my-0 mb-2 font-semibold text-[#d4af37]'>Order details:</p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Challenge:</span> {orderData.challenge.replace('Pre-Order', '')}
          </p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Shipping address:</span> {orderData.address.replaceAll('\n', ', ')}
          </p>
        </div>

        <Text>Your submission has been successfully verified, and your medal is now on its way. It's a well-deserved reward for your hard work and commitment.</Text>

        <Text></Text>

        <Text>Once your medal arrives, we'd love to see your hard-earned reward in action! Share a photo of you with your medal on social media and tag us at <strong>@BLINGClub</strong>.</Text>

        <Text>Feeling inspired to take on another challenge? Push yourself further and explore more challenges designed to keep you moving and motivated.</Text>


        <div className='flex justify-center mt-4 items-center w-full'>
          <Link href='https://blingclub.co.uk/challenges' className='text-[#171717] bg-[#d4af37] flex items-center justify-center mx-auto rounded-[0.3rem] text-sm font-medium px-4 py-2'>Discover more challenges</Link>
        </div>

        <Text>Thank you for being part of this challenge and for pushing yourself to reach new goals.</Text>

        <Text>If you have any questions or need assistance, feel free to reply to this email or contact our support team at <Link className='text-[#d4af37] font-semibold' href='mailto:hello@BLINGClub.co.uk'>hello@BLINGClub.co.uk</Link></Text>
      </div>
    </EmailWrapper>
  )
}

export default SubmissionEmail