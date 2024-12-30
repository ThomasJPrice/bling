import { ABOUTCONTENT } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'About Us | BLING',
  description: "Our aim is to provide an affordable and motivational way to recognise your achievements. We think running should be accessible to everyone, that's why we start our distances at 5k, and keep our prices sensible."
}

const AboutUsPage = () => {
  return (
    <div className='container mb-12'>
      <Image src={'/email-image.png'} width={1437.5} height={360} alt='About Us image' className='w-full object-contain mb-4' />

      <div className='w-max mb-4 mx-auto'>
        <h2 className='text-3xl font-bold text-primary italic uppercase'>About Us</h2>
        <div className='w-1/2 h-[1px] bg-primary mt-2 mx-auto' />
      </div>

      <div className='max-w-[800px] mx-auto text-left'>
        {ABOUTCONTENT.map((content, index) => (
          <div key={index} className='mb-4'>
            {content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUsPage