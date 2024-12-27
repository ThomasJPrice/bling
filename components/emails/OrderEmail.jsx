import React from 'react'
import EmailWrapper from './EmailWrapper'
import EmailPreview from './EmailPreview'
import { Button, Heading, Img, Link, Text } from '@react-email/components'

const OrderEmail = ({ orderData }) => {
  return (
    <EmailWrapper>
      <EmailPreview>
        We've received your order, now go and complete your challenge!
      </EmailPreview>

      <Img src="https://bling-lilac.vercel.app/main-logo.png" alt="BLING Logo" className="w-[120px] mx-auto mt-4" />

      <div className='p-2'>
        <Heading as='h1' className='text-2xl text-center font-bold my-4 text-[#d4af37]'>
          Thank you for your order! 🎉
        </Heading>

        <Text>
          Hi {orderData.name.split(' ')[0]}, we're thrilled you've decided to take on the {orderData.challenge} and can't wait to see you cross the finish line.
        </Text>

        <div className='border border-[#d4af37] p-4 my-4 rounded-[0.3rem] border-solid'>
          <p className='text-lg my-0 mb-2 font-semibold text-[#d4af37]'>Order details:</p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Challenge:</span> {orderData.challenge}
          </p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Amount:</span> £{orderData.amount}
          </p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Shipping address:</span> {orderData.address}
          </p>
        </div>

        <div>
          <p className=''>To claim your medal:</p>

          <table cellSpacing='16px' className='row-gap-4'>
            <tr>
              <td className="align-middle">
                <div className="bg-[#d4af37] text-[#0B0A0A] w-8 h-8 rounded-full text-center align-middle">
                  <p className='pt-[6px]'>1</p>
                </div>
              </td>
              <td>
                <p className="text-lg font-semibold m-0">Complete the Challenge</p>
                <p className="text-sm m-0">
                  Take on the {orderData.challenge} challenge in your own time, logging
                  your run on Strava. Be sure to complete it before the deadline shown in
                  your dashboard.
                </p>
              </td>
            </tr>

            <tr className=''>
              <td className="align-middle">
                <div className="bg-[#d4af37] text-[#0B0A0A] w-8 h-8 rounded-full text-center align-middle">
                  <p className='pt-[6px]'>2</p>
                </div>
              </td>
              <td>
                <p className="text-lg font-semibold m-0">Submit Your Run</p>
                <p className="text-sm m-0">
                  Once you're done, connect your Strava account and visit the{" "}
                  <strong>/me</strong> page on our website. From there, simply click
                  “Submit” to send us your results.
                </p>
              </td>
            </tr>

            <tr className=''>
              <td className="align-middle">
                <div className="bg-[#d4af37] text-[#0B0A0A] w-8 h-8 rounded-full text-center align-middle">
                  <p className='pt-[6px]'>3</p>
                </div>
              </td>
              <td>
                <p className="text-lg font-semibold m-0">Receive Your Medal</p>
                <p className="text-sm m-0">
                  Once your submission is automatically verified, your medal will be
                  shipped directly to you - a well-deserved reward for your hard work!
                </p>
              </td>
            </tr>
          </table>

        </div>

        <div className='flex justify-center mt-4 items-center w-full'>
          <Link href='https://blingclub.co.uk/me' className='text-[#171717] bg-[#d4af37] flex items-center justify-center mx-auto rounded-[0.3rem] text-sm font-medium px-4 py-2'>Submit your run</Link>
        </div>

        <Text className='text-center !mb-2'>Not signed up yet?</Text>

        <div className='w-full flex justify-center'>
          <Link href={`https://blingclub.co.uk/sign-up?next=/me&session_id=${orderData.stripe_id}`} className='text-[#d4af37] border-[#d4af37] border-solid border px-4 py-2 mx-auto rounded-[0.3rem] text-sm font-semibold'>Sign up now</Link>
        </div>

        <Text className='!mb-0'>
          If you have any questions or need help along the way, we're here for you at <Link className='text-[#d4af37] font-semibold' href='mailto:hello@BLINGClub.co.uk'>hello@BLINGClub.co.uk</Link>
        </Text>
      </div>
    </EmailWrapper>
  )
}

export default OrderEmail