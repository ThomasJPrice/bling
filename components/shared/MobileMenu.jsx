'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { NAVLINKS } from "@/utils/constants"

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen} className='lg:hidden'>
      <SheetTrigger className="md:hidden w-12 h-12 flex justify-center items-center">
        <Menu className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent className='flex flex-col h-full justify-between'>
        {/* accessibility title */}
        <div className="flex flex-col gap-8">
          <SheetHeader>
            <SheetTitle className='flex justify-center'>
              <Image src={'/main-logo.png'} alt="BLING" className="h-[40px] w-fit" width={643} height={187} />
            </SheetTitle>
            <VisuallyHidden>
              <SheetDescription>A few navigation links for mobile users</SheetDescription>
            </VisuallyHidden>
          </SheetHeader>

          {/* links */}
          <ul className="flex flex-col items-center gap-8">
            {NAVLINKS.map((link, index) => (
              <li key={link + index}>
                <Link onClick={() => setMenuOpen(false)} className="text-xl font-medium hover:text-primary transition-all duration-300" href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href='#'>
          <Button className='w-full' onClick={() => setMenuOpen(false)}>Sign In</Button>
        </Link>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu