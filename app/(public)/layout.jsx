import PublicFooter from '@/components/shared/PublicFooter'
import PublicNavbar from '@/components/shared/PublicNavbar'
import React from 'react'

const PublicLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <PublicNavbar />

      <main className='flex-grow'>
        {children}
      </main>

      <PublicFooter />
    </div>
  )
}

export default PublicLayout