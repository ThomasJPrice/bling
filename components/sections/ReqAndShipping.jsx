import React from 'react'

const ReqAndShipping = ({ challenge }) => {
  return (
    <section id='shipping' className='flex container gap-8 flex-col md:flex-row'>
      <div className='flex-1'>
        <div className='md:w-max max-md:mx-auto'>
          <h2 className='text-2xl font-bold text-primary italic uppercase'>Requirements</h2>
          <div className='w-1/2 h-[1px] bg-primary mt-2 max-md:mx-auto' />
        </div>

        <p className='mt-2'>To complete this challenge and earn your unique medal, you must:</p>

        <ul className='list-disc list-inside mt-2'>
          {challenge.requirements.map((req, index) => (
            <li key={req + index}>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className='flex-1'>
        <div className='md:w-max max-md:mx-auto'>
          <h2 className='text-2xl font-bold text-primary italic uppercase'>Shipping</h2>
          <div className='w-1/2 h-[1px] bg-primary mt-2 max-md:mx-auto' />
        </div>

        <p className='mt-2'>FREE shipping for UK deliveries using Royal Mail 1st Class. Non-UK delivery costs will incur a £5 post and packing fee.</p>
      </div>
    </section>
  )
}

export default ReqAndShipping