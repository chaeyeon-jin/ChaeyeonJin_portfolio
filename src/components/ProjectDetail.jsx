'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProjectDetail = ({ id }) => {
  const router = useRouter();
  const [showBackButton, setShowBackButton] = useState(false);

  // 페이지 진입 시 최상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      // 설명 섹션이 지나간 후 (약 300px 스크롤) 화살표 표시
      const scrollThreshold = 300;
      setShowBackButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 공통 Back 핸들러: 저장된 스크롤 위치로 복원
  const handleBack = () => {
    const savedScrollPosition = sessionStorage.getItem('projectScrollPosition');
    router.push('/');
    
    // 라우팅 후 스크롤 위치 복원
    setTimeout(() => {
      if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        sessionStorage.removeItem('projectScrollPosition');
      }
    }, 100);
  };

  // biaspoca 프로젝트 처리
  if (id === 'biaspoca') {
    const biastradeData = {
      title: 'BiasTrade',
      description: 'K-pop Photocard Marketplace for U.S. Fans',
      date: '08/2025 – 10/2025',
      tags: ['Product Management', 'UX research', 'UI design', 'Development'],
      url: 'https://www.biastrade.com/home'
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] md:px-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {biastradeData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                {biastradeData.description}
              </p>

              {/* Visit site 버튼 */}
              <div className="inline-flex items-start justify-start">
                <a 
                  href={biastradeData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-28 md:w-36 h-[40px] md:h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 bg-variable-collection-white hover:opacity-80 transition-opacity rounded-[60px]"
                >
                  <Image
                    src="/SVG/Visit.svg"
                    alt="Visit"
                    width={20}
                    height={20}
                    className="relative"
                  />
                    <span className="relative w-fit font-nohemi font-medium text-sm md:text-base tracking-[0] leading-normal whitespace-nowrap text-variable-collection-black">
                      Visit site
                    </span>
                </a>
              </div>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {biastradeData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {biastradeData.tags.map((tag, index) => (
                  <div key={index} className="inline-flex items-center gap-1.5">
                    <span className="flex w-fit items-center justify-center gap-1.5 pt-1.5 md:pt-2 pb-1 md:pb-1.5 px-2 md:px-3 bg-variable-collection-yellow rounded-[20px]">
                      <span className="relative w-fit font-nohemi font-medium text-variable-collection-black text-xs md:text-sm tracking-[0] leading-normal whitespace-nowrap">
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
          src="/biastrade/biastradePortfolio.jpeg"
          alt="BiasTrade Portfolio"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    );
  }

  // myoo 프로젝트 처리
  if (id === 'myoo') {
    const myooData = {
      title: 'Myoo',
      description: 'Therapeutic Illustrated Journal for Emotional Well-being',
      date: '09/2025 ~ 12/2025',
      tags: ['UX research', 'UI design']
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {myooData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-xl tracking-[0] leading-[24px] text-variable-collection-black">
                {myooData.description}
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {myooData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {myooData.tags.map((tag, index) => (
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
          src="/myoo/myooPortfolio.jpeg"
          alt="Myoo Portfolio"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    );
  }

  // gilbeot 프로젝트 처리
  if (id === 'gilbeot') {
    const gilbeotData = {
      title: 'Gilbeot',
      description: 'Bus Accessibility Service Design for Visually Impaired Users',
      date: '04/2025 – 11/2025',
      tags: ['UX research', 'publication'],
      url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12512964'
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {gilbeotData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-xl tracking-[0] leading-[24px] text-variable-collection-black">
                {gilbeotData.description}
              </p>

              {/* Visit site 버튼 */}
              <div className="inline-flex items-start justify-start">
                <a 
                  href={gilbeotData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-28 md:w-36 h-[40px] md:h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 bg-variable-collection-white hover:opacity-80 transition-opacity rounded-[60px]"
                >
                  <Image
                    src="/SVG/Visit.svg"
                    alt="Visit"
                    width={20}
                    height={20}
                    className="relative"
                  />
                    <span className="relative w-fit font-nohemi font-medium text-sm md:text-base tracking-[0] leading-normal whitespace-nowrap text-variable-collection-black">
                      Visit site
                    </span>
                </a>
              </div>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {gilbeotData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {gilbeotData.tags.map((tag, index) => (
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

        {/* Publication Description and Preview */}
        <div className="w-full px-[20px] md:px-[80px] py-8 md:py-[60px] bg-white">
          <div className="flex flex-col gap-6 md:gap-10">
            {/* Description Text */}
            <div className="flex flex-col gap-4 md:gap-6 max-w-4xl">
              <p className="font-nohemi font-normal text-base md:text-lg lg:text-xl leading-relaxed md:leading-[32px] text-variable-collection-black">
                Led UX research on bus accessibility for visually impaired users, proposing an integrated service connecting bus stops,
                assistive devices, and a mobile app, and published a first-author thesis “Integrated Bus Assistance Service Design for People
                with Visual Impairments” (2025) at the Undergraduate Design research Conference (Korean Society of Design Science).
              </p>
              <p className="font-nohemi font-normal text-xl leading-[32px] text-variable-collection-black">
                • Conducted shadowing-based field research and coding-scheme analysis, translating insights into UI design, prioritizing
                voiceover support, high contrast, large typography, and text-first interfaces to improve usability for visually impaired users.
              </p>
            </div>

            {/* PDF Preview */}
            <div className="w-full h-[400px] md:h-[600px] lg:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="/gilbeot/gilbeotPublication.pdf"
                className="w-full h-full"
                title="Gilbeot Publication Preview"
              />
            </div>
          </div>
        </div>

        {/* 포트폴리오 이미지들 - 여백 없이 맨 위부터 꽉 차게 */}
        <div className="w-full">
          <Image
            src="/gilbeot/gilbeot1.png"
            alt="Gilbeot Portfolio 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          <Image
            src="/gilbeot/gilbeot2.png"
            alt="Gilbeot Portfolio 2"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/gilbeot/gilbeot3.png"
            alt="Gilbeot Portfolio 3"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/gilbeot/gilbeot4.png"
            alt="Gilbeot Portfolio 4"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/gilbeot/gilbeot5.png"
            alt="Gilbeot Portfolio 5"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

  // simo 프로젝트일 때만 simoportfolio.jpeg를 가로 전체 너비로 표시
  if (id === 'simo') {
    const simoData = {
      title: 'SiMO',
      description: 'SiMple mockup generator for designers',
      date: '2025.10~2025.12',
      tags: ['UX research', 'UI Design', 'Development'],
      url: 'https://mock-ai-azure.vercel.app/'
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
                  className="flex w-28 md:w-36 h-[40px] md:h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 bg-variable-collection-white hover:opacity-80 transition-opacity rounded-[60px]"
                >
                  <Image
                    src="/SVG/Visit.svg"
                    alt="Visit"
                    width={20}
                    height={20}
                    className="relative"
                  />
                    <span className="relative w-fit font-nohemi font-medium text-sm md:text-base tracking-[0] leading-normal whitespace-nowrap text-variable-collection-black">
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
          src="/simo/simoportfolio.jpeg"
          alt="SiMO Portfolio"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    );
  }

  // Graphics projects
  if (id === 'pompoko-story') {
    const pompokoData = {
      title: 'Pompoko story',
      date: '2023/03~2023/05',
      tags: ['Motion graphics', 'Illustration']
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {pompokoData.title}
              </h3>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {pompokoData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {pompokoData.tags.map((tag, index) => (
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
        {/* 유튜브 비디오 */}
        <div className="w-full px-[20px] md:px-[80px] py-8 md:py-[60px] bg-variable-collection-background">
          <div className="w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/ZcRT9zDzIqU"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="pompoko story"
            />
          </div>
        </div>
      </div>
    );
  }

  if (id === 'sea-anemones') {
    const seaAnemonesData = {
      title: 'Sea anemones and Nemos',
      date: '2023/09~2023/12',
      tags: ['Motion graphics', 'Graphic design']
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {seaAnemonesData.title}
              </h3>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {seaAnemonesData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {seaAnemonesData.tags.map((tag, index) => (
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
        {/* 유튜브 비디오 */}
        <div className="w-full px-[20px] md:px-[80px] py-8 md:py-[60px] bg-variable-collection-background">
          <div className="w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/RqZFmD2D1ZI"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Sea anemones and Nemos"
            />
          </div>
        </div>
      </div>
    );
  }

  if (id === 'fromalleywithlove') {
    const fromalleyData = {
      title: 'From Alley With Love',
      description: '골목으로부터, With Love',
      date: '03/2025~04/2025',
      tags: ['Graphic design', 'Web design'],
      url: 'https://chaeyeon-jin.github.io/fromalleywithlove/'
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] md:px-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {fromalleyData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                {fromalleyData.description}
              </p>

              {/* Visit site 버튼 */}
              <div className="inline-flex items-start justify-start">
                <a 
                  href={fromalleyData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-28 md:w-36 h-[40px] md:h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 bg-variable-collection-white hover:opacity-80 transition-opacity rounded-[60px]"
                >
                  <Image
                    src="/SVG/Visit.svg"
                    alt="Visit"
                    width={20}
                    height={20}
                    className="relative"
                  />
                    <span className="relative w-fit font-nohemi font-medium text-sm md:text-base tracking-[0] leading-normal whitespace-nowrap text-variable-collection-black">
                      Visit site
                    </span>
                </a>
              </div>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {fromalleyData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {fromalleyData.tags.map((tag, index) => (
                  <div key={index} className="inline-flex items-center gap-1.5">
                    <span className="flex w-fit items-center justify-center gap-1.5 pt-1.5 md:pt-2 pb-1 md:pb-1.5 px-2 md:px-3 bg-variable-collection-yellow rounded-[20px]">
                      <span className="relative w-fit font-nohemi font-medium text-variable-collection-black text-xs md:text-sm tracking-[0] leading-normal whitespace-nowrap">
                        {tag}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 포트폴리오 이미지들 - 여백 없이 맨 위부터 꽉 차게 */}
        <div className="w-full">
          <Image
            src="/graphics/fromalleywithlove/fromalley1.png"
            alt="fromalley 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          
          {/* Website Preview iframe */}
          <div className="w-full px-[20px] md:px-[80px] py-8 md:py-[60px] bg-variable-collection-background">
            <div className="w-full h-[400px] md:h-[600px] lg:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://chaeyeon-jin.github.io/fromalleywithlove/"
                className="w-full h-full"
                title="From Alley With Love Website Preview"
                allow="fullscreen"
              />
            </div>
          </div>
          
          <Image
            src="/graphics/fromalleywithlove/fromalley2.png"
            alt="fromalley 2"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/fromalleywithlove/fromalley3.png"
            alt="fromalley 3"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/fromalleywithlove/fromalley4.png"
            alt="fromalley 4"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/fromalleywithlove/fromalley5.png"
            alt="fromalley 5"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

  if (id === 'fffw') {
    const fffwData = {
      title: 'FFFW: Forth Floor Fashion Week',
      date: '2023/10~2024/01',
      tags: ['Editorial design', 'Graphic design']
    };

    useEffect(() => {
      // Instagram embed script 로드
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);

      // Instagram embed 초기화
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
      }

      return () => {
        // Cleanup
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }, []);

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {fffwData.title}
              </h3>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {fffwData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {fffwData.tags.map((tag, index) => (
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
        {/* Instagram Post Preview */}
        <div className="w-full px-[20px] md:px-[80px] py-8 md:py-[60px] bg-variable-collection-background flex items-center justify-center min-h-screen">
          <div className="max-w-full md:max-w-[540px] w-full">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DEIM8BEP2-H/"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            >
              <div style={{ padding: '16px' }}>
                <a
                  href="https://www.instagram.com/p/DEIM8BEP2-H/"
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        flexGrow: 0,
                        height: '40px',
                        marginRight: '14px',
                        width: '40px'
                      }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          marginBottom: '6px',
                          width: '100px'
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          width: '60px'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }} />
                  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        height: '20px',
                        margin: '0 10px 0 0',
                        width: '20px'
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '20px',
                        marginRight: '10px',
                        width: '0%'
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '20px',
                        width: '0%'
                      }}
                    />
                  </div>
                </a>
                <p
                  style={{
                    color: '#c9c8cd',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: '14px',
                    lineHeight: '17px',
                    marginBottom: 0,
                    marginTop: '8px',
                    overflow: 'hidden',
                    padding: '8px 0 7px',
                    textAlign: 'center',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <a
                    href="https://www.instagram.com/p/DEIM8BEP2-H/"
                    style={{
                      color: '#c9c8cd',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      lineHeight: '17px',
                      textDecoration: 'none'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    이 게시물 보기
                  </a>
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }

  if (id === '2024-happy-new-year') {
    const happyNewYearData = {
      title: '2024 happy new year!',
      date: '2023/12 ~ 2024/01',
      tags: ['Graphic design']
    };

    useEffect(() => {
      // Instagram embed script 로드
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);

      // Instagram embed 초기화
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
      }

      return () => {
        // Cleanup
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }, []);

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {happyNewYearData.title}
              </h3>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {happyNewYearData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {happyNewYearData.tags.map((tag, index) => (
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
        {/* Instagram Post Preview */}
        <div className="w-full px-[20px] md:px-[80px] py-8 md:py-[60px] bg-variable-collection-background flex items-center justify-center min-h-screen">
          <div className="max-w-full md:max-w-[540px] w-full">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/C1ju8vVSLzr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            >
              <div style={{ padding: '16px' }}>
                <a
                  href="https://www.instagram.com/p/C1ju8vVSLzr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        flexGrow: 0,
                        height: '40px',
                        marginRight: '14px',
                        width: '40px'
                      }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          marginBottom: '6px',
                          width: '100px'
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          width: '60px'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }} />
                  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        height: '20px',
                        margin: '0 10px 0 0',
                        width: '20px'
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '20px',
                        marginRight: '10px',
                        width: '0%'
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '20px',
                        width: '0%'
                      }}
                    />
                  </div>
                </a>
                <p
                  style={{
                    color: '#c9c8cd',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: '14px',
                    lineHeight: '17px',
                    marginBottom: 0,
                    marginTop: '8px',
                    overflow: 'hidden',
                    padding: '8px 0 7px',
                    textAlign: 'center',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <a
                    href="https://www.instagram.com/p/C1ju8vVSLzr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    style={{
                      color: '#c9c8cd',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      lineHeight: '17px',
                      textDecoration: 'none'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    이 게시물 보기
                  </a>
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'find-raccoons') {
    const findRaccoonsData = {
      title: 'Where did all the raccoons go?',
      description: '너구리 찾기 대작전',
      date: '05/2023~08/2023',
      tags: ['Graphic design', 'Web design'],
      url: 'https://chaeyeon-jin.github.io/find_raccoons/index.html'
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {findRaccoonsData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-xl tracking-[0] leading-[24px] text-variable-collection-black">
                {findRaccoonsData.description}
              </p>

              {/* Visit site 버튼 */}
              <div className="inline-flex items-start justify-start">
                <a 
                  href={findRaccoonsData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-28 md:w-36 h-[40px] md:h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 bg-variable-collection-white hover:opacity-80 transition-opacity rounded-[60px]"
                >
                  <Image
                    src="/SVG/Visit.svg"
                    alt="Visit"
                    width={20}
                    height={20}
                    className="relative"
                  />
                    <span className="relative w-fit font-nohemi font-medium text-sm md:text-base tracking-[0] leading-normal whitespace-nowrap text-variable-collection-black">
                      Visit site
                    </span>
                </a>
              </div>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {findRaccoonsData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {findRaccoonsData.tags.map((tag, index) => (
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

        {/* 포트폴리오 이미지들 - 여백 없이 맨 위부터 꽉 차게 */}
        <div className="w-full">
          <Image
            src="/graphics/findracoons/findraccon1.png"
            alt="findraccon 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          <Image
            src="/graphics/findracoons/findracoon2.png"
            alt="findraccon 2"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/findracoons/findraccon3.png"
            alt="findraccon 3"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/findracoons/findraccon4.png"
            alt="findraccon 4"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

  if (id === 'marinecreatures') {
    const marinecreaturesData = {
      title: 'Marine creatures',
      description: '바다생물사전',
      date: '04/2023 ~ 06/2023',
      tags: ['Graphic design', 'Web design'],
      url: 'https://chaeyeon-jin.github.io/marine_creatures/'
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {marinecreaturesData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-xl tracking-[0] leading-[24px] text-variable-collection-black">
                {marinecreaturesData.description}
              </p>

              {/* Visit site 버튼 */}
              <div className="inline-flex items-start justify-start">
                <a 
                  href={marinecreaturesData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-28 md:w-36 h-[40px] md:h-[50px] items-center justify-center gap-2 pt-2 pb-1.5 px-3 bg-variable-collection-white hover:opacity-80 transition-opacity rounded-[60px]"
                >
                  <Image
                    src="/SVG/Visit.svg"
                    alt="Visit"
                    width={20}
                    height={20}
                    className="relative"
                  />
                    <span className="relative w-fit font-nohemi font-medium text-sm md:text-base tracking-[0] leading-normal whitespace-nowrap text-variable-collection-black">
                      Visit site
                    </span>
                </a>
              </div>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {marinecreaturesData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {marinecreaturesData.tags.map((tag, index) => (
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

        {/* 포트폴리오 이미지들 - 여백 없이 맨 위부터 꽉 차게 */}
        <div className="w-full">
          <Image
            src="/graphics/marinecreatures/marincreatures1.png"
            alt="marinecreatures 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          <Image
            src="/graphics/marinecreatures/marinecreatures2.png"
            alt="marinecreatures 2"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/marinecreatures/marinecreatures3.png"
            alt="marinecreatures 3"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

  if (id === 'atr') {
    const atrData = {
      title: 'Affection to rent',
      description: 'Affection to rent',
      date: '2024/09~2024/12',
      tags: ['Graphic design', 'Branding design']
    };

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {atrData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-xl tracking-[0] leading-[24px] text-variable-collection-black">
                {atrData.description}
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {atrData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {atrData.tags.map((tag, index) => (
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

        {/* 포트폴리오 이미지들 - 여백 없이 맨 위부터 꽉 차게 */}
        <div className="w-full">
          <Image
            src="/graphics/atr/atr1.png"
            alt="atr 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          <Image
            src="/graphics/atr/atr2.png"
            alt="atr 2"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/atr/atr3.png"
            alt="atr 3"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/atr/atr4.png"
            alt="atr 4"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

  if (id === 'thebutterflyeffect') {
    const butterflyEffectData = {
      title: 'The butterfly effect',
      date: '2022/09~2022/12',
      tags: ['Graphic design', 'Illustration']
    };

    useEffect(() => {
      // Instagram embed script 로드
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);

      // Instagram embed 초기화
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
      }

      return () => {
        // Cleanup
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }, []);

    return (
      <div className="w-full">
        {/* 고정된 이전 버튼 */}
        {showBackButton && (
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
        )}
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[80px] py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-6 gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-3xl tracking-[0] leading-[36px] text-variable-collection-black">
                {butterflyEffectData.title}
              </h3>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-3 flex flex-col gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-2xl tracking-[0] leading-[24.3px] text-variable-collection-black">
                {butterflyEffectData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {butterflyEffectData.tags.map((tag, index) => (
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
        {/* Instagram Post Preview */}
        <div className="w-full px-[20px] md:px-[80px] py-8 md:py-[60px] bg-variable-collection-background flex items-center justify-center min-h-screen">
          <div className="max-w-full md:max-w-[540px] w-full">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/Cvj-YAgyvQ7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            >
              <div style={{ padding: '16px' }}>
                <a
                  href="https://www.instagram.com/p/Cvj-YAgyvQ7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        flexGrow: 0,
                        height: '40px',
                        marginRight: '14px',
                        width: '40px'
                      }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          marginBottom: '6px',
                          width: '100px'
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          width: '60px'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }} />
                  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        height: '20px',
                        margin: '0 10px 0 0',
                        width: '20px'
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '20px',
                        marginRight: '10px',
                        width: '0%'
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '20px',
                        width: '0%'
                      }}
                    />
                  </div>
                </a>
                <p
                  style={{
                    color: '#c9c8cd',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: '14px',
                    lineHeight: '17px',
                    marginBottom: 0,
                    marginTop: '8px',
                    overflow: 'hidden',
                    padding: '8px 0 7px',
                    textAlign: 'center',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <a
                    href="https://www.instagram.com/p/Cvj-YAgyvQ7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    style={{
                      color: '#c9c8cd',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      lineHeight: '17px',
                      textDecoration: 'none'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    이 게시물 보기
                  </a>
                </p>
              </div>
            </blockquote>
          </div>
        </div>
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

