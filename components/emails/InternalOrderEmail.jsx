import React from 'react'
import EmailWrapper from './EmailWrapper'
import EmailPreview from './EmailPreview'
import { Button, Heading, Img, Link, Text } from '@react-email/components'

const InternalOrderEmail = ({ orderData }) => {
  return (
    <EmailWrapper internal>
      <EmailPreview>
        New order from {orderData.name} on {orderData.challenge}
      </EmailPreview>

      <div className='p-2'>
        <Heading as='h1' className='text-2xl text-center font-bold my-4 text-[#d4af37]'>
          New order! 🎉
        </Heading>

        {/* <Text>
          Hi {orderData.name.split(' ')[0]}, we're thrilled you've decided to take on the {orderData.challenge} and can't wait to see you cross the finish line.
        </Text> */}

        <div className='border border-[#d4af37] p-4 my-4 rounded-[0.3rem] border-solid'>
          <p className='text-lg my-0 mb-2 font-semibold text-[#d4af37]'>Order details:</p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Name:</span> {orderData.name}
          </p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Email:</span> {orderData.customer_email}
          </p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Challenge:</span> {orderData.challenge}
          </p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Amount:</span> £{orderData.amount}
          </p>
          <p className='text-sm my-0'>
            <span className='font-semibold'>Shipping address:</span> {orderData.address.replaceAll('\n', ', ')}
          </p>
        </div>

        <div className='flex justify-center mt-4 items-center w-full'>
          <Link href='https://docs.google.com/spreadsheets/d/1JU7LUBd1qboahDoQd8w4CaeeUzDWOCQ7MbhQDTC4oPc/edit?usp=sharing' className='text-[#171717] bg-[#d4af37] flex items-center justify-center mx-auto rounded-[0.3rem] text-sm font-medium px-4 py-2'>View Orders</Link>
        </div>
      </div>
    </EmailWrapper>
  )
}

export default InternalOrderEmail