import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const AboutSection = () => {
  return (
    <section id='about' className='container flex flex-col md:flex-row gap-8 items-center'>
      <div className='flex-1 flex flex-col gap-6'>
        <div className='md:w-max'>
          <h2 className='text-3xl font-bold text-primary italic uppercase'>About Us</h2>
          <div className='w-1/2 h-[1px] bg-primary mt-2'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <p>Our aim is to provide an affordable and motivational way to recognise your achievements.</p>

          <p>As experienced runners ourselves we know how important motivation is when you are new to running, training for an event or just needing that extra push to lace up your trainers and get out of the door.</p>

          <p>We think running should be accessible to everyone, that's why we start our distances at 5k, and keep our prices sensible. And if you want to pound the pavements or treadmill it at home - it's up to you - it all counts.</p>
        </div>

        <Link href='/about'>
          <Button>Find out More</Button>
        </Link>
      </div>

      <div className='flex-1 aspect-square'>
        <Image src='/login-image.png' width={800} className='h-full object-cover object-right rounded-xl' height={800} alt='About' />
      </div>
    </section>
  )
}

export default AboutSection