import { TERMS } from '@/utils/constants'
import React from 'react'

const TermsOfService = () => {
  console.log(TERMS);
  

  return (
    <div className='container mb-12'>
      <div className='md:w-max mb-4 mx-auto'>
        <h2 className='text-3xl font-bold text-primary italic uppercase'>Terms of Service</h2>
        <div className='w-1/2 h-[1px] bg-primary mt-2 mx-auto' />
      </div>

      <div className='flex flex-col gap-1 max-w-[800px] mx-auto'>
        {TERMS.split('\n').map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default TermsOfService