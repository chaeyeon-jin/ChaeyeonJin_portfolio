'use client'

import React from 'react'

const Footer = ({ isToggled }) => {
  return (
    <footer className={`w-full relative px-[80px] py-[40px] transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
      <div className={`grid grid-cols-6 gap-y-3 gap-x-5 font-nohemi font-normal text-lg leading-normal transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
        
        {/* Left Column */}
        <div className="col-span-1">
          <div className="whitespace-nowrap">Web Design</div>
          <div className="whitespace-nowrap mt-3">Web Development</div>
        </div>
        
        {/* Middle Column */}
        <div className="col-span-1">
          <div className="whitespace-nowrap">Chaeyeon Jin</div>
          <div className="whitespace-nowrap mt-3">Chaeyeon Jin</div>
        </div>
        
        {/* Right Column - Email and Copyright */}
        <div className="col-span-2 col-start-5 text-right">
          <div className="whitespace-nowrap">chaeyeonjin.work@gmail.com</div>
          <div className="whitespace-nowrap mt-3">©2026 Chaeyeon Jin</div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
