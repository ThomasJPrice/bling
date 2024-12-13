import { checkSignedIn } from '@/actions/login';
import LoginCard from '@/components/shared/LoginCard';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Log back in | BLING'
}

export default async function SignIn(props) {
  const searchParams = await props.searchParams

  const signedIn = await checkSignedIn()

  if (signedIn) redirect(`${searchParams.redirect_url || '/'}`)

  return (
    <div className='min-h-screen relative w-full flex justify-center items-center'>
      <LoginCard mode='signin' redirectUrl={searchParams.redirect_url} />

      <div className='absolute -z-10 top-0 left-0 w-full min-h-screen bg-black/20'></div>
      <Image src='/login-image.png' alt='Woman running looking happy' fill className='object-cover -z-20 absolute w-full min-h-screen top-0 left-0' />
    </div>
  );
}

// to do 
// - exchange code for session on sign in with google (new api route and redirects)
// - payments