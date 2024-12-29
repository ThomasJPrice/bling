import { GeneralChallengeCard } from "@/app/(public)/challenges/page"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
import { Button } from "../ui/button"

const featuredSlug = '5k-challenge'

const FeaturedChallenge = async () => {
  const challengeDetails = await client.fetch(`*[_type == 'challenge' && slug.current == '${featuredSlug}'][0]`)

  if (!challengeDetails) return


  return (
    <section id='featured' className="container flex flex-col items-center gap-8">
      <div className='w-max'>
        <h2 className='text-3xl font-bold text-primary italic uppercase'>Featured challenge</h2>
        <div className='w-1/2 h-[1px] bg-primary mt-2 mx-auto' />
      </div>

      <GeneralChallengeCard challenge={challengeDetails} />

      <Link href='/challenges'>
      <Button variant='secondary'>View all Challenges</Button>
    </Link>
    </section>
  )
}

export default FeaturedChallenge