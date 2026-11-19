import React from 'react'
import LinksMobile from './LinksMobile'
import LinksDesktop from './LinksDesktop'

const Navbar = () => {
  return (
    <nav className='bg-black text-white'>
      <div className='align-element'>
        <LinksMobile />
        <LinksDesktop />      
      </div>
    </nav>
  )
}

export default Navbar