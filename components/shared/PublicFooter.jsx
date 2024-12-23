import { Facebook,  } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaInstagram,
    link: 'https://instagram.com'
  },
  {
    icon: FaFacebook,
    link: 'https://facebook.com'
  },
]

const PublicFooter = () => {
  return (
    <footer className='container flex justify-between py-4 border-t'>
      <p>© {new Date().getFullYear()} BLING Club</p>

      <ul className='flex gap-2'>
        {socialLinks.map((item, index) => (
          <Link key={item + index} href={item.link}>
            <item.icon className='hover:text-primary transition-all duration-300' />
          </Link>
        ))}
      </ul>
    </footer>
  )
}

export default PublicFooter