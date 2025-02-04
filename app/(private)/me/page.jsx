import React from 'react'
import { Button } from '@/components/ui/button'
import SettingsModal from '@/components/shared/SettingsModal'
import HelpMenu from '@/components/shared/HelpMenu'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ChallengeList from '@/components/shared/ChallengeList'
import PublicFooter from '@/components/shared/PublicFooter'

export const metadata = {
  title: 'My Challenges | BLING'
}

const signOut = async () => {
  'use server'
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

const DashboardPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
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

          {/* No Suspense needed since ChallengeList handles its own loading */}
          <ChallengeList />
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}

export default DashboardPage