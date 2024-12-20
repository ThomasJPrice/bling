'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { LoaderCircle } from 'lucide-react'
import { submitRun } from '@/actions/strava'
import toast from 'react-hot-toast'
import { getStartDate } from '@/lib/utils'

const SubmitButton = ({ challenge, challengeDetails, open }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const startDate = getStartDate(challenge.purchaseDate, challengeDetails.openFrom)

  const handleSubmit = async () => {
    if (isLoading || isSubmitted || !open) return

    setIsLoading(true)

    const challengeData = {
      distance: challengeDetails.distance,
      endDate: challenge.endDate,
      startDate: startDate,
      slug: challenge.slug,
      stripeId: challenge.stripe_id,
      // type (future)
    }

    const response = await submitRun(challengeData)

    if (!response.ok) {
      if (response.error) {
        toast.error(response.error)
      } else {
        toast.error('Something went wrong! Please try again or contact support.')
      }
    } else {
      toast.success('Run submitted! Watch out for a confirmation email headed your way!')
    }

    setIsLoading(false)
  }

  return (
    <Button onClick={handleSubmit} disabled={!open || isLoading || isSubmitted}>
      {open ? (
        isLoading ? <LoaderCircle className="animate-spin" /> : isSubmitted ? 'Submitted!' : 'Submit'
      ) : 'Submissions not open yet!'}
    </Button>
  )
}

export default SubmitButton