import { getChallengeEndDate } from "@/lib/utils"
import { Badge } from "../ui/badge"

const ChallengeStatus = ({ challenge }) => {
  var status = 'Unknown'

  const endDate = getChallengeEndDate(challenge.openFrom, 0, challenge.duration)

  if (new Date(challenge.openFrom) > new Date()) {
    status = 'Pre-Order'
  } else if (new Date(endDate * 1000) < new Date()) {
    status = 'Passed'
  } else {
    status = 'Active'
  }

  return (
    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-primary gap-2">
      <div className={`w-2 h-2 rounded-full ${status === 'Pre-Order' && 'bg-[#FFC107]'} ${status === 'Passed' && 'bg-[#F44336]'} ${status === 'Active' && 'bg-[#4CAF50]'}`}></div>
      
      {status}
    </div>
  )
}

export default ChallengeStatus