import { CircleHelp, Mail } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import Link from 'next/link'

const HelpMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger><CircleHelp className='w-5 h-5 hover:text-primary transition-all duration-300' /></DropdownMenuTrigger>

      <DropdownMenuContent className='mr-2'>
        <Link href="/faqs">
          <DropdownMenuItem className='flex gap-1 cursor-pointer'>
            <CircleHelp className="h-4 w-4" />
            <p>FAQs</p>
          </DropdownMenuItem>
        </Link>

        <Link href="mailto:support@blingclub.co.uk">
          <DropdownMenuItem className='flex gap-1 cursor-pointer'>
            <Mail className="h-4 w-4" />
            <p>Contact Us</p>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HelpMenu