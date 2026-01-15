'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import FadeInUp from './FadeInUp'

const About = ({ borderRadius, isToggled }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial value

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <section id="about" className={`w-full relative px-[20px] md:px-[80px] py-10 md:py-[80px] transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-5">
        {/* Section Title */}
        <div className="col-span-1 md:col-span-6 flex flex-col md:flex-row items-start gap-4 md:gap-[68px] mb-6 md:mb-10">
          <FadeInUp className="w-fit">
            <div className={`relative w-fit font-mango-grotesque font-semibold italic text-4xl md:text-6xl lg:text-8xl tracking-[0] leading-normal whitespace-nowrap transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
              More about
            </div>
          </FadeInUp>
          <FadeInUp delay={100} className="w-fit">
            <div className={`relative w-fit text-4xl md:text-6xl lg:text-8xl leading-normal font-nohemi font-normal tracking-[0] whitespace-nowrap transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
              Chaeyeon Jin
            </div>
          </FadeInUp>
        </div>

        {/* Row 1 */}
        {/* Design Icon - 1 col (Clockwise) */}
        <div className="hidden md:flex col-span-1 md:col-span-1 h-[200px] md:h-[280px] items-center justify-center">
          <Image
            src="/SVG/StarYellow.svg"
            alt="Star"
            width={199}
            height={199}
            className="w-24 h-24 md:w-auto md:h-auto transition-transform duration-100 ease-out"
            style={{ transform: `rotate(${scrollY}deg)` }}
          />
        </div>

        {/* Text Box 1 - 3 cols */}
        <FadeInUp delay={200} className="col-span-1 md:col-span-3 order-1 md:order-none">
          <div 
            className="h-auto md:h-[280px] flex items-center justify-center px-4 md:px-10 py-6 md:py-0 bg-variable-collection-yellow transition-all duration-300 group cursor-pointer"
            style={{ borderRadius: `${borderRadius}px` }}
          >
          <p className="w-full font-nohemi font-normal text-variable-collection-grey300 text-base md:text-2xl lg:text-[32px] tracking-[0] leading-relaxed md:leading-[40.4px]">
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">I&apos;m a </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">Product designer</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300"> based in </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">California</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">, focused on </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">user-centered thinking</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">, clear visual communication, strong graphic foundations, and coded prototyping.
            </span>
                </p>
              </div>
          </FadeInUp>

        {/* Photos Image - 2 cols */}
        <FadeInUp delay={300} className="col-span-1 md:col-span-2 row-span-2 order-4 md:order-none">
          <div className="relative h-[400px] md:h-[580px] mb-3 md:mb-0"> 
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <clipPath id="l-shape-clip" clipPathUnits="objectBoundingBox">
                <path 
                  d={`M ${borderRadius / 580},0 
                      L ${1 - borderRadius / 580},0 
                      Q 1,0 1,${borderRadius / 580} 
                      L 1,${(580 - 100) / 580 - borderRadius / 580} 
                      Q 1,${(580 - 100) / 580} ${1 - borderRadius / 580},${(580 - 100) / 580} 
                      L ${0.5 + borderRadius / 580},${(580 - 100) / 580} 
                      Q 0.5,${(580 - 100) / 580} 0.5,${(580 - 100) / 580 + borderRadius / 580} 
                      L 0.5,${1 - borderRadius / 580} 
                      Q 0.5,1 ${0.5 - borderRadius / 580},1 
                      L ${borderRadius / 580},1 
                      Q 0,1 0,${1 - borderRadius / 580} 
                      L 0,${borderRadius / 580} 
                      Q 0,0 ${borderRadius / 580},0 Z`}
                />
              </clipPath>
            </defs>
          </svg>
          <Image
            className="w-full h-full object-cover transition-all duration-300"
            style={{ 
              clipPath: 'url(#l-shape-clip)'
            }}
            alt="Photos"
            src="/images/photos-1.JPG"
            width={573}
            height={579}
          />
          
          {/* White Button in Cut-out Area (Bottom Right) */}
          <a 
            href="/gallery"
            className="absolute bottom-[0px] right-[0px] bg-variable-collection-white flex items-center justify-center transition-all duration-300 hover:opacity-90 cursor-pointer"
            style={{ 
              borderRadius: `${borderRadius}px`,
              width: 'calc(50% - 20px)',
              height: 'calc(17.24% - 20px)' // 100/580 ratio - 20px gap
            }}
          >
            <div className="w-[60px]">
              <Image
                src="/SVG/arrow.svg"
                alt="Arrow"
                width={99}
                height={61}
                className="w-full h-auto"
              />
            </div>
          </a>
          </div>
        </FadeInUp>


        {/* Row 2 */}
        {/* Text Box 2 - 3 cols */}
        <FadeInUp delay={400} className="col-span-1 md:col-span-3 order-2 md:order-none">
          <div 
            className="h-auto md:h-[280px] flex items-center justify-center px-4 md:px-10 py-6 md:py-0 bg-variable-collection-yellow transition-all duration-300 group cursor-pointer"
            style={{ borderRadius: `${borderRadius}px` }}
          >
          <p className="w-full font-nohemi font-normal text-variable-collection-grey300 text-base md:text-2xl lg:text-[32px] tracking-[0] leading-relaxed md:leading-[40.4px]">
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">
              I enjoy turning ideas into functional, interactive experiences through{" "}
            </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">front-end developing</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300"> with </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">HTML</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">, </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">CSS</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">, </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">JavaScript</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">, and </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">React</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">, with a focus on usability and iteration.</span>
          </p>
          </div>
        </FadeInUp>

        {/* Development Icon - 1 col (Counter-clockwise) */}
        <div className="hidden md:flex col-span-1 md:col-span-1 h-[200px] md:h-[280px] items-center justify-center">
          <Image
            src="/SVG/StarYellow.svg"
            alt="Star"
            width={199}
            height={199}
            className="w-24 h-24 md:w-auto md:h-auto transition-transform duration-100 ease-out"
            style={{ transform: `rotate(-${scrollY}deg)` }}
          />
        </div>
        

        {/* Row 3 */}
        {/* Education Icon - 1 col (Clockwise) */}
        <div className="col-span-1 md:col-span-1 h-[200px] md:h-[280px] flex items-center justify-center order-6 md:order-none">
          <Image
            src="/SVG/StarYellow.svg"
            alt="Star"
            width={199}
            height={199}
            className="w-24 h-24 md:w-auto md:h-auto transition-transform duration-100 ease-out"
            style={{ transform: `rotate(${scrollY}deg)` }}
          />
        </div>

        {/* Text Box 3 - 3 cols */}
        <FadeInUp delay={500} className="col-span-1 md:col-span-3 order-3 md:order-none">
          <div 
            className="h-auto md:h-[280px] flex items-center justify-center px-4 md:px-10 py-6 md:py-0 bg-variable-collection-yellow transition-all duration-300 group cursor-pointer"
            style={{ borderRadius: `${borderRadius}px` }}
          >
          <p className="w-full font-nohemi font-normal text-variable-collection-background text-base md:text-2xl lg:text-[32px] tracking-[0] leading-relaxed md:leading-[40.4px]">
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">Currently a</span>
            <span className="text-[#e1e1e1] group-hover:text-variable-collection-black transition-colors duration-300">&nbsp;</span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">senior</span>
            <span className="text-[#e1e1e1] group-hover:text-variable-collection-black transition-colors duration-300">&nbsp;</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">majoring in</span>
            <span className="text-[#e1e1e1] group-hover:text-variable-collection-black transition-colors duration-300">&nbsp;</span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">Visual Communication Design</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">, and previously worked as a </span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">freelance visual designer</span>
            <span className="text-[#e1e1e1] group-hover:text-variable-collection-black transition-colors duration-300">&nbsp;</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">in</span>
            <span className="text-[#e1e1e1] group-hover:text-variable-collection-black transition-colors duration-300">&nbsp;</span>
            <span className="text-[#222222] group-hover:text-variable-collection-black transition-colors duration-300">Ireland</span>
            <span className="text-[#bcbcbc] group-hover:text-variable-collection-black transition-colors duration-300">, collaborating with local clients on branding and visual projects.</span>
          </p>
          </div>
        </FadeInUp>

        {/* Text Box 4 - 2 cols */}
        <FadeInUp delay={600} className="col-span-1 md:col-span-2 order-5 md:order-none">
          <div 
            className="h-auto md:h-[280px] flex items-center justify-center px-4 md:px-10 py-6 md:py-0 bg-variable-collection-background border border-gray-200 transition-all duration-300"
            style={{ borderRadius: `${borderRadius}px` }}
          >
          <p className="w-full font-nohemi font-normal text-variable-collection-yellow hover:text-variable-collection-black text-base md:text-2xl lg:text-[32px] tracking-[0] leading-relaxed md:leading-[32.4px]">
            Outside of design, I&apos;m a film photographer and an advanced scuba diver, both of which influence how I observe people,
            environments, and details.
          </p>
          </div>
        </FadeInUp>

      </div>
    </section>
  )
}

export default About
