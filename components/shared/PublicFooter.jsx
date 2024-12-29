import { Facebook,  } from 'lucide-react'
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
    <footer className='container flex justify-between items-center py-4 border-t'>
      <p>© {new Date().getFullYear()} BLING Club</p>

      <ul className='flex gap-2'>
        {socialLinks.map((item, index) => (
          <Link key={item + index} href={item.link} target='_blank'>
            <item.icon className='hover:text-primary transition-all duration-300 w-5 h-5' />
          </Link>
        ))}
      </ul>
    </footer>
  )
}

export default PublicFooter