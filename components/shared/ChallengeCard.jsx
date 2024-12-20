import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { daysUntilDeadline, getChallengeEndDate } from "@/lib/utils"
import RequirementsCard from "./RequirementsCard"
import SubmitButton from "./SubmitButton"

const ChallengeCard = async ({ challenge, challengeDetails, active }) => {
  const open = new Date(challengeDetails.openFrom) <= new Date() && new Date() < new Date(challenge.endDate * 1000)

  const daysLeft = daysUntilDeadline(challenge.endDate)

  return (
    <div className='w-full bg-secondary p-2 rounded-[0.3rem] flex flex-col md:flex-row gap-4'>
      <div className="md:w-1/5">
        <Image src={urlFor(challengeDetails.image).url()} alt={`Image for ${challengeDetails.title}`} width={800} height={800} className="rounded-[0.2rem]" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">{challengeDetails.title}</h4>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4 my-2">
            <div className='flex items-center gap-2'>
              <MapPin className='w-5 h-5 text-muted-foreground' />
              <p>{challengeDetails.distance}km</p>
            </div>

            {/* from */}
            <div className='flex items-center gap-2'>
              <Calendar className='w-5 h-5 text-muted-foreground' />
              <p>From {new Date(challengeDetails.openFrom).toLocaleDateString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            {/* duration */}
            {open && (
              <div className='flex items-center gap-2'>
                <Clock className='w-5 h-5 text-muted-foreground' />
                <p>{daysLeft} days left</p>
              </div>
            )}
          </div>

          <RequirementsCard requirements={challengeDetails.requirements} />
        </div>

        {active ? (
          <SubmitButton challenge={challenge} challengeDetails={challengeDetails} open={open} />
        ) : (
          <Button disabled>{challenge.submission ? 'Submitted!' : 'Challenge Expired'}</Button>
        )}
      </div>
    </div>
  )
}

export default ChallengeCard