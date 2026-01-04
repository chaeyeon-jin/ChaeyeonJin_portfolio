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
    // 슬라이더를 오른쪽으로 갈수록 라운딩값이 0이 되도록 (0-100 범위에서 60-0으로 매핑)
    const newBorderRadius = 60 - (value / 100) * 60
    setBorderRadius(newBorderRadius)
  }

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <section className={`relative w-full min-h-screen pt-[120px] pb-20 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
      {/* Slider and Toggle Container - Using Grid System */}
      <div className="absolute top-[19px] left-0 right-0 mx-[80px]">
        <div className="grid grid-cols-6 gap-5">
          {/* Empty space for header (1,2 columns) */}
          <div className="col-span-2" />
          
          {/* Slider - 3,4,5 columns */}
          <div className="col-span-3 flex items-center">
            <div className="relative w-full h-[48px] flex items-center justify-center">
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
          <div className="col-span-1 flex items-center justify-end">
            <button
              onClick={handleToggle}
              className="relative flex w-full h-[60px] items-center px-[10px] py-2.5 bg-variable-collection-grey300 cursor-pointer transition-all duration-300"
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <div 
                className="absolute h-[40px] w-[40px] bg-variable-collection-white transition-all duration-300 rounded-[20px]"
                style={{
                  left: isToggled ? 'calc(100% - 50px)' : '10px', // 10px padding + 버튼이 오른쪽 끝에 오도록
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Container - Using Grid System */}
      <div className="absolute bottom-[80px] left-0 right-0 mx-[80px]">
        <div className="grid grid-cols-6 gap-5">
          {/* Chaeyeon Jin - Grid 1~4 (4 columns), Height: 4 grid rows (320px) */}
          <div className="col-span-4 flex flex-col gap-5 relative">
            {/* Interactive Face Icon - Above Chaeyeon Jin */}
            <div className="absolute -top-[200px] left-0">
              <div className={`relative w-[180px] h-[180px] rounded-full flex items-center justify-center cursor-pointer z-10 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-yellow' : 'bg-variable-collection-black'}`}>
                {/* Eyes */}
                <div 
                  className={`absolute top-[60px] left-[45px] w-[24px] h-[24px] rounded-full transition-colors duration-300 transition-transform duration-100 ease-out ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
                  style={{
                    transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 17}px)`
                  }}
                />
                <div 
                  className={`absolute top-[60px] right-[45px] w-[24px] h-[24px] rounded-full transition-colors duration-300 transition-transform duration-100 ease-out ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
                  style={{
                    transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 17}px)`
                  }}
                />
                
                {/* Mouth - SVG */}
                <Image
                  src="/SVG/mouth.svg"
                  alt="Mouth"
                  width={50}
                  height={25}
                  className="absolute bottom-[45px] left-1/2 -translate-x-1/2 transition-transform duration-100 ease-out transition-[filter] duration-300"
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
                className="absolute top-0 -right-[200px] z-0 transition-transform duration-100 ease-out"
                style={{
                  transform: `rotate(${mousePosition.x * 100}deg)`
                }}
              />
            </div>
            
            <div 
              className="flex w-full h-[320px] items-center justify-center gap-2.5 px-8 lg:px-12 xl:px-[114px] py-12 xl:py-[109px] bg-variable-collection-white"
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <div className="relative w-fit mt-[-0.50px] ml-[-40.00px] mr-[-40.00px] font-nohemi font-normal text-variable-collection-black text-5xl md:text-7xl lg:text-9xl xl:text-[140px] tracking-[0] leading-normal whitespace-nowrap">
                Chaeyeon Jin
              </div>
            </div>

            {/* Action Buttons - 4 buttons, each using 1 grid column */}
            <div className="grid grid-cols-4 gap-5">
              <button
                className="flex w-full h-[80px] items-center justify-center gap-2.5 bg-variable-collection-grey300 cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderRadius: `${borderRadius}px` }}
              >
                <span className="relative w-fit font-mango-grotesque font-medium text-variable-collection-black text-xl lg:text-2xl xl:text-[40px] tracking-[0] leading-normal">
                  Email
                </span>
              </button>
              <button
                className="flex w-full h-[80px] items-center justify-center gap-2.5 bg-variable-collection-grey300 cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderRadius: `${borderRadius}px` }}
              >
                <span className="relative w-fit font-mango-grotesque font-medium text-variable-collection-black text-xl lg:text-2xl xl:text-[40px] tracking-[0] leading-normal">
                  Résumé
                </span>
              </button>
              <button
                className="flex w-full h-[80px] items-center justify-center gap-2.5 bg-variable-collection-grey300 cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderRadius: `${borderRadius}px` }}
              >
                <span className="relative w-fit font-mango-grotesque font-medium text-variable-collection-black text-xl lg:text-2xl xl:text-[40px] tracking-[0] leading-normal">
                  Github
                </span>
              </button>
              <button
                className="flex w-full h-[80px] items-center justify-center gap-2.5 bg-variable-collection-grey300 cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderRadius: `${borderRadius}px` }}
              >
                <span className="relative w-fit font-mango-grotesque font-medium text-variable-collection-black text-xl lg:text-2xl xl:text-[40px] tracking-[0] leading-normal">
                  Linkedin
                </span>
              </button>
            </div>
          </div>

          {/* Grid 5~6 - CTA Button and Description Box */}
          <div className="col-span-2 flex flex-col gap-5">
            {/* I'm looking for internship - CTA Button */}
            <div 
              className={`flex w-full h-[80px] items-center justify-center gap-2.5 pt-5 pb-4 px-6 xl:px-10 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-background' : 'bg-variable-collection-black'}`}
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <p className={`relative w-fit font-mango-grotesque font-medium text-xl lg:text-2xl xl:text-[40px] tracking-[0] leading-normal text-center transition-colors duration-300 ${isToggled ? 'text-variable-collection-black' : 'text-variable-collection-background'}`}>
                I&apos;m looking for internship - contact me!!
              </p>
            </div>

            {/* She is a Designer... - Grid 5~6 (2 columns), Height: 4 grid rows (320px) */}
            <div 
              className="flex w-full h-[320px] items-center justify-center gap-2.5 px-6 lg:px-8 xl:px-10 py-8 xl:py-[46px] bg-variable-collection-yellow"
              style={{ borderRadius: `${borderRadius}px` }}
            >
              <p className="relative w-full mt-[-9.50px] mb-[-7.50px] ml-[-15.00px] mr-[-15.00px] font-nohemi font-normal text-variable-collection-black text-3xl lg:text-4xl xl:text-5xl tracking-[0] leading-[1.01]">
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
