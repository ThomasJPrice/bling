import { Cog } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import StravaSettings from './StravaSettings'

const SettingsModal = () => {
  return (
    // <button className='hover:text-primary transition-all duration-300'>
    //   <Cog className='w-5 h-5' />
    // </button>

    <Dialog>
      <DialogTrigger asChild>
        <button className='hover:text-primary transition-all duration-300'>
          <Cog className='w-5 h-5' />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <VisuallyHidden>
            <DialogDescription>Here you can change your account settings.</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <div className="grid gap-4">
          <StravaSettings />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='secondary'>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SettingsModal