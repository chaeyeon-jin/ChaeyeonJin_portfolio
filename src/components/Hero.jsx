'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Hero = ({ borderRadius, setBorderRadius, isToggled, setIsToggled }) => {
  const [sliderValue, setSliderValue] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      // 화면 중앙을 (0,0)으로 하는 상대 좌표 계산
      // 범위: -1 ~ 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value)
    setSliderValue(value)
    // 슬라이더를 오른쪽으로 갈수록 라운딩값이 60이 되도록 (0-100 범위에서 0-60으로 매핑)
    const newBorderRadius = (value / 100) * 60
    setBorderRadius(newBorderRadius)
  }

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <section className={`relative w-full min-h-screen pt-[100px] md:pt-[120px] pb-10 md:pb-20 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
      {/* Slider and Toggle Container - Using Grid System */}
      <div className="absolute top-[10px] md:top-[19px] left-0 right-0 mx-[20px] md:mx-[80px]">
        <div className="grid grid-cols-6 gap-2 md:gap-5">
          {/* Empty space for header (1,2 columns) */}
          <div className="col-span-2 hidden md:block" />
          
          {/* Slider - 3,4,5 columns */}
          <div className="col-span-4 md:col-span-3 flex items-center pl-12 md:pl-0">
            <div className="relative w-full h-[40px] md:h-[48px] flex items-center justify-center">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                className="w-full border-radius-slider"
                style={{
                  borderRadius: `${borderRadius}px`,
                  margin: '0',
                  padding: '0',
                }}
              />
            </div>
          </div>

          {/* Theme Toggle - 6th column */}
          <div className="col-span-2 md:col-span-1 flex items-center justify-end">
            <button
              onClick={handleToggle}
              className="relative flex w-full h-[50px] md:h-[60px] items-center px-[10px] py-2.5 bg-variable-collection-grey300 cursor-pointer transition-all duration-300 overflow-hidden"
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <div 
                className="absolute h-[30px] md:h-[40px] w-[30px] md:w-[40px] bg-variable-collection-white transition-all duration-300 rounded-[20px]"
                style={{
                  left: isToggled ? 'calc(100% - 10px)' : '10px',
                  transform: isToggled ? 'translateX(-100%)' : 'none'
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Container - Using Grid System */}
      <div className="absolute bottom-[20px] md:bottom-[80px] left-0 right-0 mx-[20px] md:mx-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-5">
          {/* Chaeyeon Jin - Grid 1~4 (4 columns), Height: 4 grid rows (320px) */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-3 md:gap-5 relative">
            {/* Interactive Face Icon - Above Chaeyeon Jin */}
            <div className="absolute -top-[140px] md:-top-[240px] left-0">
              <div className={`relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full flex items-center justify-center cursor-pointer z-10 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-yellow' : 'bg-variable-collection-black'}`}>
                {/* Eyes */}
                <div 
                  className={`absolute top-[40px] md:top-[60px] left-[30px] md:left-[45px] w-[16px] h-[16px] md:w-[24px] md:h-[24px] rounded-full transition-colors duration-300 transition-transform duration-100 ease-out ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
                  style={{
                    transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 12}px)`
                  }}
                />
                <div 
                  className={`absolute top-[40px] md:top-[60px] right-[30px] md:right-[45px] w-[16px] h-[16px] md:w-[24px] md:h-[24px] rounded-full transition-colors duration-300 transition-transform duration-100 ease-out ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
                  style={{
                    transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 12}px)`
                  }}
                />
                
                {/* Mouth - SVG */}
                <Image
                  src="/SVG/mouth.svg"
                  alt="Mouth"
                  width={50}
                  height={25}
                  className="absolute bottom-[30px] md:bottom-[45px] left-1/2 -translate-x-1/2 transition-transform duration-100 ease-out transition-[filter] duration-300 w-[33px] md:w-[50px] h-auto"
                  style={{ 
                    transform: `translate(calc(-50% + ${mousePosition.x * 5}px), ${mousePosition.y * 7}px)`,
                    filter: isToggled ? 'brightness(0)' : 'none'
                  }}
                />
              </div>

              {/* Star Icon - Next to Face */}
              <Image
                src={isToggled ? "/SVG/StarYellow.svg" : "/SVG/Star.svg"}
                alt="Star"
                width={180}
                height={180}
                className="absolute top-0 -right-[140px] md:-right-[240px] z-0 transition-transform duration-100 ease-out w-[120px] md:w-[180px] h-auto"
                style={{
                  transform: `rotate(${mousePosition.x * 100}deg)`
                }}
              />
            </div>
            
            <div 
              className="flex w-full h-[120px] md:h-[320px] items-center justify-center gap-2.5 px-2 md:px-8 lg:px-12 xl:px-[60px] py-4 md:py-12 xl:py-[60px] bg-variable-collection-white overflow-hidden"
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <div className="relative w-full text-center font-nohemi font-normal text-variable-collection-black text-[13vw] md:text-[10vw] lg:text-[11vw] xl:text-[9vw] 2xl:text-[140px] tracking-[0] leading-normal whitespace-nowrap">
                Chaeyeon Jin
              </div>
            </div>

            {/* Action Buttons - 4 buttons, each using 1 grid column */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
              <a
                href="mailto:chaeyeon.jin.work@gmail.com?subject=Portfolio%20message"
                className="flex w-full h-[60px] md:h-[80px] items-center justify-center gap-2.5 bg-variable-collection-grey300 cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderRadius: `${borderRadius}px` }}
                aria-label="Email chaeyeon.jin.work@gmail.com"
              >
                <span className="relative w-fit font-mango-grotesque font-medium text-variable-collection-black text-xl md:text-xl lg:text-2xl xl:text-[2.5vw] 2xl:text-[40px] tracking-[0] leading-normal">
                  Email
                </span>
              </a>
              <a
                href="/ChaeyeonJin_resume.pdf"
                download
                className="flex w-full h-[60px] md:h-[80px] items-center justify-center gap-2.5 bg-variable-collection-grey300 cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderRadius: `${borderRadius}px` }}
                aria-label="Download résumé PDF"
              >
                <span className="relative w-fit font-mango-grotesque font-medium text-variable-collection-black text-xl md:text-xl lg:text-2xl xl:text-[2.5vw] 2xl:text-[40px] tracking-[0] leading-normal">
                  Résumé
                </span>
              </a>
              <a
                href="https://github.com/chaeyeon-jin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full h-[60px] md:h-[80px] items-center justify-center gap-2.5 bg-variable-collection-grey300 cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderRadius: `${borderRadius}px` }}
                aria-label="Open GitHub profile"
              >
                <span className="relative w-fit font-mango-grotesque font-medium text-variable-collection-black text-xl md:text-xl lg:text-2xl xl:text-[2.5vw] 2xl:text-[40px] tracking-[0] leading-normal">
                  Github
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/chaeyeon-jin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full h-[60px] md:h-[80px] items-center justify-center gap-2.5 bg-variable-collection-grey300 cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderRadius: `${borderRadius}px` }}
                aria-label="Open LinkedIn profile"
              >
                <span className="relative w-fit font-mango-grotesque font-medium text-variable-collection-black text-xl md:text-xl lg:text-2xl xl:text-[2.5vw] 2xl:text-[40px] tracking-[0] leading-normal">
                  Linkedin
                </span>
              </a>
            </div>
          </div>

          {/* Grid 5~6 - CTA Button and Description Box */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-3 md:gap-5 mt-2 md:mt-0">
            {/* I'm looking for internship - CTA Button */}
            <div 
              className={`flex w-full h-[60px] md:h-[80px] items-center justify-center gap-2.5 pt-3 md:pt-5 pb-2 md:pb-4 px-4 md:px-6 xl:px-10 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-background' : 'bg-variable-collection-black'}`}
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <p className={`relative w-full font-mango-grotesque font-medium text-xl md:text-xl lg:text-2xl xl:text-[2.5vw] max-xl:text-[24px] tracking-[0] leading-normal text-center transition-colors duration-300 ${isToggled ? 'text-variable-collection-black' : 'text-variable-collection-background'}`}>
                I&apos;m looking for an internship - contact me!!
              </p>
            </div>

            {/* She is a Designer... - Grid 5~6 (2 columns), Height: 4 grid rows (320px) */}
            <div 
              className="flex w-full h-[150px] md:h-[320px] items-center justify-center gap-2.5 px-4 md:px-6 lg:px-8 xl:px-[40px] py-4 md:py-8 xl:py-[46px] bg-variable-collection-yellow overflow-hidden"
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <p className="relative w-full font-nohemi font-normal text-variable-collection-black text-[6.5vw] md:text-[2.2vw] lg:text-[2.5vw] xl:text-[2.5vw] 2xl:text-5xl tracking-[0] leading-[1.01] text-center md:text-left break-words">
                She is a Designer &amp; Developer in California, who bridges tech and
                design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
