import { ChallengeCard } from '@/components/shared/ChallengeCard'
import { client } from '@/sanity/lib/client'
import { Medal } from 'lucide-react'
import { getChallengeEndDate } from "@/lib/utils"
import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'

export const metadata = {
  title: 'Our Challenges | BLING',
  description: "Whether you're a new runner or a seasoned pro, we have challenges for everyone. All of our quality medals are unique to a particular event and retired when the numbers are reached so you will be one of only a handful of owners of your particular medal."
}

const fetchChallenges = async () => {
  const challenges = await client.fetch(`*[_type == 'challenge' ] | order(openFrom)`)
  return challenges.filter(challenge => {
    const now = new Date()
    const openFrom = new Date(challenge.openFrom)
    const endDate = new Date(getChallengeEndDate(challenge.openFrom, 0, challenge.duration) * 1000)

    return openFrom > now || endDate >= now
  })
}

const ChallengeList = async () => {
  const challenges = await fetchChallenges()

  if (challenges.length === 0) {
    return (
      <div className='text-center flex flex-col items-center gap-1'>
        <Medal className='text-primary' />
        No challenges at the moment. Check back soon!
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-8'>
      {challenges.map((item, index) => (
        <ChallengeCard challenge={item} key={item._id || index} />
      ))}
    </div>
  )
}

const ChallengeListSkeleton = () => (
  <div className='flex flex-col gap-8'>
    {[...Array(2)].map((_, i) => (
      <Skeleton key={i} className='h-[120px] w-full rounded-lg' />
    ))}
  </div>
)

const ChallengesPage = () => {
  return (
    <div className='container mb-8'>
      <div className='flex flex-col items-center'>
        <div className='md:w-max mb-4'>
          <h2 className='text-3xl font-bold text-primary italic uppercase'>Our Challenges</h2>
          <div className='w-1/2 h-[1px] bg-primary mt-2 mx-auto' />
        </div>
        <p className='text-center max-w-[600px]'>
          Whether you're a new runner or a seasoned pro, we have challenges for everyone. All of our quality medals are unique to a particular event and retired when the numbers are reached so you will be one of only a handful of owners of your particular medal.
        </p>
      </div>

      <div className='mt-8'>
        <Suspense fallback={<ChallengeListSkeleton />}>
          <ChallengeList />
        </Suspense>
      </div>
    </div>
  )
}

export default ChallengesPage
