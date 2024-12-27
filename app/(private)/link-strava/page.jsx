import { getStravaStatus } from "@/actions/strava";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation";
import { FaStrava } from "react-icons/fa";

export const metadata = {
  title: 'Link Strava | BLING'
}

const LinkStrava = async (props) => {
  const stravaStatus = await getStravaStatus()

  if (stravaStatus.status) redirect('/me')

  // error handling from route
  const searchParams = await props.searchParams
  const error = searchParams.error

  return (
    <div className='min-h-screen relative w-full flex justify-center items-center'>
      <Card className="w-full max-w-md shadow-md m-4">
        <CardHeader>
          {(error && error !== 'scopes') && (
            <div className="border border-red-700 text-red-700 p-1 mb-4">
              An error occured while linking Strava. Please try again or contact support.
            </div>
          )}

          <Link href='/'><Image src='/main-logo.png' alt="BLING" width={634} height={187} className="h-[30px] w-fit object-contain mx-auto mb-2" /></Link>
          <CardTitle className="text-2xl font-bold text-center">
            Link your Strava account
          </CardTitle>
          <CardDescription className='text-center'>
            By integrating with Strava, we make reviewing your challenge submission instant, so you can get your unique medal faster!
          </CardDescription>

          {error === 'scopes' && (
            <div className="border border-red-700 text-red-700 p-1 !mt-4">
              <p className="mb-2">Please try again and make sure to check both boxes to make checking your runs as smooth as possible!</p>

              <Image src='/strava-scopes.png' width={351} height={389} alt="Tick both boxes in the Strava UI" className="w-full" />
            </div>
          )}

          {/* <Link href={`https://www.strava.com/oauth/authorize?client_id=${process.env.STRAVA_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_URL}/api/strava/callback&response_type=code&scope=read,read_all,activity:read${error ? '&approval_prompt=force' : ''}`} className="!mt-4"> */}
          <Link href={`https://www.strava.com/oauth/authorize?client_id=${process.env.STRAVA_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_URL}/api/strava/callback&response_type=code&scope=read,read_all,activity:read&approval_prompt=force`} className="!mt-4">
            <Button className='w-full bg-[#FC4C02] hover:bg-[#FC4C02]/90 text-foreground'><FaStrava /> Connect Strava</Button>
          </Link>
        </CardHeader>

      </Card>

      <div className='absolute -z-10 top-0 left-0 w-full min-h-screen bg-black/20'></div>
      <Image src='/login-image.png' alt='Woman running looking happy' fill className='object-cover -z-20 absolute w-full min-h-screen top-0 left-0' />
    </div>
  )
}

export default LinkStrava