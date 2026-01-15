'use client'

import React, { useRef, useState, useEffect } from 'react'

const FadeInUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 화면에 10% 정도 보였을 때 애니메이션 실행
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // 한 번 실행 후 관찰 중단
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px', // 미리 감지하여 자연스럽게 연결
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-20 scale-95 blur-sm'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default FadeInUp