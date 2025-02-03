import React, { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import MeChallengeCard from '@/components/shared/MeChallengeCard'
import MeChallengeCardSkeleton from '@/components/shared/MeChallengeCardSkeleton'
import PublicFooter from '@/components/shared/PublicFooter'
import PublicNavbar from '@/components/shared/PublicNavbar'
import SettingsModal from '@/components/shared/SettingsModal'
import HelpMenu from '@/components/shared/HelpMenu'
import { client } from '@/sanity/lib/client'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ChallengeListSkeleton from '@/components/shared/ChallengeListSkeleton'

export const metadata = {
  title: 'My Challenges | BLING'
}

const signOut = async () => {
  'use server'
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

// Fetch challenges in a separate component
async function ChallengeList() {
  const supabase = await createClient()

  const allChallenges = await client.fetch(`*[_type == 'challenge']`)

  const { data: { user } } = await supabase.auth.getUser()
  const { data: { challenges: userChallenges }, error: userChallengesError } = await supabase
    .from('users')
    .select('challenges')
    .eq('id', user.id)
    .single()

  if (userChallengesError) {
    console.log(userChallengesError)
  }

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

  return (
    <>
      <div className='mt-8'>
        <h3 className='text-center text-2xl font-bold text-primary'>Active Challenges</h3>
        <div className='flex flex-col gap-4 mt-4'>
          {activeChallenges.length > 0 ? (
            activeChallenges.map((item, index) => (
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
          {previousChallenges.length > 0 ? (
            previousChallenges.map((item, index) => (
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

const DashboardPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* dashboard navbar */}
      <nav className="container flex justify-between items-center py-4 md:py-6">
        <Link href='/' className="flex-shrink-0">
          <Image priority src='/main-logo.png' width={643} height={187} alt="BLING" className="h-[40px] object-contain w-fit" />
        </Link>

        <ul className='flex items-center gap-4'>
          <SettingsModal />
          <HelpMenu />
          <form action={signOut}>
            <Button type='submit' variant='secondary'>
              Sign Out
            </Button>
          </form>
        </ul>
      </nav>

      <main className='flex-grow container mb-8'>
        <div className='max-w-[800px] w-full mx-auto'>
          <div className='md:w-max mb-4 mx-auto'>
            <h2 className='text-3xl font-bold text-primary italic uppercase'>My Challenges</h2>
            <div className='w-1/2 h-[1px] bg-primary mt-2 mx-auto' />
          </div>

          {/* Use Suspense to show loading UI while fetching challenges */}
          <Suspense fallback={<ChallengeListSkeleton />}>
            <ChallengeList />
          </Suspense>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}

export default DashboardPage
