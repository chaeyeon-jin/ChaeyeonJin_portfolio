'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Header = ({ isToggled, borderRadius }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-[20px] md:top-[29px] left-[20px] md:left-[80px] z-50">
      {/* Desktop Navigation */}
      <nav 
        className={`hidden md:flex items-center gap-4 lg:gap-6 px-4 lg:px-6 py-2 lg:py-3 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
        style={{ borderRadius: `${borderRadius}px` }}
      >
        <Link 
          href="#projects" 
          className={`font-nohemi font-normal text-sm lg:text-lg tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
        >
          UX/UI
        </Link>
        <Link 
          href="#graphics" 
          className={`font-nohemi font-normal text-sm lg:text-lg tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
        >
          Graphics
        </Link>
        <Link 
          href="#about" 
          className={`font-nohemi font-normal text-sm lg:text-lg tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
        >
          About
        </Link>
        <Link 
          href="#contact" 
          className={`font-nohemi font-normal text-sm lg:text-lg tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
        >
          Contact
        </Link>
        <Link 
          href="/gallery" 
          className={`font-nohemi font-normal text-sm lg:text-lg tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
        >
          Gallery
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`md:hidden flex items-center justify-center w-12 h-12 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black text-variable-collection-white' : 'bg-variable-collection-background text-variable-collection-black'}`}
        style={{ borderRadius: `${borderRadius}px` }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav 
          className={`md:hidden absolute top-14 left-0 flex flex-col gap-3 px-4 py-4 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <Link 
            href="#projects" 
            onClick={() => setIsMenuOpen(false)}
            className={`font-nohemi font-normal text-base tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
          >
            UX/UI
          </Link>
          <Link 
            href="#graphics" 
            onClick={() => setIsMenuOpen(false)}
            className={`font-nohemi font-normal text-base tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
          >
            Graphics
          </Link>
          <Link 
            href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className={`font-nohemi font-normal text-base tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
          >
            About
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className={`font-nohemi font-normal text-base tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
          >
            Contact
          </Link>
          <Link 
            href="/gallery" 
            onClick={() => setIsMenuOpen(false)}
            className={`font-nohemi font-normal text-base tracking-[0] leading-normal whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}
          >
            Gallery
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
