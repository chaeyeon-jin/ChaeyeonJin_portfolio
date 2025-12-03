'use client'

import { useEffect } from 'react'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Projects from '../src/components/Projects'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

export default function Home() {
  useEffect(() => {
    // Scroll progress bar
    const progressBar = document.createElement('div')
    progressBar.className = 'fixed top-0 left-0 h-0.5 bg-lime z-50 transition-all duration-300'
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
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

