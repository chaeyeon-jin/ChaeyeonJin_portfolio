'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import ProjectDetail from '../../../src/components/ProjectDetail'

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    // Scroll progress bar
    const progressBar = document.createElement('div')
    progressBar.className = 'fixed top-0 left-0 h-0.5 bg-lime z-40 transition-all duration-300'
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

  return <ProjectDetail id={params.id} router={router} />
}

