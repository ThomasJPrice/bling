import ChallengeCard from '@/components/shared/ChallengeCard'
import PublicFooter from '@/components/shared/PublicFooter'
import PublicNavbar from '@/components/shared/PublicNavbar'
import { Button } from '@/components/ui/button'
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

const DashboardPage = async () => {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  const { data: userData, error: userDataError } = await supabase.from('users').select().eq('id', user.id).single()

  if (userDataError) {
    console.log(userDataError);
  }

  const challenges = userData.challenges

  return (
    <div className='flex flex-col min-h-screen'>
      {/* dashboard navbar */}
      <nav className="container flex justify-between items-center py-4 md:py-6">
        <Link href='/' className="flex-shrink-0">
          <Image priority src='/main-logo.png' width={643} height={187} alt="BLING" className="h-[40px] object-contain w-fit" />
        </Link>

        <ul className='flex items-center gap-4'>
          <button className='hover:text-primary transition-all duration-300'>
            <Cog className='w-5 h-5' />
          </button>

          <button className='hover:text-primary transition-all duration-300'>
            <HelpCircle className='w-5 h-5' />
          </button>

          <form action={signOut}>
            <Button type='submit' variant='secondary'>
              Sign Out
            </Button>
          </form>
        </ul>
      </nav>

      <main className='flex-grow container'>
        <div className='max-w-[800px] w-full mx-auto'>
          <h2 className='text-center text-3xl font-bold text-primary my-4 md:mb-4 md:mt-0'>My Challenges</h2>

          <div>
            <h3 className='text-center text-2xl font-bold text-primary'>Active Challenges</h3>

            <div className='flex flex-col gap-4'>
              {challenges.map((item, index) => (
                <ChallengeCard challenge={item} key={item + index} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}

export default DashboardPage