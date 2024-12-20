import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const RequirementsCard = ({ requirements }) => {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer"><span className="underline decoration-wavy">Requirements</span></PopoverTrigger>
      <PopoverContent>
        <ul className="list-disc">
          {requirements.map((item, index) => (
            <li className="ml-4" key={item + index}>{item}</li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}

export default RequirementsCard