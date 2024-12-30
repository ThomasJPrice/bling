import { createClient } from "@/utils/supabase/server"
import { Calendar, Clock, MapPin, Medal } from "lucide-react"
import { PortableText } from "next-sanity"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { urlFor } from "@/sanity/lib/image"
import ChallengeStatus from "./ChallengeStatus"

export const ChallengeCard = async ({ challenge }) => {
  const supabase = await createClient()
  const { data: initialValues } = await supabase.from('challenges').select().eq('slug', challenge.slug.current).single()

  if (!initialValues) return

  return (
    <div className='w-full bg-secondary p-4 rounded-[0.3rem] flex flex-col md:flex-row gap-4'>
      <div className='flex-1 relative overflow-hidden'>
        {initialValues.qty_left < 70 && (
          initialValues.qty_left === 0 ? (
            <div className='absolute bg-primary text-background font-medium text-lg py-1 -rotate-45 w-[200px] -left-12 top-8 text-center'>Sold out!</div>
          ) : (
            <div className='absolute bg-primary text-background font-medium text-lg py-1 -rotate-45 w-[200px] -left-12 top-8 text-center'>Only {initialValues.qty_left} left!</div>
          )
        )}
        
        <Image src={urlFor(challenge.image).url()} width={800} height={800} alt={`Medal for ${challenge.name}`} className='rounded-[0.2rem] object-cover' />
      </div>

      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <ChallengeStatus challenge={challenge} />

          <h3 className='text-2xl mt-2 text-primary font-bold uppercase italic'>{challenge.title}</h3>
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
