import { createCheckoutSession } from '@/actions/checkout'
import CheckoutButton from '@/components/shared/CheckoutButton'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { createClient } from '@/utils/supabase/server'
import { Calendar, Clock, MapPin, Medal } from 'lucide-react'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

export async function generateMetadata(props) {
  const params = await props.params

  const details = await client.fetch(`*[_type == 'challenge' && slug.current == '${params.slug}'][0]`)

  return {
    title: `${details.seo.metaTitle}`,
    description: `${details.seo.metaDescription}`,
    openGraph: {
      images: [`${urlFor(details.seo.ogImage).url()}`]
    }
  }
}

const ChallengeDetails = async (props) => {
  const params = await props.params

  // get details of run from sanity - if not found, 404
  const details = await client.fetch(`*[_type == 'challenge' && slug.current == '${params.slug}'][0]`)

  if (!details) redirect('/404')

  // find initial item qty from supabase - if not found, 404
  const supabase = await createClient()
  const { data: initialValues } = await supabase.from('challenges').select().eq('slug', details.slug.current).single()

  if (!initialValues) redirect('/404')

  return (
    <div className='container'>
      <div className='flex gap-4 flex-col md:flex-row'>
        <div className='flex-1 relative overflow-hidden'>
          {initialValues.qty_left < 70 && (
            initialValues.qty_left === 0 ? (
              <div className='absolute bg-primary text-background font-medium text-lg py-1 -rotate-45 w-[200px] -left-12 top-8 text-center'>Sold out!</div>
            ) : (
              <div className='absolute bg-primary text-background font-medium text-lg py-1 -rotate-45 w-[200px] -left-12 top-8 text-center'>Only {initialValues.qty_left} left!</div>
            )
          )}

          <Image src={urlFor(details.image).url()} width={800} height={800} alt={`Medal for ${details.name}`} className='rounded-[0.2rem] object-cover' />
        </div>

        <div className='flex-1 flex flex-col justify-between'>
          <div>
            <h2 className='text-3xl font-bold text-primary'>{details.title}</h2>
            <p className='text-xl'>£{details.entryFee}</p>

            <div className='mt-2 flex flex-col gap-1'>
              <PortableText value={details.description} />
            </div>

            <div className='mt-4 flex flex-col gap-2'>
              {/* distance */}
              <div className='flex items-center gap-2'>
                <MapPin className='w-5 h-5 text-muted-foreground' />
                <p>{details.distance}km</p>
              </div>

              {/* duration */}
              <div className='flex items-center gap-2'>
                <Clock className='w-5 h-5 text-muted-foreground' />
                <p>{details.duration.quantity} {details.duration.unit}</p>
              </div>

              {/* from */}
              <div className='flex items-center gap-2'>
                <Calendar className='w-5 h-5 text-muted-foreground' />
                <p>From {new Date(details.openFrom).toLocaleDateString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>

              <div className='flex items-center gap-2'>
                <Medal className='w-5 h-5 text-muted-foreground' />
                <p>Only {details.totalStock} places available</p>
              </div>
            </div>
          </div>

          {initialValues.qty_left > 0 ? (
            <CheckoutButton btnClasses={'mt-4'} btnText={'Buy Now'} item={details} />
          ) : (
            <Button className='mt-4 w-full' disabled>Sold out!</Button>
          )}
        </div>
      </div>

      {/* everything else */}
      <div>
        {/* how it works */}
        <div>
          <h3 className='font-bold text-primary text-2xl'>How it works</h3>
        </div>
      </div>
    </div>
  )
}

export default ChallengeDetails