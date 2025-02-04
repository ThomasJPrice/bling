'use client'

import { LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div
      className='w-screen h-screen flex flex-col gap-4 justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Image priority src='/main-logo.png' width={643} height={187} alt="BLING" className="h-[40px] object-contain w-fit" />

      <LoaderCircle className='animate-spin text-primary' />
    </motion.div>
  )
}

export default Loading