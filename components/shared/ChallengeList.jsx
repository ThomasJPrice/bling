'use client' // Forces it to be a client component

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import MeChallengeCard from '@/components/shared/MeChallengeCard'
import ChallengeListSkeleton from '@/components/shared/ChallengeListSkeleton'
import { createClient } from '@/utils/supabase/client'

export default function ChallengeList() {
  const [challenges, setChallenges] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient()

      const allChallenges = await client.fetch(`*[_type == 'challenge']`)

      const { data: { user } } = await supabase.auth.getUser()
      const { data: { challenges: userChallenges } } = await supabase
        .from('users')
        .select('challenges')
        .eq('id', user.id)
        .single()

      const activeChallenges = []
      const previousChallenges = []

      userChallenges.forEach(supabaseChallenge => {
        const sanityChallenge = allChallenges.find(sanity => sanity.slug.current === supabaseChallenge.slug)
        if (!sanityChallenge) return

        const endDate = new Date(supabaseChallenge.endDate * 1000)
        const isActive = endDate > new Date() && supabaseChallenge.submission === null

        const challenge = { supabase: supabaseChallenge, sanity: sanityChallenge }

        if (isActive) {
          activeChallenges.push(challenge)
        } else {
          previousChallenges.push(challenge)
        }
      })

      setChallenges({ activeChallenges, previousChallenges })
    }

    fetchData()
  }, [])

  if (!challenges) {
    return <ChallengeListSkeleton />
  }

  return (
    <>
      <div className='mt-8'>
        <h3 className='text-center text-2xl font-bold text-primary'>Active Challenges</h3>
        <div className='flex flex-col gap-4 mt-4'>
          {challenges.activeChallenges.length > 0 ? (
            challenges.activeChallenges.map((item) => (
              <MeChallengeCard challenge={item.supabase} challengeDetails={item.sanity} key={item.supabase.id} active />
            ))
          ) : (
            <p className='text-center text-lg text-gray-500'>You have no active challenges</p>
          )}
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-center text-2xl font-bold text-primary'>Passed Challenges</h3>
        <div className='flex flex-col gap-4 mt-4'>
          {challenges.previousChallenges.length > 0 ? (
            challenges.previousChallenges.map((item) => (
              <MeChallengeCard challenge={item.supabase} challengeDetails={item.sanity} key={item.supabase.id} />
            ))
          ) : (
            <p className='text-center text-lg text-gray-500'>You have no passed challenges</p>
          )}
        </div>
      </div>
    </>
  )
}
