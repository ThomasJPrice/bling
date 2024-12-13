import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import MobileMenu from "./MobileMenu"
import { NAVLINKS } from "@/utils/constants"
import { SignedIn, SignedOut } from "@/utils/wrappers"

const PublicNavbar = () => {
  return (
    <nav className="container flex justify-between items-center py-4 md:py-6">
      <Link href='/' className="flex-shrink-0">
        <Image priority src='/main-logo.png' width={643} height={187} alt="BLING" className="h-[40px] object-contain w-fit" />
      </Link>

      <ul className="hidden md:flex gap-8 items-center ">
        {NAVLINKS.map((item, index) => (
          <li key={item + index} className="font-medium hover:text-primary transition-all duration-300 link-hover text-center">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}

        <SignedIn>
          <Link href='/me'>
            <Button>
              My Challenges
            </Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <Link href='/sign-in'>
            <Button>
              Sign In
            </Button>
          </Link>
        </SignedOut>
      </ul>

      <MobileMenu />
    </nav>
  )
}

export default PublicNavbar