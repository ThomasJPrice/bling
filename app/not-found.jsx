import PublicFooter from '@/components/shared/PublicFooter'
import PublicNavbar from '@/components/shared/PublicNavbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: '404 | BLING'
}

const NotFound = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <PublicNavbar />

      <main className='flex-grow container flex flex-col items-center gap-4'>
        <h1 className='font-black text-4xl text-primary'>404</h1>
        <p className='text-lg'>The page you are looking for can't be found!</p>

        <Link href='/' className='mt-4'>
          <Button>Go home</Button>
        </Link>
      </main>

      <PublicFooter />
    </div>
  )
}

export default NotFound