'use client'

import { ReactLenis } from 'lenis/react'

function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, // 값을 낮춰서(0.1 -> 0.08) 더 부드럽게 관성 이동
        duration: 1.2, // 지속 시간 조정
        smoothWheel: true,
        wheelMultiplier: 1, // 스크롤 속도 배수
        touchMultiplier: 2, // 모바일 터치 감도
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll