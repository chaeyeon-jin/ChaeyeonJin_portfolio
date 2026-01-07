'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProjectDetail = ({ id }) => {
  const router = useRouter();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 설명 섹션이 지나간 후 (약 300px 스크롤) 화살표 표시
      const scrollThreshold = 300;
      setShowBackButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // simo 프로젝트일 때만 simoportfolio.png를 가로 전체 너비로 표시
  if (id === 'simo') {
    const simoData = {
      title: 'SiMO',
      description: 'SiMple mockup generator for designers',
      date: '2025.10~2025.12',
      tags: ['UX research', 'UI Design', 'Development'],
      url: 'https://mock-ai-azure.vercel.app/'
    };

    const handleBack = () => {
      router.push('/');
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
          <button
            onClick={handleBack}
            className="fixed top-[40px] left-[40px] z-50 flex items-center justify-center hover:opacity-80 transition-all duration-300"
          >
            <Image
              src="/SVG/arrow.svg"
              alt="Back"
              width={99}
              height={61}
              className="rotate-180"
            />
          </button>
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {simoData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-xl tracking-[0] leading-[24px] text-variable-collection-black">
                {simoData.description}
              </p>

              {/* Visit site 버튼 */}
              <div className="inline-flex items-start justify-start">
                <a 
                  href={simoData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-36 h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 bg-variable-collection-white hover:opacity-80 transition-opacity rounded-[60px]"
                >
                  <Image
                    src="/SVG/Visit.svg"
                    alt="Visit"
                    width={20}
                    height={20}
                    className="relative"
                  />
                  <span className="relative w-fit font-nohemi font-medium text-base tracking-[0] leading-normal whitespace-nowrap text-variable-collection-black">
                    Visit site
                  </span>
                </a>
              </div>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {simoData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {simoData.tags.map((tag, index) => (
                  <div key={index} className="inline-flex items-center gap-1.5">
                    <span className="flex w-fit items-center justify-center gap-1.5 pt-2 pb-1.5 px-3 bg-variable-collection-yellow rounded-[20px]">
                      <span className="relative w-fit font-nohemi font-medium text-variable-collection-black text-sm tracking-[0] leading-normal whitespace-nowrap">
                        {tag}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 포트폴리오 이미지 */}
        <Image
          src="/simo/simoportfolio.png"
          alt="SiMO Portfolio"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    );
  }

  // 다른 프로젝트는 기존 로직 유지
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-urbanist text-2xl mb-4">Project not found</h1>
      </div>
    </div>
  );
};

export default ProjectDetail;

