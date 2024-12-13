'use client'

import { createClient } from '@/utils/supabase/client'
import { Button } from '../ui/button'
import toast, { LoaderIcon } from 'react-hot-toast'
import { createCheckoutSession } from '@/actions/checkout'
import { urlFor } from '@/sanity/lib/image'
import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'

const CheckoutButton = ({ btnClasses, btnText, item }) => {
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout() {
    if (isLoading) return

    setIsLoading(true)
    const supabase = createClient()

    const { data: itemDetails } = await supabase.from('challenges').select().eq('slug', item.slug.current).single()

    if (!itemDetails) {
      setIsLoading(false) 
      return
     }

    if (itemDetails.qty_left <= 0) {
      toast.error('Sorry! This product has sold out.')
      setIsLoading(false)
      return
    }

    const checkoutErr = await createCheckoutSession({
      title: item.title,
      price: item.entryFee,
      image: urlFor(item.image).url(),
      slug: item.slug.current
    })

    if (checkoutErr) toast.error('An error occured! Please try again or contact us!')

    setIsLoading(false)
  }

  return (
    <Button disabled={isLoading} onClick={handleCheckout} className={btnClasses}>
      {isLoading ? (
        <LoaderCircle className='animate-spin' />
      ) : (
        <span>{btnText}</span>
      )}
    </Button>
  )
}

export default CheckoutButton