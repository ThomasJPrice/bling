import React from 'react'
import OrderEmail from '@/components/emails/OrderEmail'

const EmailTest = () => {
  return (
    <OrderEmail orderData={
      {
        stripe_id: 'cs_test_b1WOvMNpnwOYenn8x3L2izqwk1MKgMlsLcmPtJLkD81KZvTN9bl2J54IJq',
        challenge: '5k Challenge Pre-Order',
        amount: 19.99,
        customer_email: 'thomasjprice2@gmail.com',
        name: 'Thomas Price',
        address: '10 Green Lane\nBedford\nMK42 6AN\nGB',
        challenge_slug: '5k-challenge',
        status: 'purchased',
      }
    } />
  )
}

export default EmailTest