'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function GalleryPage() {
  const router = useRouter()
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    // gallery 폴더의 모든 이미지 파일 목록 생성
    // 숫자로 된 파일명들을 추출하고 정렬 (큰 숫자부터 작은 숫자 순서로)
    const imageList = []
    // 1부터 220까지의 숫자로 파일 시도 (형식: "1 Large.jpeg")
    for (let i = 1; i <= 220; i++) {
      imageList.push({
        src: `/gallery/${i} Large.jpeg`,
        alt: `Gallery image ${i}`,
        number: i
      })
    }
    // 큰 숫자부터 작은 숫자 순서로 정렬 (1이 가장 아래, 큰 숫자가 가장 위)
    imageList.sort((a, b) => b.number - a.number)
    setImages(imageList)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* 고정된 이전 버튼 */}
      <button
        onClick={handleBack}
        className="fixed top-[20px] md:top-[40px] left-[20px] md:left-[40px] z-50 flex items-center justify-center hover:opacity-80 transition-all duration-300"
      >
        <Image
          src="/SVG/arrow.svg"
          alt="Back"
          width={99}
          height={61}
          className="rotate-180 w-16 h-10 md:w-[99px] md:h-[61px]"
        />
      </button>

      {/* Gallery Grid */}
      <div className="w-full px-[20px] md:px-[80px] py-[80px] md:py-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-square cursor-pointer overflow-hidden group"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // 이미지 로드 실패 시 숨기기
                  e.target.parentElement.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-[95vw] md:max-w-[90vw] max-h-[95vh] md:max-h-[90vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1920}
              height={1080}
              className="w-auto h-auto max-w-full max-h-[95vh] md:max-h-[90vh] object-contain"
            />
          </div>
          {/* Close button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 md:top-8 right-4 md:right-8 text-white text-3xl md:text-4xl hover:opacity-80 transition-opacity"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
