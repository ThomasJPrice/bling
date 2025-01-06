import { Facebook, } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaInstagram,
    link: 'https://www.instagram.com/blingclub/'
  },
  {
    icon: FaFacebook,
    link: 'https://www.facebook.com/profile.php?id=61570853339502'
  },
]

const PublicFooter = () => {
  return (
    <footer className='container py-4 border-t'>
      <div className='flex justify-between items-center w-full'>
        <p>© {new Date().getFullYear()} BLING Club</p>

        <div className='flex gap-2 md:gap-4 text-center'>
          <Link className='underline' href='/terms'>Terms of Service</Link>
          <Link className='underline' href='/privacy'>Privacy Policy</Link>
        </div>

        <ul className='flex gap-2'>
          {socialLinks.map((item, index) => (
            <Link key={item + index} href={item.link} target='_blank'>
              <item.icon className='hover:text-primary transition-all duration-300 w-5 h-5' />
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default PublicFooter