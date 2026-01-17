'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeInUp from './FadeInUp'

const Projects = ({ borderRadius, isToggled }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const thumbnailRefs = useRef([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // UX/UI Project data array
  const uxuiProjectsData = [
    {
      id: 'simo',
      title: 'SiMO',
      description: 'SiMple mockup generator for designers',
      date: '2025.10~2025.12',
      tags: ['UX research', 'UI Design', 'Development'],
      url: 'https://mock-ai-azure.vercel.app/',
      thumbnail: '/simo/simothumbnail.jpeg'
    },
    {
      id: 'biaspoca',
      title: 'BiasTrade',
      description: 'K-pop Photocard Marketplace for U.S. Fans',
      date: '08/2025 – 10/2025',
      tags: ['Product Management', 'UX research', 'UI design', 'Development'],
      url: 'https://www.biastrade.com/home',
      thumbnail: '/biastrade/biastradeThumbnail.jpeg'
    },
    {
      id: 'myoo',
      title: 'Myoo',
      description: 'Therapeutic Illustrated Journal for Emotional Well-being',
      date: '09/2025 ~ 12/2025',
      tags: ['UX research', 'UI design'],
      thumbnail: '/myoo/myooThumbnail.jpeg'
    },
    {
      id: 'gilbeot',
      title: 'Gilbeot',
      description: 'Bus Accessibility Service Design for Visually Impaired Users',
      date: '04/2025 – 11/2025',
      tags: ['UX research', 'publication'],
      url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12512964',
      thumbnail: '/gilbeot/gilbeotThumbnail.jpeg'
    }
  ]

  // Graphics Project data array
  const graphicsProjectsData = [
    {
      id: 'pompoko-story',
      title: 'Pompoko story',
      date: '2023/03~2023/05',
      tags: ['Motion graphics', 'Illustration'],
      youtubeUrl: 'https://youtu.be/ZcRT9zDzIqU',
      youtubeId: 'ZcRT9zDzIqU'
    },
    {
      id: 'sea-anemones',
      title: 'Sea anemones and Nemos',
      date: '2023/09~2023/12',
      tags: ['Motion graphics', 'Graphic design'],
      youtubeUrl: 'https://youtu.be/RqZFmD2D1ZI',
      youtubeId: 'RqZFmD2D1ZI'
    },
    {
      id: 'fromalleywithlove',
      title: 'From Alley With Love',
      date: '03/2025~04/2025',
      tags: ['Graphic design', 'Web design'],
      thumbnail: '/graphics/fromalleywithlove/fromalleywithloveThumbnail.jpeg',
      websiteUrl: 'https://chaeyeon-jin.github.io/fromalleywithlove/'
    },
    {
      id: 'fffw',
      title: 'FFFW: Forth Floor Fashion Week',
      date: '2023/10~2024/01',
      tags: ['Editorial design', 'Graphic design'],
      thumbnail: '/graphics/fffw/fffwThumbnail.jpeg',
      instagramUrl: 'https://www.instagram.com/p/DEIM8BEP2-H/'
    },
    {
      id: '2024-happy-new-year',
      title: '2024 happy new year!',
      date: '2023/12 ~ 2024/01',
      tags: ['Graphic design'],
      thumbnail: '/graphics/2024happynewyear/2024happynewyearThumbnail.jpeg',
      instagramUrl: 'https://www.instagram.com/p/C1ju8vVSLzr/'
    },
    {
      id: 'find-raccoons',
      title: 'Where did all the raccoons go?',
      date: '05/2023~08/2023',
      tags: ['Graphic design', 'Web design'],
      thumbnail: '/graphics/findracoons/findracconThumbnail.jpeg',
      websiteUrl: 'https://chaeyeon-jin.github.io/find_raccoons/index.html'
    },
    {
      id: 'hut',
      title: 'HUT',
      date: '2025/06~2025/10',
      tags: ['Graphic design', 'Editorial design'],
      thumbnail: '/graphics/HUT/hutThumbnail.jpeg'
    },
    {
      id: 'atr',
      title: 'Affection to rent',
      date: '2024/09~2024/12',
      tags: ['Graphic design', 'Branding design'],
      thumbnail: '/graphics/atr/atrThumbnail.jpeg'
    },
    {
      id: 'thebutterflyeffect',
      title: 'The butterfly effect',
      date: '2022/09~2022/12',
      tags: ['Graphic design', 'Illustration'],
      thumbnail: '/graphics/TBE/thebutterflyeffectThumbnail.jpeg',
      instagramUrl: 'https://www.instagram.com/p/Cvj-YAgyvQ7/'
    }
  ]

  // Use UX/UI projects for the main section
  const projectsData = uxuiProjectsData

  // Intersection Observer setup for active project detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectIndex = parseInt(entry.target.getAttribute('data-project-index'))
          if (projectIndex !== undefined && projectIndex !== null) {
            setActiveProjectIndex(projectIndex)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all thumbnail cards
    thumbnailRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    // Cleanup
    return () => {
      thumbnailRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [projectsData])

  // Get current active project
  const activeProject = projectsData[activeProjectIndex]

  return (
    <>
      {/* What I make - UX/UI Section */}
      <section id="projects" className={`w-full relative px-[20px] md:px-[80px] pb-10 md:pb-20 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-5 relative">
          {/* Section Title */}
          <div className="col-span-1 md:col-span-6 mb-10 md:mb-20">
            <FadeInUp className="w-full">
              <h2 className={`font-mango-grotesque font-semibold italic text-4xl md:text-6xl lg:text-8xl tracking-[0] leading-normal whitespace-nowrap transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                What services I make
              </h2>
            </FadeInUp>
          </div>

          {/* Left Column - Sticky Description (2 columns) */}
          <div className="col-span-1 md:col-span-2 relative mb-5 md:mb-0 hidden md:block">
            <div className="sticky top-[100px] md:top-[120px] pr-0 md:pr-5">
              <FadeInUp delay={200} className="w-full">
                <div 
                  key={activeProjectIndex}
                  className={`flex flex-col items-start justify-start gap-4 md:gap-[22px] px-4 md:px-[46px] py-4 md:py-[46px] transition-all duration-300 ease-in-out ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
                  style={{ opacity: 1, borderRadius: `${borderRadius}px` }}
                >
                <h3 className={`relative w-full font-nohemi font-normal text-2xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[48.5px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                  {activeProject.title}
                </h3>

                <p className={`relative w-full font-nohemi font-normal text-lg md:text-2xl lg:text-[32px] tracking-[0] leading-snug md:leading-[32.3px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                  {activeProject.description}
                </p>

                <time className={`relative w-full font-nohemi font-normal text-base md:text-xl lg:text-2xl tracking-[0] leading-normal md:leading-[24.3px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                  {activeProject.date}
                </time>

                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] flex-wrap">
                  {activeProject.tags.map((tag, index) => (
                    <div key={index} className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                      <span className="flex w-fit items-center justify-center gap-1.5 pt-1.5 md:pt-2 pb-1 md:pb-1.5 px-2 md:px-3 relative bg-variable-collection-yellow rounded-[20px]">
                        <span className="relative w-fit font-nohemi font-medium text-variable-collection-black text-xs md:text-sm tracking-[0] leading-normal whitespace-nowrap">
                          {tag}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex flex-col items-start justify-end gap-2.5 relative mt-auto">
                  <a 
                    href={activeProject.url || `/project/${activeProject.id}`}
                    target={activeProject.url ? '_blank' : undefined}
                    rel={activeProject.url ? 'noopener noreferrer' : undefined}
                    className={`flex w-28 md:w-36 h-[40px] md:h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 relative hover:opacity-80 transition-opacity ${isToggled ? 'bg-variable-collection-white' : 'bg-variable-collection-white'}`}
                    style={{ borderRadius: `${borderRadius}px` }}
                    onClick={() => {
                      if (!activeProject.url) {
                        // 프로젝트 상세 페이지로 이동하는 경우에만 스크롤 위치 저장
                        sessionStorage.setItem('projectScrollPosition', window.scrollY.toString());
                      }
                    }}
                  >
                    <Image
                      src="/SVG/Visit.svg"
                      alt="Visit"
                      width={20}
                      height={20}
                      className="relative w-4 h-4 md:w-5 md:h-5"
                      style={{ filter: isToggled ? 'brightness(0)' : 'none' }}
                    />
                    <span className={`relative w-fit font-nohemi font-medium text-sm md:text-base tracking-[0] leading-normal whitespace-nowrap ${isToggled ? 'text-variable-collection-black' : 'text-variable-collection-black'}`}>
                      {activeProject.url ? 'Visit site' : 'View project'}
                    </span>
                  </a>
                </div>
                </div>
              </FadeInUp>
            </div>
          </div>
                  
          {/* Right Column - Scrollable Thumbnails (4 columns) */}
          <div 
            className="col-span-1 md:col-span-4 flex flex-col gap-3 md:gap-5 relative cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Custom Cursor */}
            {isHovering && (
              <div 
                className="hidden md:block fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${mousePosition.x}px`, 
                  top: `${mousePosition.y}px` 
                }}
              >
                <Image 
                  src="/SVG/viewPortfolio.svg" 
                  alt="View Portfolio" 
                  width={123} 
                  height={24.5} 
                />
              </div>
            )}

              {projectsData.map((project, index) => (
              <FadeInUp key={project.id} delay={index * 100} className="w-full">
                <div
                  ref={(el) => (thumbnailRefs.current[index] = el)}
                  data-project-index={index}
                  className="h-[200px] md:h-[480px] bg-variable-collection-white transition-all duration-300 relative overflow-hidden group"
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                <Link
                  href={`/project/${project.id}`}
                  className="w-full h-full flex items-center justify-center"
                  onClick={() => {
                    // 현재 스크롤 위치 저장
                    sessionStorage.setItem('projectScrollPosition', window.scrollY.toString());
                  }}
                >
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  ) : (
                    <div className={`text-2xl ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                      {project.title}
                    </div>
                  )}
                </Link>
                
                {/* Mobile Info Block - Visible only on mobile */}
                <div className="md:hidden flex flex-col gap-3 mt-4 mb-4 px-2">
                  <h3 className={`font-nohemi font-normal text-2xl tracking-[0] leading-tight ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                    {project.title}
                  </h3>
                  <p className={`font-nohemi font-normal text-lg tracking-[0] leading-snug ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                    {project.description}
                  </p>
                  <time className={`font-nohemi font-normal text-base tracking-[0] leading-normal ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                    {project.date}
                  </time>
                  <div className="inline-flex items-start gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="flex w-fit items-center justify-center gap-1.5 pt-1.5 pb-1 px-2 bg-variable-collection-yellow rounded-[20px]">
                        <span className="font-nohemi font-medium text-variable-collection-black text-xs whitespace-nowrap">
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.url || `/project/${project.id}`}
                    target={project.url ? '_blank' : undefined}
                    rel={project.url ? 'noopener noreferrer' : undefined}
                    className={`flex w-fit h-[40px] items-center justify-center gap-2 px-3 mt-2 hover:opacity-80 transition-opacity bg-variable-collection-white`}
                    style={{ borderRadius: `${borderRadius}px` }}
                    onClick={() => {
                      if (!project.url) {
                        // 프로젝트 상세 페이지로 이동하는 경우에만 스크롤 위치 저장
                        sessionStorage.setItem('projectScrollPosition', window.scrollY.toString());
                      }
                    }}
                  >
                    <Image
                      src="/SVG/Visit.svg"
                      alt="Visit"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                      style={{ filter: isToggled ? 'brightness(0)' : 'none' }}
                    />
                    <span className="font-nohemi font-medium text-sm text-variable-collection-black whitespace-nowrap">
                      {project.url ? 'Visit site' : 'View project'}
                    </span>
                  </a>
                </div>
              </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Graphics Section */}
      <section id="graphics" className={`w-full relative px-[20px] md:px-[80px] pb-10 md:pb-20 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-5 relative">
          {/* Section Title */}
          <div className="col-span-1 md:col-span-6 mb-10 md:mb-20">
            <FadeInUp className="w-full">
              <h2 className={`font-mango-grotesque font-semibold italic text-4xl md:text-6xl lg:text-8xl tracking-[0] leading-normal whitespace-nowrap transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                What graphics I make
              </h2>
            </FadeInUp>
          </div>

          {/* Graphics Grid Layout */}
          <div 
            className="col-span-1 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Custom Cursor for Graphics */}
            {isHovering && (
              <div 
                className="hidden md:block fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${mousePosition.x}px`, 
                  top: `${mousePosition.y}px` 
                }}
              >
                <Image 
                  src="/SVG/viewPortfolio.svg" 
                  alt="View Portfolio" 
                  width={123} 
                  height={24.5} 
                />
              </div>
            )}

            {(() => {
              // 날짜를 파싱하여 정렬 (오래된 게 오른쪽 아래에 오도록 역순 정렬)
              const parseDate = (dateStr) => {
                // 날짜 형식: "2023/03~2023/05" 또는 "03/2025~04/2025" 또는 "05/2023~08/2023"
                const startDate = dateStr.split('~')[0].trim().split(' ')[0]
                if (startDate.includes('/')) {
                  const parts = startDate.split('/')
                  if (parts[0].length === 4) {
                    // "2023/03" 형식
                    return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1)
                  } else {
                    // "03/2025" 형식
                    return new Date(parseInt(parts[1]), parseInt(parts[0]) - 1)
                  }
                }
                return new Date(0)
              }
              
              // 날짜 기준으로 정렬 (최신 것부터, 오래된 것이 오른쪽 아래에 오도록)
              const sortedProjects = [...graphicsProjectsData].sort((a, b) => {
                const dateA = parseDate(a.date)
                const dateB = parseDate(b.date)
                return dateB.getTime() - dateA.getTime() // 역순 정렬
              })
              
              return sortedProjects
            })().map((project, index) => (
              <FadeInUp key={project.id} delay={index * 80} className="w-full">
                <div
                  className="flex flex-col gap-4"
                >
                {/* Thumbnail */}
                <Link
                  href={`/project/${project.id}`}
                  className="relative w-full aspect-video bg-variable-collection-white rounded-lg overflow-hidden group transition-all duration-300 hover:opacity-90 block"
                  style={{ borderRadius: `${borderRadius}px` }}
                  onClick={() => {
                    // 현재 스크롤 위치 저장
                    sessionStorage.setItem('projectScrollPosition', window.scrollY.toString());
                  }}
                >
                  {project.youtubeId ? (
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <svg
                          className="w-16 h-16 text-white opacity-90"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    project.thumbnail && (
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )
                  )}
                </Link>
                {/* Title and Tags */}
                <div className="flex flex-col gap-2">
                  <h3 className={`font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                    {project.title}
                  </h3>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded-full ${isToggled ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
