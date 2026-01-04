'use client'

import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="fixed top-[29px] left-[80px] z-50">
      <div className="relative w-[280px] sm:w-[400px] lg:w-[534px] h-[52px]">
        {/* header.svg as background */}
        <Image
          src="/SVG/header.svg"
          alt=""
          width={481}
          height={52}
          className="absolute top-0 left-0 w-full h-[52px]"
          priority
        />
        
        <nav className="relative h-full flex items-center">
          <a 
            href="#projects" 
            className="absolute left-[13%] font-nohemi font-regular text-variable-collection-white text-2xl tracking-[0] leading-normal whitespace-nowrap pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontSize: '20px' }}
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="absolute left-[50%] -translate-x-1/2 font-nohemi font-regular text-variable-collection-white text-2xl tracking-[0] leading-normal whitespace-nowrap pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontSize: '20px' }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="absolute right-[13%] font-nohemi font-regular text-variable-collection-white text-2xl tracking-[0] leading-normal whitespace-nowrap pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontSize: '20px' }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
