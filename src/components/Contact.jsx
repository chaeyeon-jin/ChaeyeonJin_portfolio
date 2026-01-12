'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

const Contact = ({ borderRadius, isToggled }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    note: "",
  })
  
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 })
  const [containerRef, setContainerRef] = useState(null)
  const formRef = useRef(null)

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
    
    // EmailJS 서비스 설정
    // 1. https://www.emailjs.com/ 가입
    // 2. Email Service 추가 (Gmail 등) -> Service ID
    // 3. Email Template 생성 -> Template ID (템플릿 변수: {{name}}, {{email}}, {{note}})
    // 4. Account > API Keys -> Public Key
    // 아래 변수들에 값을 채워넣거나 .env.local 파일에 설정하세요.
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    if (serviceId === 'YOUR_SERVICE_ID') {
      alert('EmailJS 설정을 완료해주세요. (Service ID, Template ID, Public Key 필요)')
      console.log('Form data:', formData)
      return
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log(result.text)
        alert('Message sent successfully!')
        setFormData({ name: "", email: "", note: "" })
      }, (error) => {
        console.log(error.text)
        alert('Failed to send message. Please try again.')
      })
  }

  return (
    <section id="contact" className={`w-full relative px-[20px] md:px-[80px] py-10 md:py-[80px] transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-5">
        {/* Section Title */}
        <div className="col-span-2 md:col-span-6 mb-6 md:mb-10">
          <h2 className={`font-mango-grotesque font-semibold italic text-4xl md:text-6xl lg:text-8xl tracking-[0] leading-normal whitespace-nowrap transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
            Get in touch!
          </h2>
        </div>

        {/* Row 1: Email, LinkedIn, Form(Start) */}
        
        {/* Email - Col 1 */}
        <div 
          className="col-span-1 md:col-span-1 h-[150px] md:h-[280px] bg-variable-collection-black flex items-center justify-center p-4 md:p-10 transition-all duration-300 order-1"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <a
            href="mailto:chaeyeon.jin.work@gmail.com?subject=Portfolio%20message"
            className="relative w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Email chaeyeon.jin.work@gmail.com"
          >
             <Image
               src="/SVG/email.svg"
               alt="Email"
               width={200}
               height={200}
               className="w-16 h-16 md:w-auto md:h-auto"
             />
          </a>
        </div>

        {/* LinkedIn - Col 2 */}
        <div 
          className="col-span-1 md:col-span-1 h-[150px] md:h-[280px] bg-variable-collection-black flex items-center justify-center p-4 md:p-10 transition-all duration-300 order-2"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <a
            href="https://www.linkedin.com/in/chaeyeon-jin/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Open LinkedIn profile"
          >
             <Image
               src="/SVG/linkedin.svg"
               alt="LinkedIn"
               width={200}
               height={200}
               className="w-16 h-16 md:w-auto md:h-auto"
             />
              </a>
            </div>

        {/* Contact Form - Col 3-6 (4 cols), Row Span 2 */}
        <div 
          className="col-span-2 md:col-span-4 row-span-2 h-auto md:h-[580px] relative bg-variable-collection-background overflow-hidden transition-all duration-300 order-5 md:order-none"
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

          <form ref={formRef} onSubmit={handleSubmit} className="relative w-full h-full p-4 md:p-10 flex flex-col gap-4 md:gap-6">
             {/* Title */}
             <div>
               <label className="block font-mango-grotesque font-semibold italic text-variable-collection-black text-2xl md:text-4xl lg:text-5xl tracking-[0] leading-normal whitespace-nowrap">
                 Leave a note
               </label>
          </div>
          
             {/* Inputs Row */}
             <div className="flex flex-col md:flex-row gap-3 md:gap-5">
               <div className="flex-1">
                 <label htmlFor="contact-name" className="block text-variable-collection-black font-mango-grotesque font-semibold italic text-xl md:text-3xl lg:text-4xl mb-2">
                   Name
                 </label>
              <input
                type="text"
                   id="contact-name"
                name="name"
                value={formData.name}
                   onChange={handleInputChange}
                   className="w-full h-12 md:h-16 bg-variable-collection-yellow px-4 md:px-6 font-nohemi font-normal text-variable-collection-black text-base md:text-xl border-none outline-none focus:ring-2 focus:ring-black/10 transition-all duration-300"
                   style={{ borderRadius: `${borderRadius}px` }}
                required
              />
               </div>
               <div className="flex-1">
                 <label htmlFor="contact-email" className="block text-variable-collection-black font-mango-grotesque font-semibold italic text-xl md:text-3xl lg:text-4xl mb-2">
                   Email
                 </label>
              <input
                type="email"
                   id="contact-email"
                name="email"
                value={formData.email}
                   onChange={handleInputChange}
                   className="w-full h-12 md:h-16 bg-variable-collection-yellow px-4 md:px-6 font-nohemi font-normal text-variable-collection-black text-base md:text-xl border-none outline-none focus:ring-2 focus:ring-black/10 transition-all duration-300"
                   style={{ borderRadius: `${borderRadius}px` }}
                required
                 />
               </div>
             </div>

             {/* Note Area with Custom Shape & Button */}
             <div className="flex-1 relative flex flex-col min-h-[120px] md:min-h-[150px]">
               <label htmlFor="contact-note" className="block text-variable-collection-black font-mango-grotesque font-semibold italic text-xl md:text-3xl lg:text-4xl mb-2">
                 Note
               </label>
               
               {/* Container for the shaped background and content */}
               <div ref={(el) => setContainerRef(el)} className="relative flex-1 w-full">
                 {/* SVG Background */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm">
                   {(() => {
                     const isMobile = containerDimensions.width < 768
                     const cutoutWidth = isMobile ? 120 : 220
                     const cutoutHeight = isMobile ? 50 : 80
                     
                     return (
                       <path 
                         d={containerDimensions.width > 0 ? `
                           M ${borderRadius},0
                           L ${containerDimensions.width - borderRadius},0
                           Q ${containerDimensions.width},0 ${containerDimensions.width},${borderRadius}
                           L ${containerDimensions.width},${containerDimensions.height - cutoutHeight - borderRadius}
                           Q ${containerDimensions.width},${containerDimensions.height - cutoutHeight} ${containerDimensions.width - borderRadius},${containerDimensions.height - cutoutHeight}
                           L ${containerDimensions.width - cutoutWidth + borderRadius},${containerDimensions.height - cutoutHeight}
                           Q ${containerDimensions.width - cutoutWidth},${containerDimensions.height - cutoutHeight} ${containerDimensions.width - cutoutWidth},${containerDimensions.height - cutoutHeight + borderRadius}
                           L ${containerDimensions.width - cutoutWidth},${containerDimensions.height - borderRadius}
                           Q ${containerDimensions.width - cutoutWidth},${containerDimensions.height} ${containerDimensions.width - cutoutWidth - borderRadius},${containerDimensions.height}
                           L ${borderRadius},${containerDimensions.height}
                           Q 0,${containerDimensions.height} 0,${containerDimensions.height - borderRadius}
                           L 0,${borderRadius}
                           Q 0,0 ${borderRadius},0
                           Z
                         ` : ''}
                         fill="var(--variable-collection-white)"
                       />
                     )
                   })()}
                 </svg>

              <textarea
                   id="contact-note"
                   name="note"
                   value={formData.note}
                   onChange={handleInputChange}
                   className="relative w-full h-full bg-transparent font-nohemi font-normal text-variable-collection-black text-base md:text-xl lg:text-2xl resize-none outline-none border-none p-3 md:p-4 pb-[50px] md:pb-[80px]"
                required
              />

                 {/* Submit Button in the Cut-out */}
              <button
                type="submit"
                   className="absolute bottom-0 right-0 flex w-[100px] md:w-[200px] h-[40px] md:h-[60px] items-center justify-center bg-variable-collection-black hover:opacity-80 transition-all duration-300"
                   style={{ borderRadius: `${borderRadius}px` }}
              >
                   <span className="text-variable-collection-white font-mango-grotesque font-semibold italic text-xl md:text-3xl lg:text-4xl pt-1">
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
          className="col-span-1 md:col-span-1 h-[150px] md:h-[280px] bg-variable-collection-black flex items-center justify-center p-4 md:p-10 transition-all duration-300 order-3 md:order-none"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <a
            href="https://github.com/chaeyeon-jin"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Open GitHub profile"
          >
             <Image
               src="/SVG/github.svg"
               alt="GitHub"
               width={200}
               height={200}
               className="w-16 h-16 md:w-auto md:h-auto"
             />
          </a>
        </div>

        {/* StarYellow Icon - Col 2 */}
        <div 
          className="col-span-1 md:col-span-1 h-[150px] md:h-[280px] bg-variable-collection-black flex items-center justify-center transition-all duration-300 order-4 md:order-none"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <a
            href="/ChaeyeonJin_resume.pdf"
            download
            className="relative w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Download résumé PDF"
          >
            <Image
              src="/SVG/StarYellow.svg"
              alt="Download résumé"
              width={199}
              height={199}
              className="w-24 h-24 md:w-auto md:h-auto"
            />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
