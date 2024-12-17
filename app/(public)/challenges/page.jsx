import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Calendar, Clock, MapPin, Medal, Ruler } from 'lucide-react'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Our Challenges | BLING',
  description: "Whether you're a new runner or a seasons pro, we have challenges for everyone. All of our quality medals are unique to a particular event and retired when the numbers are reached so you will be one of only a handful of owners of your particular medal."
}

const ChallengeCard = ({ challenge }) => {
  return (
    <div className='w-full bg-secondary p-4 rounded-[0.3rem] flex flex-col md:flex-row gap-4'>
      <div className='flex-1'>
        <Image src={urlFor(challenge.image).url()} width={800} height={800} alt={`Medal for ${challenge.title}`} className='rounded-[0.2rem] object-cover' />
      </div>

      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <h3 className='text-2xl text-primary font-bold'>{challenge.title}</h3>
          <p className='text-lg'>£{challenge.entryFee}</p>

          <div className='mt-2 line-clamp-4'>
            <PortableText value={challenge.description} />
          </div>

          <div className='mt-4 flex flex-col gap-2'>
            {/* distance */}
            <div className='flex items-center gap-2'>
              <MapPin className='w-5 h-5 text-muted-foreground' />
              <p>{challenge.distance}km</p>
            </div>

            {/* duration */}
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5 text-muted-foreground' />
              <p>{challenge.duration.quantity} {challenge.duration.unit}</p>
            </div>

            {/* from */}
            <div className='flex items-center gap-2'>
              <Calendar className='w-5 h-5 text-muted-foreground' />
              <p>From {new Date(challenge.openFrom).toLocaleDateString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className='flex items-center gap-2'>
              <Medal className='w-5 h-5 text-muted-foreground' />
              <p>Only {challenge.totalStock} places available</p>
            </div>
          </div>
        </div>

        <Link className='mt-4' href={`/challenges/${challenge.slug.current}`}>
          <Button className='w-full'>Find out more</Button>
        </Link>
      </div>
    </div>
  )
}

const ChallengesPage = async () => {
  const challenges = await client.fetch(`*[_type == 'challenge'] | order(openFrom)`)

  return (
    <div className='container mb-8'>
      <div className='flex flex-col items-center'>
        <h2 className='text-center text-3xl font-bold text-primary my-4 md:mb-4 md:mt-0'>Our Challenges</h2>
        <p className='text-center max-w-[600px]'>Whether you're a new runner or a seasons pro, we have challenges for everyone. All of our quality medals are unique to a particular event and retired when the numbers are reached so you will be one of only a handful of owners of your particular medal.</p>
      </div>

      <div className='mt-8'>
        {challenges ? (
          <div className='flex flex-col gap-8'>
            {challenges.map((item, index) => (
              <ChallengeCard challenge={item} key={item + index} />
            ))}
          </div>
        ) : (
          <div className='text-center flex flex-col items-center gap-1'><Medal className='text-primary' /> No challenges at the moment. Check back soon!</div>
        )}
      </div>
    </div>
  )
}

export default ChallengesPage