'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Contact = ({ borderRadius, isToggled }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    note: "",
  })
  
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 })
  const [containerRef, setContainerRef] = useState(null)

  useEffect(() => {
    if (!containerRef) return

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect
        setContainerDimensions({ width, height })
      }
    })

    resizeObserver.observe(containerRef)
    return () => resizeObserver.disconnect()
  }, [containerRef])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className={`w-full relative px-[80px] py-[80px] transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
      <div className="grid grid-cols-6 gap-5">
        {/* Section Title */}
        <div className="col-span-6 mb-10">
          <h2 className={`font-mango-grotesque font-semibold italic text-8xl tracking-[0] leading-normal whitespace-nowrap transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
            Get in touch!
          </h2>
        </div>

        {/* Row 1: Email, LinkedIn, Form(Start) */}
        
        {/* Email - Col 1 */}
        <div 
          className="col-span-1 h-[280px] bg-variable-collection-black flex items-center justify-center p-10 transition-all duration-300"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <a href="#email" className="relative w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Email">
             <Image
               src="/SVG/email.svg"
               alt="Email"
               width={200}
               height={200}
               className="w-auto h-auto"
             />
          </a>
        </div>

        {/* LinkedIn - Col 2 */}
        <div 
          className="col-span-1 h-[280px] bg-variable-collection-black flex items-center justify-center p-10 transition-all duration-300"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <a href="#linkedin" className="relative w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="LinkedIn">
             <Image
               src="/SVG/linkedin.svg"
               alt="LinkedIn"
               width={200}
               height={200}
               className="w-auto h-auto"
             />
              </a>
            </div>

        {/* Contact Form - Col 3-6 (4 cols), Row Span 2 */}
        <div 
          className="col-span-4 row-span-2 h-[580px] relative bg-variable-collection-background overflow-hidden transition-all duration-300"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          {/* Background Image if needed, or keeping it clean */}
          {/* <Image
             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto opacity-10 pointer-events-none"
             alt="Email Background"
             src="/email.svg"
             width={1117}
             height={353}
          /> */}

          <form onSubmit={handleSubmit} className="relative w-full h-full p-10 flex flex-col gap-6">
             {/* Title */}
             <div>
               <label className="block font-mango-grotesque font-semibold italic text-variable-collection-black text-5xl tracking-[0] leading-normal whitespace-nowrap">
                 Leave a note
               </label>
          </div>
          
             {/* Inputs Row */}
             <div className="flex gap-5">
               <div className="flex-1">
                 <label htmlFor="contact-name" className="block text-variable-collection-black font-mango-grotesque font-semibold italic text-4xl mb-2">
                   Name
                 </label>
              <input
                type="text"
                   id="contact-name"
                name="name"
                value={formData.name}
                   onChange={handleInputChange}
                   className="w-full h-16 bg-variable-collection-yellow px-6 font-nohemi font-normal text-variable-collection-black text-xl border-none outline-none focus:ring-2 focus:ring-black/10 transition-all duration-300"
                   style={{ borderRadius: `${borderRadius}px` }}
                required
              />
               </div>
               <div className="flex-1">
                 <label htmlFor="contact-email" className="block text-variable-collection-black font-mango-grotesque font-semibold italic text-4xl mb-2">
                   Email
                 </label>
              <input
                type="email"
                   id="contact-email"
                name="email"
                value={formData.email}
                   onChange={handleInputChange}
                   className="w-full h-16 bg-variable-collection-yellow px-6 font-nohemi font-normal text-variable-collection-black text-xl border-none outline-none focus:ring-2 focus:ring-black/10 transition-all duration-300"
                   style={{ borderRadius: `${borderRadius}px` }}
                required
                 />
               </div>
             </div>

             {/* Note Area with Custom Shape & Button */}
             <div className="flex-1 relative flex flex-col min-h-[150px]">
               <label htmlFor="contact-note" className="block text-variable-collection-black font-mango-grotesque font-semibold italic text-4xl mb-2">
                 Note
               </label>
               
               {/* Container for the shaped background and content */}
               <div ref={(el) => setContainerRef(el)} className="relative flex-1 w-full">
                 {/* SVG Background */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm">
                   <path 
                     d={containerDimensions.width > 0 ? `
                       M ${borderRadius},0
                       L ${containerDimensions.width - borderRadius},0
                       Q ${containerDimensions.width},0 ${containerDimensions.width},${borderRadius}
                       L ${containerDimensions.width},${containerDimensions.height - 80 - borderRadius}
                       Q ${containerDimensions.width},${containerDimensions.height - 80} ${containerDimensions.width - borderRadius},${containerDimensions.height - 80}
                       L ${containerDimensions.width - 220 + borderRadius},${containerDimensions.height - 80}
                       Q ${containerDimensions.width - 220},${containerDimensions.height - 80} ${containerDimensions.width - 220},${containerDimensions.height - 80 + borderRadius}
                       L ${containerDimensions.width - 220},${containerDimensions.height - borderRadius}
                       Q ${containerDimensions.width - 220},${containerDimensions.height} ${containerDimensions.width - 220 - borderRadius},${containerDimensions.height}
                       L ${borderRadius},${containerDimensions.height}
                       Q 0,${containerDimensions.height} 0,${containerDimensions.height - borderRadius}
                       L 0,${borderRadius}
                       Q 0,0 ${borderRadius},0
                       Z
                     ` : ''}
                     fill="var(--variable-collection-white)"
                   />
                 </svg>

              <textarea
                   id="contact-note"
                   name="note"
                   value={formData.note}
                   onChange={handleInputChange}
                   className="relative w-full h-full bg-transparent font-nohemi font-normal text-variable-collection-black text-2xl resize-none outline-none border-none p-4 pb-[80px]"
                required
              />

                 {/* Submit Button in the Cut-out */}
              <button
                type="submit"
                   className="absolute bottom-0 right-0 flex w-[200px] h-[60px] items-center justify-center bg-variable-collection-black hover:opacity-80 transition-all duration-300"
                   style={{ borderRadius: `${borderRadius}px` }}
              >
                   <span className="text-variable-collection-white font-mango-grotesque font-semibold italic text-4xl pt-1">
                Send
                   </span>
              </button>
               </div>
             </div>
            </form>
          </div>


        {/* Row 2: Github, Icon */}
        
        {/* Github - Col 1 */}
        <div 
          className="col-span-1 h-[280px] bg-variable-collection-black flex items-center justify-center p-10 transition-all duration-300"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <a href="#github" className="relative w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="GitHub">
             <Image
               src="/SVG/github.svg"
               alt="GitHub"
               width={200}
               height={200}
               className="w-auto h-auto"
             />
          </a>
        </div>

        {/* StarYellow Icon - Col 2 */}
        <div 
          className="col-span-1 h-[280px] bg-variable-collection-black flex items-center justify-center transition-all duration-300"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <Image
            src="/SVG/StarYellow.svg"
            alt="Star"
            width={199}
            height={199}
            className="w-auto h-auto"
          />
        </div>

      </div>
    </section>
  )
}

export default Contact
