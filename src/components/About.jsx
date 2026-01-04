'use client'

import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
      {/* Section Title */}
      <div className="flex w-[1743px] items-start gap-[68px] absolute top-[3967px] left-[95px]">
        <div className="relative w-fit mt-[-1.00px] font-mango-grotesque font-semibold italic text-variable-collection-black text-8xl tracking-[0] leading-normal whitespace-nowrap">
          More about
        </div>
        <div className="relative w-fit mt-[-1.00px] text-8xl leading-normal font-nohemi font-normal text-variable-collection-black tracking-[0] whitespace-nowrap">
          Chaeyeon Jin
        </div>
      </div>

      {/* Text Box 1 */}
      <div className="flex w-[868px] h-[280px] items-center justify-center gap-2.5 px-10 py-[46px] absolute top-[4080px] left-[379px] bg-variable-collection-yellow rounded-[60px]">
        <p className="relative w-[726px] font-nohemi font-normal text-variable-collection-grey300 text-[40px] tracking-[0] leading-[40.4px]">
          <span className="text-[#bcbcbc]">I&apos;m a </span>
          <span className="text-[#222222]">UX/UI designer</span>
          <span className="text-[#bcbcbc]"> based in </span>
          <span className="text-[#222222]">California</span>
          <span className="text-[#bcbcbc]">
            , focused on user-centered thinking and clear visual communication.
          </span>
        </p>
      </div>

      {/* Text Box 2 */}
      <div className="flex w-[868px] h-[280px] items-center justify-center gap-2.5 px-10 py-[46px] absolute top-[4380px] left-20 bg-variable-collection-yellow rounded-[60px]">
        <p className="relative w-[726px] font-nohemi font-normal text-variable-collection-grey300 text-[40px] tracking-[0] leading-[40.4px]">
          <span className="text-[#bcbcbc]">
            I enjoy turning ideas into functional experiences through{" "}
          </span>
          <span className="text-[#222222]">front-end developing</span>
          <span className="text-[#bcbcbc]"> with </span>
          <span className="text-[#222222]">HTML</span>
          <span className="text-[#bcbcbc]">, </span>
          <span className="text-[#222222]">CSS</span>
          <span className="text-[#bcbcbc]">, </span>
          <span className="text-[#222222]">JavaScript</span>
          <span className="text-[#bcbcbc]">, and </span>
          <span className="text-[#222222]">React</span>
          <span className="text-[#bcbcbc]">.</span>
        </p>
      </div>

      {/* Text Box 3 */}
      <div className="flex w-[868px] h-[280px] items-center justify-center gap-2.5 px-10 py-[46px] absolute top-[4680px] left-[379px] bg-variable-collection-yellow rounded-[60px]">
        <p className="relative w-[726px] font-nohemi font-normal text-variable-collection-background text-[40px] tracking-[0] leading-[40.4px]">
          <span className="text-[#bcbcbc]">Currently a</span>
          <span className="text-[#e1e1e1]">&nbsp;</span>
          <span className="text-[#222222]">senior</span>
          <span className="text-[#e1e1e1]">&nbsp;</span>
          <span className="text-[#bcbcbc]">majoring in</span>
          <span className="text-[#e1e1e1]">&nbsp;</span>
          <span className="text-[#222222]">Visual Communication Design</span>
          <span className="text-[#bcbcbc]">, and previously worked as a </span>
          <span className="text-[#222222]">freelance visual designer</span>
          <span className="text-[#e1e1e1]">&nbsp;</span>
          <span className="text-[#bcbcbc]">in</span>
          <span className="text-[#e1e1e1]">&nbsp;</span>
          <span className="text-[#222222]">Ireland</span>
          <span className="text-[#bcbcbc]">.</span>
        </p>
      </div>

      {/* Text Box 4 */}
      <div className="flex w-[573px] h-[280px] items-center justify-center gap-2.5 px-10 py-[46px] absolute top-[4680px] left-[1265px] bg-variable-collection-background rounded-[60px]">
        <p className="relative w-[529px] mt-[-27.00px] mb-[-25.00px] ml-[-18.00px] mr-[-18.00px] font-nohemi font-normal text-variable-collection-black text-[40px] tracking-[0] leading-[40.4px]">
          Outside of design, I&apos;m an advanced scuba diver and enjoy film
          photography, both of which influence how I observe people,
          environments, and details.
        </p>
      </div>

      {/* Photos Image */}
      <Image
        className="absolute top-[4080px] left-[1267px] w-[573px] h-[579px] object-cover rounded-[60px]"
        alt="Photos"
        src="/photos-1.png"
        width={573}
        height={579}
      />

      {/* frame67 - Design icon placeholder */}
      <div className="absolute top-[4081px] left-20 w-[277px] h-[279px] bg-variable-collection-yellow rounded-[60px] flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-variable-collection-black rounded-lg" />
      </div>

      {/* frame70 - Development icon placeholder */}
      <div className="absolute top-[4380px] left-[969px] w-[277px] h-[279px] bg-variable-collection-yellow rounded-[60px] flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-variable-collection-black rounded-lg" />
      </div>

      {/* frame72 - Education icon placeholder */}
      <div className="absolute top-[4680px] left-20 w-[277px] h-[279px] bg-variable-collection-yellow rounded-[60px] flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-variable-collection-black rounded-lg" />
      </div>

      {/* White Box with union3 - Temporary placeholder */}
      <div className="absolute top-[4380px] left-[1563px] w-[277px] h-[279px] bg-variable-collection-white rounded-[60px]" />
      <div className="absolute top-[4560px] left-[1708px] w-[99px] h-[61px] bg-variable-collection-yellow rounded-lg" />
    </>
  )
}

export default About
