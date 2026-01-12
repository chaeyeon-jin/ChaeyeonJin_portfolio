'use client'

import { useEffect, useState } from 'react'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Projects from '../src/components/Projects'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

export default function Home() {
  const [borderRadius, setBorderRadius] = useState(0)
  const [isToggled, setIsToggled] = useState(true)

  useEffect(() => {
    // Scroll progress bar
    const progressBar = document.createElement('div')
    progressBar.className = 'fixed top-0 left-0 h-0.5 bg-variable-collection-yellow z-50 transition-all duration-300'
    progressBar.style.width = '0%'
    document.body.appendChild(progressBar)
    
    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      progressBar.style.width = scrolled + '%'
    }
    
    window.addEventListener('scroll', updateProgress)
    
    return () => {
      window.removeEventListener('scroll', updateProgress)
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar)
      }
    }
  }, [])

  return (
    <div className={`w-full relative transition-colors duration-300 ${isToggled ? 'bg-variable-collection-black' : 'bg-variable-collection-background'}`}>
      <Header isToggled={isToggled} borderRadius={borderRadius} />
      <Hero borderRadius={borderRadius} setBorderRadius={setBorderRadius} isToggled={isToggled} setIsToggled={setIsToggled} />
      <Projects borderRadius={borderRadius} isToggled={isToggled} />
      <About borderRadius={borderRadius} isToggled={isToggled} />
      <Contact borderRadius={borderRadius} isToggled={isToggled} />
      <Footer isToggled={isToggled} />
    </div>
  )
}
