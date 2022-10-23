import React from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'

export default function MainLayout({children}) {
  return (
    <>
        <div className='sticky top-0'>
            <Nav />
        </div>
        {children}
        <Footer />
    </>
  )
}
