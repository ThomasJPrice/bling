import ChallengeCard from '@/components/shared/ChallengeCard'
import HelpMenu from '@/components/shared/HelpMenu'
import PublicFooter from '@/components/shared/PublicFooter'
import PublicNavbar from '@/components/shared/PublicNavbar'
import SettingsModal from '@/components/shared/SettingsModal'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { createClient } from '@/utils/supabase/server'
import { Cog, HelpCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata = {
  title: 'My Challenges | BLING'
}

const signOut = async () => {
  'use server'
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

async function fetchChallenges() {
  const supabase = await createClient();

  const allChallenges = await client.fetch(`*[_type == 'challenge']`);

  const { data: { user } } = await supabase.auth.getUser();
  const { data: { challenges: userChallenges }, error: userChallengesError } = await supabase
    .from('users')
    .select('challenges')
    .eq('id', user.id)
    .single();

  if (userChallengesError) {
    console.log(userChallengesError);
  }

  const activeChallenges = [];
  const previousChallenges = [];

  userChallenges.forEach(supabaseChallenge => {
    const sanityChallenge = allChallenges.find(sanity => sanity.slug.current === supabaseChallenge.slug);
    if (!sanityChallenge) return;

    const endDate = new Date(supabaseChallenge.endDate * 1000);

    const isActive = endDate > new Date() && supabaseChallenge.submission === null;

    const challenge = {
      supabase: supabaseChallenge,
      sanity: sanityChallenge
    };

    if (isActive) {
      activeChallenges.push(challenge);
    } else {
      previousChallenges.push(challenge);
    }
  });

  return {
    activeChallenges,
    previousChallenges
  };
}



const DashboardPage = async () => {
  const { activeChallenges, previousChallenges } = await fetchChallenges()

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
          <h2 className='text-center text-3xl font-bold text-primary my-4 md:mt-0'>My Challenges</h2>

          <div className='mt-8'>
            <h3 className='text-center text-2xl font-bold text-primary'>Active Challenges</h3>

            <div className='flex flex-col gap-4 mt-4'>
              {activeChallenges.length > 0 ? (
                activeChallenges.map((item, index) => (
                  <ChallengeCard challenge={item.supabase} challengeDetails={item.sanity} key={item + index} active />
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
                  <ChallengeCard challenge={item.supabase} challengeDetails={item.sanity} key={item + index} />
                ))
              ) : (
                <p className='text-center text-lg text-gray-500'>You have no passed challenges</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}

export default DashboardPage