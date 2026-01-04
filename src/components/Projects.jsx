'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

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

  // Project data array
  const projectsData = [
    {
      id: 'simo',
      title: 'SiMO',
      description: 'SiMple mockup generator for designers',
      date: '2025.10~2025.12',
      tags: ['UX research', 'UI Design', 'Development']
    },
    {
      id: 'biaspoca',
      title: 'Biaspoca',
      description: 'Placeholder description',
      date: 'TBD',
      tags: ['Tag1', 'Tag2']
    },
    {
      id: 'myoo',
      title: 'Myoo',
      description: 'Placeholder description',
      date: 'TBD',
      tags: ['Tag1', 'Tag2']
    },
    {
      id: 'gilbeot',
      title: 'Gilbeot',
      description: 'Placeholder description',
      date: 'TBD',
      tags: ['Tag1', 'Tag2']
    }
  ]

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
  }, [])

  // Get current active project
  const activeProject = projectsData[activeProjectIndex]

  return (
    <section id="projects" className={`w-full relative px-[80px] pb-20 transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
      <div className="grid grid-cols-6 gap-5 relative">
        {/* Section Title */}
        <div className="col-span-6 mb-20">
          <h2 className={`font-mango-grotesque font-semibold italic text-8xl tracking-[0] leading-normal whitespace-nowrap transition-colors duration-300 ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
            What I make
          </h2>
        </div>

        {/* Left Column - Sticky Description (2 columns) */}
        {/* We remove height constraint on this container so it matches the grid height */}
        <div className="col-span-2 relative">
          <div className="sticky top-[120px] pr-5">
            <div 
              key={activeProjectIndex}
            className={`flex flex-col items-start justify-start gap-[22px] px-[46px] py-[46px] transition-all duration-300 ease-in-out ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}
            style={{ opacity: 1, borderRadius: `${borderRadius}px` }}
          >
              <h3 className={`relative w-full font-nohemi font-normal text-5xl tracking-[0] leading-[48.5px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                {activeProject.title}
              </h3>

              <p className={`relative w-full font-nohemi font-normal text-[32px] tracking-[0] leading-[32.3px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                {activeProject.description}
              </p>

              <time className={`relative w-full font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] ${isToggled ? 'text-variable-collection-white' : 'text-variable-collection-black'}`}>
                {activeProject.date}
              </time>

              <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] flex-wrap">
                {activeProject.tags.map((tag, index) => (
                  <div key={index} className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <span className="flex w-fit items-center justify-center gap-1.5 pt-2 pb-1.5 px-3 relative bg-variable-collection-yellow rounded-[20px]">
                      <span className="relative w-fit font-nohemi font-medium text-variable-collection-black text-sm tracking-[0] leading-normal whitespace-nowrap">
                        {tag}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="inline-flex flex-col items-start justify-end gap-2.5 relative mt-auto">
                <a 
                  href={`/project/${activeProject.id}`} 
                  className={`flex w-36 h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 relative hover:opacity-80 transition-opacity ${isToggled ? 'bg-variable-collection-white' : 'bg-variable-collection-white'}`}
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  <Image
                    src="/SVG/Visit.svg"
                    alt="Visit"
                    width={20}
                    height={20}
                    className="relative"
                    style={{ filter: isToggled ? 'brightness(0)' : 'none' }}
                  />
                  <span className={`relative w-fit font-nohemi font-medium text-base tracking-[0] leading-normal whitespace-nowrap ${isToggled ? 'text-variable-collection-black' : 'text-variable-collection-black'}`}>
                    Visit site
                  </span>
                </a>
              </div>
            </div>
                  </div>
                </div>
                
        {/* Right Column - Scrollable Thumbnails (4 columns) */}
        <div 
          className="col-span-4 flex flex-col gap-5 relative cursor-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Custom Cursor */}
          {isHovering && (
            <div 
              className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                left: `${mousePosition.x}px`, 
                top: `${mousePosition.y}px` 
              }}
            >
              <Image 
                src="/SVG/viewPortfolio.svg" 
                alt="View Portfolio" 
                width={246} 
                height={49} 
              />
                </div>
          )}

          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              data-project-index={index}
                className="h-[480px] bg-variable-collection-white flex items-center justify-center transition-all duration-300"
                style={{ borderRadius: `${borderRadius}px` }}
              >
              {/* Placeholder for thumbnail - will be replaced with actual images later */}
              <div className="text-variable-collection-black font-nohemi text-2xl">
                {project.title}
              </div>
            </div>
          ))}

          {/* View All Portfolio Link */}
          <div className="h-[80px] flex items-center justify-end">
            <a href="/projects" className="flex items-center gap-4 group cursor-pointer">
              <span className="font-mango-grotesque font-semibold italic text-variable-collection-black text-6xl tracking-[0] leading-normal group-hover:opacity-80 transition-opacity">
                View All Portfolio
              </span>
              <div className="w-[60px] group-hover:translate-x-2 transition-transform duration-300">
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
        </div>
      </div>
    </section>
  )
}

export default Projects
