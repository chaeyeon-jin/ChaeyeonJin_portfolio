'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeInUp from './FadeInUp'

const Projects = ({ borderRadius, isToggled }) => {
  const [activeTab, setActiveTab] = useState('uxui')
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
      description: "Illustrated motion graphics piece that presents the story of new town development and the overall narrative from the raccoons' perspective.",
      date: '2023/03~2023/05',
      tags: ['Motion graphics', 'Illustration'],
      youtubeUrl: 'https://youtu.be/ZcRT9zDzIqU',
      youtubeId: 'ZcRT9zDzIqU'
    },
    {
      id: 'sea-anemones',
      title: 'Sea anemones and Nemos',
      description: "A 45-second motion graphics video about sea anemones and Nemos based on documentary narration.",
      date: '2023/09~2023/12',
      tags: ['Motion graphics', 'Graphic design'],
      youtubeUrl: 'https://youtu.be/RqZFmD2D1ZI',
      youtubeId: 'RqZFmD2D1ZI'
    },
    {
      id: 'fromalleywithlove',
      title: 'From Alley With Love',
      description: "A digital stamp collection website preserving visual memories of Seoul's disappearing traditional alleys.",
      date: '03/2025~04/2025',
      tags: ['Graphic design', 'Web design'],
      thumbnail: '/graphics/fromalleywithlove/fromalleywithloveThumbnail.jpeg',
      websiteUrl: 'https://chaeyeon-jin.github.io/fromalleywithlove/'
    },
    {
      id: 'fffw',
      title: 'FFFW: Forth Floor Fashion Week',
      description: "A series of palm-sized zines documenting design students' daily fashion and style identities.",
      date: '2023/10~2024/01',
      tags: ['Editorial design', 'Graphic design'],
      thumbnail: '/graphics/fffw/fffwThumbnail.jpeg',
      instagramUrl: 'https://www.instagram.com/p/DEIM8BEP2-H/'
    },
    {
      id: '2024-happy-new-year',
      title: '2024 happy new year!',
      description: "Risography-printed New Year greeting cards celebrating the Year of the Blue Dragon.",
      date: '2023/12 ~ 2024/01',
      tags: ['Graphic design', 'Risography'],
      thumbnail: '/graphics/2024happynewyear/2024happynewyearThumbnail.jpeg',
      instagramUrl: 'https://www.instagram.com/p/C1ju8vVSLzr/'
    },
    {
      id: 'find-raccoons',
      title: 'Where did all the raccoons go?',
      description: "An interactive exhibition project selected for DDP, reflecting on urbanization through raccoons' perspective.",
      date: '05/2023~08/2023',
      tags: ['Graphic design', 'Web design'],
      thumbnail: '/graphics/findracoons/findracconThumbnail.jpeg',
      websiteUrl: 'https://chaeyeon-jin.github.io/find_raccoons/index.html'
    },
    {
      id: 'marinecreatures',
      title: 'Marine creatures',
      description: "A digital archive introducing 24 marine species through a simple pixel art aesthetic.",
      date: '04/2023 ~ 06/2023',
      tags: ['Graphic design', 'Web design'],
      thumbnail: '/graphics/marinecreatures/marinecreaturesThumbnail.png',
      websiteUrl: 'https://chaeyeon-jin.github.io/marine_creatures/'
    },
    {
      id: 'hut',
      title: 'HUT',
      description: "A hand-bound zine featuring interviews and daily lives of design students, printed with risography.",
      date: '2025/06~2025/10',
      tags: ['Graphic design', 'Editorial design'],
      thumbnail: '/graphics/HUT/hutThumbnail.jpeg'
    },
    {
      id: 'atr',
      title: 'Affection to rent',
      description: "Logo design and merchandise production for Affection to Rent, an Irish band.",
      date: '2024/09~2024/12',
      tags: ['Graphic design', 'Branding design'],
      thumbnail: '/graphics/atr/atrThumbnail.jpeg'
    },
    {
      id: 'thebutterflyeffect',
      title: 'The butterfly effect',
      description: "An experimental graphic book combining illustrations and typography based on the film The Butterfly Effect.",
      date: '2022/09~2022/12',
      tags: ['Graphic design', 'Illustration'],
      thumbnail: '/graphics/TBE/thebutterflyeffectThumbnail.jpeg',
      instagramUrl: 'https://www.instagram.com/p/Cvj-YAgyvQ7/'
    },
    {
      id: 'print-in-progress',
      title: 'Print in progress',
      description: "Outdoor location posters for a print shop, using 12-color risography to explore printing processes.",
      date: '2025/02~2025/03',
      tags: ['Graphic design', 'Risography'],
      thumbnail: '/graphics/PIP/pipthumbnail.jpeg'
    }
  ]

  // Get current projects data based on active tab
  const projectsData = (() => {
    if (activeTab === 'uxui') {
      // UX/UI는 원래 순서 유지
      return uxuiProjectsData
    } else {
      // Graphics는 날짜순 정렬 (최신순)
      const parseDate = (dateStr) => {
        const startDate = dateStr.split('~')[0].trim().split(' ')[0]
        if (startDate.includes('/')) {
          const parts = startDate.split('/')
          if (parts[0].length === 4) {
            return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1)
          } else {
            return new Date(parseInt(parts[1]), parseInt(parts[0]) - 1)
          }
        }
        return new Date(0)
      }

      return [...graphicsProjectsData].sort((a, b) => {
        const dateA = parseDate(a.date)
        const dateB = parseDate(b.date)
        return dateB.getTime() - dateA.getTime()
      })
    }
  })()

  // Reset active project index when tab changes
  useEffect(() => {
    setActiveProjectIndex(0)
  }, [activeTab])

  // Intersection Observer + scroll fallback for active project detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -35% 0px',
      threshold: 0.2
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

    const updateActiveByScroll = () => {
      const viewportCenter = window.innerHeight * 0.5
      let closestIndex = 0
      let closestDistance = Infinity

      thumbnailRefs.current.forEach((ref, index) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        const distance = Math.abs(cardCenter - viewportCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      if (closestIndex !== activeProjectIndex) {
        setActiveProjectIndex(closestIndex)
      }
    }

    // Observe all thumbnail cards
    thumbnailRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    // Scroll fallback (handles upward scrolling)
    window.addEventListener('scroll', updateActiveByScroll, { passive: true })
    window.addEventListener('resize', updateActiveByScroll)
    updateActiveByScroll()

    // Cleanup
    return () => {
      thumbnailRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
      window.removeEventListener('scroll', updateActiveByScroll)
      window.removeEventListener('resize', updateActiveByScroll)
    }
  }, [projectsData, activeProjectIndex])

  // Get current active project - ensure it exists
  const activeProject = projectsData && projectsData.length > 0 && activeProjectIndex >= 0 && activeProjectIndex < projectsData.length 
    ? projectsData[activeProjectIndex] 
    : (projectsData && projectsData.length > 0 ? projectsData[0] : null)

  return (
    <>
      {/* Unified Projects Section */}
      <section id="projects" className={`w-full relative px-[20px] md:px-[80px] pb-10 md:pb-20 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-5 relative">
          {/* Section Title */}
          <div className="col-span-1 md:col-span-6 mb-6 md:mb-10">
            <FadeInUp className="w-full flex justify-center">
              <h2 className={`font-mango-grotesque font-semibold italic text-4xl md:text-6xl lg:text-8xl tracking-[0] leading-normal whitespace-nowrap transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                What I make
              </h2>
            </FadeInUp>
          </div>

          {/* Tab Toggle Button */}
          <div className="col-span-1 md:col-span-6 sticky top-0 z-40 py-4 mb-10 md:mb-20 bg-inherit">
            <FadeInUp delay={100} className="w-full flex justify-center">
              <div className="relative flex w-full max-w-sm h-[50px] md:h-[70px] items-center px-[6px] py-1.5 bg-variable-collection-yellow cursor-pointer transition-all duration-300 overflow-hidden"
                style={{ borderRadius: `${borderRadius}px` }}
              >
                <div 
                  className="absolute h-[38px] md:h-[56px] w-[calc(50%-10px)] bg-variable-collection-white transition-all duration-300 rounded-[20px]"
                  style={{
                    left: activeTab === 'uxui' ? '8px' : 'calc(50% + 2px)',
                    transform: 'none'
                  }}
                />
                <button
                  onClick={() => setActiveTab('uxui')}
                  className={`relative z-10 flex-1 h-full flex items-center justify-center font-mango-grotesque font-medium text-xl md:text-3xl transition-colors duration-300 ${
                    activeTab === 'uxui' ? 'text-variable-collection-black' : 'text-variable-collection-black/40'
                  }`}
                >
                  UX/UI
                </button>
                <button
                  onClick={() => setActiveTab('graphics')}
                  className={`relative z-10 flex-1 h-full flex items-center justify-center font-mango-grotesque font-medium text-xl md:text-3xl transition-colors duration-300 ${
                    activeTab === 'graphics' ? 'text-variable-collection-black' : 'text-variable-collection-black/40'
                  }`}
                >
                  Graphics
                </button>
              </div>
            </FadeInUp>
          </div>

          {/* Sticky Description Column - Position changes based on tab */}
          {activeProject && (
            <div className={`col-span-1 md:col-span-2 relative mb-5 md:mb-0 hidden md:block ${activeTab === 'graphics' ? 'md:order-2' : ''}`}>
              <div className="sticky top-[100px] md:top-[120px] pr-0 md:pr-5">
                <FadeInUp delay={200} className="w-full">
                  <div 
                    key={`${activeTab}-${activeProjectIndex}`}
                    className={`flex flex-col items-start justify-start gap-4 md:gap-[22px] px-4 md:px-[46px] py-4 md:py-[46px] transition-all duration-300 ease-in-out ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
                    style={{ opacity: 1, borderRadius: `${borderRadius}px` }}
                  >
                  <h3 className={`relative w-full font-nohemi font-normal text-2xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[48.5px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                    {activeProject.title}
                  </h3>

                  {activeProject.description && (
                    <p className={`relative w-full font-nohemi font-normal text-lg md:text-2xl lg:text-[32px] tracking-[0] leading-snug md:leading-[32.3px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                      {activeProject.description}
                    </p>
                  )}

                  <time className={`relative w-full font-nohemi font-normal text-base md:text-xl lg:text-2xl tracking-[0] leading-normal md:leading-[24.3px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                    {activeProject.date}
                  </time>

                  <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] flex-wrap">
                    {activeProject.tags && activeProject.tags.map((tag, index) => (
                      <div key={index} className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                        <span className="flex w-fit items-center justify-center gap-1.5 pt-1.5 md:pt-2 pb-1 md:pb-1.5 px-2 md:px-3 relative bg-variable-collection-yellow rounded-[20px]">
                          <span className="relative w-fit font-nohemi font-medium text-variable-collection-black text-xs md:text-sm tracking-[0] leading-normal whitespace-nowrap">
                            {tag}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>

                  {(activeProject.url || activeProject.websiteUrl) && (
                    <div className="inline-flex flex-col items-start justify-end gap-2.5 relative mt-auto">
                      <a 
                        href={activeProject.url || activeProject.websiteUrl || `/project/${activeProject.id}`}
                        target={(activeProject.url || activeProject.websiteUrl) ? '_blank' : undefined}
                        rel={(activeProject.url || activeProject.websiteUrl) ? 'noopener noreferrer' : undefined}
                        className={`flex w-28 md:w-36 h-[40px] md:h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 relative hover:opacity-80 transition-opacity ${isToggled ? 'bg-variable-collection-white' : 'bg-variable-collection-white'}`}
                        style={{ borderRadius: `${borderRadius}px` }}
                        onClick={() => {
                          if (!activeProject.url && !activeProject.websiteUrl) {
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
                          {(activeProject.url || activeProject.websiteUrl) ? 'Visit site' : 'View project'}
                        </span>
                      </a>
                    </div>
                  )}
                  </div>
                </FadeInUp>
              </div>
            </div>
          )}
                  
          {/* Scrollable Thumbnails Column - Position changes based on tab */}
          <div 
            className={`col-span-1 md:col-span-4 flex flex-col gap-3 md:gap-5 relative cursor-none ${activeTab === 'graphics' ? 'md:order-1' : ''}`}
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
                    sessionStorage.setItem('projectScrollPosition', window.scrollY.toString());
                  }}
                >
                  {project.youtubeId ? (
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
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
                  ) : project.thumbnail ? (
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
                  {project.description && (
                    <p className={`font-nohemi font-normal text-lg tracking-[0] leading-snug ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                      {project.description}
                    </p>
                  )}
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
                    href={project.url || project.websiteUrl || `/project/${project.id}`}
                    target={(project.url || project.websiteUrl) ? '_blank' : undefined}
                    rel={(project.url || project.websiteUrl) ? 'noopener noreferrer' : undefined}
                    className={`flex w-fit h-[40px] items-center justify-center gap-2 px-3 mt-2 hover:opacity-80 transition-opacity bg-variable-collection-white`}
                    style={{ borderRadius: `${borderRadius}px` }}
                    onClick={() => {
                      if (!project.url && !project.websiteUrl) {
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
                      {(project.url || project.websiteUrl) ? 'Visit site' : 'View project'}
                    </span>
                  </a>
                </div>
              </div>
              </FadeInUp>
            ))}

            {/* Navigation Button to Other Tab */}
            {projectsData && projectsData.length > 0 && (
              <FadeInUp delay={projectsData.length * 100} className="w-full flex justify-end mt-10 md:mt-20">
                <button
                  onClick={() => {
                    const newTab = activeTab === 'uxui' ? 'graphics' : 'uxui';
                    setActiveTab(newTab);
                    setActiveProjectIndex(0);
                    // 탭 전환 후 첫 번째 썸네일로 스크롤
                    setTimeout(() => {
                      const firstThumbnail = thumbnailRefs.current[0];
                      if (firstThumbnail) {
                        firstThumbnail.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="flex items-center justify-center gap-4 px-8 py-4 bg-variable-collection-yellow hover:opacity-90 transition-all duration-300 group"
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  <span className="font-mango-grotesque font-medium text-3xl md:text-5xl text-variable-collection-black">
                    Check my {activeTab === 'uxui' ? 'graphic' : 'UX/UI'} works too!
                  </span>
                  <div className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                    <Image
                      src="/SVG/arrow.svg"
                      alt="Arrow"
                      width={40}
                      height={40}
                      className="w-6 md:w-10 h-auto"
                    />
                  </div>
                </button>
              </FadeInUp>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
