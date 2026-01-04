'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    note: "",
  })

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
    <>
      {/* Section Title */}
      <div className="absolute top-[5088px] left-[95px] font-mango-grotesque font-semibold italic text-variable-collection-black text-8xl tracking-[0] leading-normal whitespace-nowrap">
        Let&apos;s Keep in touch!!
      </div>

      {/* Social Links */}
      {/* GitHub */}
      <div className="flex w-[277px] items-center gap-2.5 p-10 absolute top-[5580px] left-20 bg-variable-collection-black rounded-[60px]">
        <div className="relative w-[200px] h-[200px] mr-[-3.00px] aspect-[1] flex items-center justify-center">
          {/* Temporary placeholder for vector */}
          <div className="w-32 h-32 bg-variable-collection-white rounded-lg" />
        </div>
      </div>

      {/* Email */}
      <div className="flex w-[277px] items-center justify-center gap-2.5 p-10 absolute top-[5281px] left-20 bg-variable-collection-black rounded-[60px]">
        <div className="relative w-[202px] h-[202px] ml-[-2.50px] mr-[-2.50px] overflow-hidden aspect-[1] flex items-center justify-center">
          {/* Temporary placeholder for image, vector2, vector3 */}
          <div className="w-32 h-32 bg-variable-collection-white rounded-lg" />
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex w-[277px] items-center justify-center gap-2.5 p-10 absolute top-[5282px] left-[377px] bg-variable-collection-black rounded-[60px]">
        <div className="relative w-[198px] h-[198px] ml-[-0.50px] mr-[-0.50px] aspect-[1] flex items-center justify-center">
          {/* Temporary placeholder for vector4 */}
          <div className="w-32 h-32 bg-variable-collection-white rounded-lg" />
        </div>
      </div>

      {/* frame77 - Contact icon placeholder */}
      <div className="absolute top-[5581px] left-[377px] w-[277px] h-[279px] bg-variable-collection-yellow rounded-[60px] flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-variable-collection-black rounded-lg" />
      </div>

      {/* Contact Form */}
      <div className="absolute top-[5280px] left-[673px] w-[1165px] h-[579px] bg-variable-collection-background rounded-[60px]">
        <Image
          className="absolute top-[200px] left-[26px] w-[1117px] h-[353px] pointer-events-none"
          alt="Email"
          src="/email.svg"
          width={1117}
          height={353}
        />
        
        <form onSubmit={handleSubmit} className="absolute top-[41px] left-[67px]">
          <div className="mb-[22px]">
            <label
              htmlFor="contact-note"
              className="block font-mango-grotesque font-semibold italic text-variable-collection-black text-5xl tracking-[0] leading-normal whitespace-nowrap"
            >
              Leave a note
            </label>
          </div>

          <div className="absolute top-[102px] left-[-27px] w-[534px]">
            <label
              htmlFor="contact-name"
              className="block text-variable-collection-background font-mango-grotesque font-semibold italic text-5xl tracking-[0] leading-normal whitespace-nowrap mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full h-20 bg-variable-collection-yellow rounded-[60px] px-6 font-nohemi font-normal text-variable-collection-black text-2xl"
              required
              aria-required="true"
            />
          </div>

          <div className="absolute top-[102px] left-[527px] w-[549px]">
            <label
              htmlFor="contact-email"
              className="block font-mango-grotesque font-semibold italic text-variable-collection-background text-5xl tracking-[0] leading-normal whitespace-nowrap mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-20 bg-variable-collection-yellow rounded-[60px] px-6 font-nohemi font-normal text-variable-collection-black text-2xl"
              required
              aria-required="true"
            />
          </div>

          <div className="absolute top-[234px] left-0 w-[1050px]">
            <label
              htmlFor="contact-note"
              className="block font-mango-grotesque font-semibold italic text-variable-collection-background text-5xl tracking-[0] leading-normal whitespace-nowrap mb-2"
            >
              Note
            </label>
            <textarea
              id="contact-note"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              rows={6}
              className="w-full bg-transparent font-nohemi font-normal text-variable-collection-black text-2xl resize-none outline-none"
              required
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="flex w-[222px] h-[60px] items-center justify-center gap-2.5 p-4 absolute top-[493px] left-[854px] bg-variable-collection-black rounded-[40px] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="relative w-fit mt-[-10.00px] mb-[-8.00px] text-variable-collection-white font-mango-grotesque font-semibold italic text-5xl tracking-[0] leading-normal whitespace-nowrap">
              Send
            </span>
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
