import { PRIVACY, TERMS } from '@/utils/constants'
import React from 'react'

export const metadata = {
  title: 'Privacy Policy | BLING',
}

const TermsOfService = () => {
  return (
    <div className='container mb-12'>
      <div className='md:w-max mb-4 mx-auto'>
        <h2 className='text-3xl font-bold text-primary italic uppercase text-center'>Privacy Policy</h2>
        <div className='w-1/2 h-[1px] bg-primary mt-2 mx-auto' />
      </div>

      <div className='flex flex-col gap-1 max-w-[800px] mx-auto'>
        {PRIVACY.split('\n').map((item, index) => (
          <p key={item + index}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default TermsOfService