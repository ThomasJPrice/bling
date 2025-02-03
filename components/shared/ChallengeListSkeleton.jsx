import React from 'react'
import MeChallengeCardSkeleton from '@/components/shared/MeChallengeCardSkeleton'

const ChallengeListSkeleton = () => {
  return (
    <>
      <div className='mt-8'>
        <h3 className='text-center text-2xl font-bold text-primary'>Active Challenges</h3>
        <div className='flex flex-col gap-4 mt-4'>
          <MeChallengeCardSkeleton />
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-center text-2xl font-bold text-primary'>Passed Challenges</h3>
        <div className='flex flex-col gap-4 mt-4'>
          <MeChallengeCardSkeleton />
        </div>
      </div>
    </>
  )
}

export default ChallengeListSkeleton
