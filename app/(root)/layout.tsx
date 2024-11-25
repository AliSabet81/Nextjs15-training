import React, { ReactNode } from 'react'
import Navbar from '@/app/components/Navbar'

const RootLayout = ({children}:Readonly<{children:ReactNode}>) => {
  return (
    <main className='font-work-sans'>
      <Navbar/>
      {children}
    </main>
  )
}

export default RootLayout
