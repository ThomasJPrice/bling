import { ChallengeCard } from '@/components/shared/ChallengeCard'
import { client } from '@/sanity/lib/client'
import { Medal } from 'lucide-react'
import { getChallengeEndDate } from "@/lib/utils"
import React from 'react'

export const metadata = {
  title: 'Our Challenges | BLING',
  description: "Whether you're a new runner or a seasoned pro, we have challenges for everyone. All of our quality medals are unique to a particular event and retired when the numbers are reached so you will be one of only a handful of owners of your particular medal."
}

const ChallengesPage = async () => {
  const challenges = await client.fetch(`*[_type == 'challenge' ] | order(openFrom)`)

  const filteredChallenges = challenges.filter(challenge => {
    const now = new Date()
    const openFrom = new Date(challenge.openFrom)
    const endDate = new Date(getChallengeEndDate(challenge.openFrom, 0, challenge.duration) * 1000)

    if (openFrom > now) {
      return true
    } else if (endDate >= now) {
      return true
    }
    return false
  })

  return (
    <div className='container mb-8'>
      <div className='flex flex-col items-center'>
        <div className='md:w-max mb-4'>
          <h2 className='text-3xl font-bold text-primary italic uppercase'>Our Challenges</h2>
          <div className='w-1/2 h-[1px] bg-primary mt-2 mx-auto' />
        </div>
        <p className='text-center max-w-[600px]'>Whether you're a new runner or a seasoned pro, we have challenges for everyone. All of our quality medals are unique to a particular event and retired when the numbers are reached so you will be one of only a handful of owners of your particular medal.</p>
      </div>

      <div className='mt-8'>
        {filteredChallenges.length > 0 ? (
          <div className='flex flex-col gap-8'>
            {filteredChallenges.map((item, index) => (
              <ChallengeCard challenge={item} key={item._id || index} />
            ))}
          </div>
        ) : (
          <div className='text-center flex flex-col items-center gap-1'>
            <Medal className='text-primary' />
            No challenges at the moment. Check back soon!
          </div>
        )}
      </div>
    </div>
  )
}

export default ChallengesPage
