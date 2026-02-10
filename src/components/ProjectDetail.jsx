'use client'

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const ProjectDetail = ({ id }) => {
  const router = useRouter();
  const lenis = useLenis();

  // PDF.js worker 설정
  useEffect(() => {
    if (typeof window !== 'undefined') {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs`;
    }
  }, []);
  
  // 페이지 진입 시 최상단으로 스크롤
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [id, lenis]);

  // 공통 Back 핸들러: 메인 페이지로 이동 (스크롤 위치 복원은 Projects 컴포넌트에서 처리)
  const handleBack = () => {
    router.push('/');
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
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

  // dipin 프로젝트 처리
  if (id === 'dipin') {
    const dipinData = {
      title: 'DIPIN',
      description: 'An AI-era evaluation engine for real-world problem-solving',
      date: '11/2025 ~ 02/2026',
      tags: ['UX research', 'UI design', 'Development'],
      url: 'https://app.dipin.site/'
    };

    const dipinImages = [
      '/dipin/dipin1.png',
      '/dipin/dipin2.png',
      '/dipin/dipin3.png',
      '/dipin/dipin4.png',
      '/dipin/dipin5.png',
      '/dipin/dipin6.png',
      '/dipin/dipin7.png',
      '/dipin/dipin8.png',
      '/dipin/dipin9.png'
    ];

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {dipinData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                {dipinData.description}
              </p>

              {/* Visit site 버튼 */}
              <div className="inline-flex items-start justify-start">
                <a
                  href={dipinData.url}
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
                {dipinData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {dipinData.tags.map((tag, index) => (
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
        <div className="w-full">
          <Image
            src="/dipin/dipinthumbnail.png"
            alt="DIPIN thumbnail"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          {dipinImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`DIPIN ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          ))}
        </div>
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
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {gilbeotData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
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
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {simoData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
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
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
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
      description: 'This project was selected for exhibition at Dongdaemun Design Plaza (DDP) as part of the SK Green Happiness Design Exhibition. Based on the Pom Poko film, this is an illustrated motion graphics piece that presents the story of new town development and the overall narrative from the raccoons\' perspective.',
      date: '2023/03~2023/05',
      tags: ['Motion graphics', 'Illustration']
    };

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {pompokoData.title}
              </h3>
              
              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                {pompokoData.description}
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {pompokoData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {pompokoData.tags.map((tag, index) => (
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
        {/* 유튜브 비디오 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-8 md:pl-[180px] md:pr-[80px] py-8 md:py-[60px] bg-variable-collection-background">
          <div className="w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/ZcRT9zDzIqU?autoplay=1&mute=1"
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {seaAnemonesData.title}
              </h3>
              
              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                I created a 45-second motion graphics video based on vector illustrations using After Effects. Based on documentary narration, the content is about sea anemones and Nemos, and the color palette uses tones close to primary colors to unify the narration and mood.
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {seaAnemonesData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {seaAnemonesData.tags.map((tag, index) => (
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
        {/* 유튜브 비디오 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-8 md:pl-[180px] md:pr-[80px] py-8 md:py-[60px] bg-variable-collection-background">
          <div className="w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/RqZFmD2D1ZI?autoplay=1&mute=1"
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
      description: 'Taking inspiration from street signs, I created a location poster for the print shop. Using elements like the word "OPEN", printer-shaped graphics, and the actual form of yellow street signs, I designed an eye-catching poster to promote the print shop. I used 12-color risography printing, which allowed me to fully understand the risograph printing process.',
      date: '03/2025~04/2025',
      tags: ['Graphic design', 'Web design'],
      url: 'https://chaeyeon-jin.github.io/fromalleywithlove/'
    };

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {fromalleyData.title}
              </h3>

              {/* 설명 - fromalleywithlove는 이미지 위에 표시되므로 여기서는 숨김 */}
              {fromalleyData.description && (
                <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                  {fromalleyData.description}
                </p>
              )}

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
          {/* 프로젝트 설명 텍스트 */}
          <div className="w-full px-[20px] pt-[80px] md:pt-8 md:pl-[180px] md:pr-[80px] py-8 md:py-12 bg-variable-collection-background">
            <p className="font-nohemi font-normal text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed md:leading-[28px] text-variable-collection-black max-w-4xl">
              As urban landscapes rapidly change, many traditional alleys in Seoul are disappearing.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              This project aims to preserve the visual memories by transforming signage, objects, and graphic elements discovered in the alleys of Seoul into a digital stamp collection.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              The website offers a nostalgic journey that transforms everyday urban elements into personal, memorable encounters.
            </p>
          </div>
          
          <Image
            src="/graphics/fromalleywithlove/fromalley1.png"
            alt="fromalley 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          
          <Image
            src="/graphics/fromalleywithlove/fromalley2.png"
            alt="fromalley 2"
            width={1920}
            height={1080}
            className="w-full h-auto"
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

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {fffwData.title}
              </h3>
              
              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                I created a palm-sized (180*180mm) zine capturing the daily fashion of design students. Each page features an introduction to the outfit worn that day, along with favorite brands and vintage shops, personal style preferences, and an interview about the most favorite part of the day's outfit. The back pages include front and back covers along with three daily fashion looks, each with a brief outfit introduction. It was a valuable project capturing the current state of design students.
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {fffwData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {fffwData.tags.map((tag, index) => (
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
        
        {/* 프로젝트 이미지들 - 2x2 그리드 */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[1, 20, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((num) => (
              <div key={num} className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={`/graphics/fffw/fffw${num}.png`}
                  alt={`FFFW ${num}`}
                  fill
                  className="object-cover"
                  priority={num === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (id === '2024-happy-new-year') {
    const happyNewYearData = {
      title: '2024 happy new year!',
      date: '2023/12 ~ 2024/01',
      tags: ['Graphic design', 'Risography']
    };

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 용지 사이즈, 설명 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {happyNewYearData.title}
              </h3>
              
              {/* 용지 사이즈 */}
              <p className="font-nohemi font-normal text-base md:text-lg tracking-[0] leading-normal text-variable-collection-black">
                182*128mm
              </p>
              
              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                To celebrate the Year of the Blue Dragon in 2024, I designed and distributed New Year greeting cards. The cards were produced using a risography machine with blue and green color separations.
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {happyNewYearData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {happyNewYearData.tags.map((tag, index) => (
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
        {/* 프로젝트 이미지들 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
          <Image
            src="/graphics/2024happynewyear/2024-1.jpeg"
            alt="2024 happy new year 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          <Image
            src="/graphics/2024happynewyear/2024-2.jpeg"
            alt="2024 happy new year 2"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/2024happynewyear/2024-3.jpeg"
            alt="2024 happy new year 3"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <Image
            src="/graphics/2024happynewyear/2024-4.jpeg"
            alt="2024 happy new year 4"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

  if (id === 'find-raccoons') {
    const findRaccoonsData = {
      title: 'Where did all the raccoons go?',
      description: 'This project was selected for exhibition at Dongdaemun Design Plaza (DDP) as part of the SK Green Happiness Design Exhibition. Inspired by the Studio Ghibli film Pom Poko, it reinterprets the story from the raccoons\' perspective, reflecting on themes of urbanization and environmental loss.',
      date: '05/2023~08/2023',
      tags: ['Graphic design', 'Web design'],
      url: 'https://chaeyeon-jin.github.io/find_raccoons/index.html'
    };

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {findRaccoonsData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
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
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {findRaccoonsData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {findRaccoonsData.tags.map((tag, index) => (
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
            src="/graphics/findracoons/findraccon1.png"
            alt="findraccon 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          
          {/* Website Previews */}
          <div className="w-full px-[20px] md:pl-[180px] md:pr-[80px] py-8 md:py-[60px] bg-variable-collection-background space-y-8 md:space-y-12">
            {/* First Website Preview */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
              <div className="w-full md:w-2/3 h-[400px] md:h-[600px] lg:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://chaeyeon-jin.github.io/find_raccoons/index.html"
                  className="w-full h-full"
                  title="Find Raccoons - Main"
                  allow="fullscreen"
                />
              </div>
              <div className="w-full md:w-1/3 flex items-start pt-0 md:pt-4">
                <p className="font-nohemi font-normal text-sm md:text-base lg:text-lg tracking-[0] leading-relaxed text-variable-collection-black">
                  The first page introduces the storyline of Pom Poko through a series of key quotes from the animation.
                  Each quote is condensed into a short keyword, and when users hover over a keyword, it expands into a detailed dialogue box providing more context.
                </p>
              </div>
            </div>
            
            {/* Second Website Preview */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
              <div className="w-full md:w-2/3 h-[400px] md:h-[600px] lg:h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white">
                <iframe
                  src="https://chaeyeon-jin.github.io/find_raccoons/chatgi.html"
                  className="w-full h-full"
                  title="Find Raccoons - Chatgi"
                  allow="fullscreen"
                />
              </div>
              <div className="w-full md:w-1/3 flex items-start pt-0 md:pt-4">
                <p className="font-nohemi font-normal text-sm md:text-base lg:text-lg tracking-[0] leading-relaxed text-variable-collection-black">
                  This page depicts modern-day Tokyo, layered over with development-related quotes from Pom Poko.
                  Users can move their cursor across the image to search for raccoons hidden within the cityscape, blending the story's themes of urbanization and displacement with playful interaction.
                </p>
              </div>
            </div>
            
            {/* Third Website Preview */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
              <div className="w-full md:w-2/3 h-[400px] md:h-[600px] lg:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://chaeyeon-jin.github.io/find_raccoons/jakjeon.html"
                  className="w-full h-full"
                  title="Find Raccoons - Jakjeon"
                  allow="fullscreen"
                />
              </div>
              <div className="w-full md:w-1/3 flex items-start pt-0 md:pt-4">
                <p className="font-nohemi font-normal text-sm md:text-base lg:text-lg tracking-[0] leading-relaxed text-variable-collection-black">
                  In this final section, users can "release" raccoons by stamping them onto the rural scenery of Tokyo before urban development.
                  After a few seconds, the raccoons gradually fade, leaving behind only silhouettes — a quiet reflection of how urban development leads to the disappearance of nature.
                </p>
              </div>
            </div>
          </div>
          
          {/* Project Reflection */}
          <div className="w-full px-[20px] md:pl-[180px] md:pr-[80px] py-8 md:py-12 bg-variable-collection-background">
            <p className="font-nohemi font-normal text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed md:leading-[28px] text-variable-collection-black max-w-4xl">
              Working on this project taught me the power of combining visual storytelling with interactive design. I learned how to use simple interactions to deliver emotional narratives, and how even small user experiences can create meaningful connections with the audience.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'marinecreatures') {
    const marinecreaturesData = {
      title: 'Marine creatures',
      description: 'Marine Creatures is a digital archive inspired by my love for scuba diving and my desire to better understand marine life. Through a simple grid layout and pixel art aesthetic, the site introduces 24 species, each with a brief profile including name, classification, and description. The project focuses on creating a playful and accessible experience, allowing users to explore the ocean world without barriers.',
      date: '04/2023 ~ 06/2023',
      tags: ['Graphic design', 'Web design'],
      url: 'https://chaeyeon-jin.github.io/marine_creatures/'
    };

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명, 웹사이트 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {marinecreaturesData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
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
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {marinecreaturesData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {marinecreaturesData.tags.map((tag, index) => (
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
            src="/graphics/marinecreatures/marincreatures1.png"
            alt="marinecreatures 1"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          
          {/* Website Preview */}
          <div className="w-full px-[20px] md:pl-[180px] md:pr-[80px] py-8 md:py-[60px] bg-variable-collection-background">
            <div className="w-full h-[400px] md:h-[600px] lg:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://chaeyeon-jin.github.io/marine_creatures/"
                className="w-full h-full"
                title="Marine Creatures Website Preview"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'hut') {
    const hutData = {
      title: 'HUT',
      description: 'I created a zine featuring interviews and the daily lives of design students. The zine was printed using risography with three colors (gold, cyan, black), and I hand-bound the physical copies myself. I also designed the typography for the book title and created Instagram posts for the project.',
      date: '2025/06~2025/10',
      tags: ['Graphic design', 'Editorial design']
    };

    // Instagram embed script loading
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup
        const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }, []);

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {hutData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                {hutData.description}
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {hutData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {hutData.tags.map((tag, index) => (
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

        {/* 포트폴리오 이미지들 - 좌우 레이아웃 */}
        <div className="w-full flex flex-col md:flex-row gap-0">
          {/* 왼쪽: Instagram Embed */}
          <div className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-12 bg-variable-collection-background">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/DOaIxr4EeWS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                margin: '1px',
                maxWidth: '702px',
                minWidth: '424px',
                padding: '0',
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
          </div>

          {/* 오른쪽: 이미지들 - 2x3 그리드, 여백 없이 */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-0">
            {[2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={`/graphics/HUT/hut${num}.jpeg`}
                  alt={`HUT ${num}`}
                  fill
                  className="object-cover"
                  priority={num === 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


  if (id === 'print-in-progress') {
    const pipData = {
      title: 'Printing in progress',
      description: 'Taking inspiration from street signs, I created a location poster for the print shop. Using elements like the word "OPEN", printer-shaped graphics, and the actual form of yellow street signs, I designed an eye-catching poster to promote the print shop. I used 12-color risography printing, which allowed me to fully understand the risograph printing process.',
      date: '2025/02~2025/03',
      tags: ['Graphic design', 'Risography']
    };

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {pipData.title}
              </h3>

              {/* 설명 */}
              {pipData.description && (
                <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                  {pipData.description}
                </p>
              )}
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {pipData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {pipData.tags.map((tag, index) => (
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

        {/* 포트폴리오 이미지들 */}
        {/* 썸네일 이미지 - 크게 표시 */}
        <div className="w-full">
          <div className="relative w-full flex items-center justify-center bg-variable-collection-background">
            <div className="relative w-full max-w-full">
              <Image
                src="/graphics/PIP/pipthumbnail.jpeg"
                alt="Printing in progress thumbnail"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* pip1~4 이미지들 - 한 줄에 여백 없이 배치 */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/graphics/PIP/pip1.jpg"
                alt="Printing in progress 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/graphics/PIP/pip2.jpeg"
                alt="Printing in progress 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/graphics/PIP/pip3.jpeg"
                alt="Printing in progress 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/graphics/PIP/pip4.jpeg"
                alt="Printing in progress 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (id === 'atr') {
    const atrData = {
      title: 'Affection to rent',
      description: 'Logo design and merchandise production for Affection to Rent, an Irish band.',
      date: '2024/09~2024/12',
      tags: ['Graphic design', 'Branding design']
    };

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {atrData.title}
              </h3>

              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                {atrData.description}
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {atrData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {atrData.tags.map((tag, index) => (
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
      description: 'Based on the plot of the film The Butterfly Effect (2004), I created a graphic book that combines illustrations, images, and typography in an experimental way to depict scenes where the protagonist travels through time and the dialogues from those scenes.',
      date: '2022/09~2022/12',
      tags: ['Graphic design', 'Illustration']
    };

    const [numPages, setNumPages] = useState(null);
    const [pdfLoaded, setPdfLoaded] = useState(false);
    const [pdfError, setPdfError] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPdfLoaded(true);
      setPdfError(null);
    }

    function onDocumentLoadError(error) {
      console.error('Error loading PDF:', error);
      setPdfError('Failed to load PDF file. Please check the file path.');
    }

    const options = useMemo(
      () => ({
        cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
        cMapPacked: true,
      }),
      [],
    );

    return (
      <div className="w-full">
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
        {/* 프로젝트 설명 - 그리드 시스템 */}
        <div className="w-full px-[20px] pt-[80px] md:pt-6 md:pl-[180px] md:pr-[80px] py-6 md:py-[46px] bg-variable-collection-background">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-3 md:gap-x-5">
            {/* 왼쪽 3칸 - 제목, 설명 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 제목 */}
              <h3 className="font-nohemi font-normal text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[36px] text-variable-collection-black">
                {butterflyEffectData.title}
              </h3>
              
              {/* 설명 */}
              <p className="font-nohemi font-normal text-base md:text-xl tracking-[0] leading-snug md:leading-[24px] text-variable-collection-black">
                {butterflyEffectData.description}
              </p>
            </div>

            {/* 오른쪽 3칸 - 기간, 태그 (세로 배치) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:gap-[22px]">
              {/* 날짜 */}
              <time className="font-nohemi font-normal text-lg md:text-2xl tracking-[0] leading-normal md:leading-[24.3px] text-variable-collection-black">
                {butterflyEffectData.date}
              </time>

              {/* 태그들 */}
              <div className="inline-flex items-start gap-2 flex-wrap">
                {butterflyEffectData.tags.map((tag, index) => (
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
        
        {/* PDF Book Viewer */}
        <div className="w-full px-[20px] pt-[80px] md:pt-8 md:pl-[180px] md:pr-[80px] py-8 md:py-[60px] bg-variable-collection-background">
          <div className="w-full max-w-6xl mx-auto flex justify-center">
            <Document
              file="/graphics/TBE/thebutterflyeffect.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              options={options}
              loading={
                <div className="w-full max-w-[500px] h-[750px] flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-variable-collection-black mx-auto mb-4"></div>
                    <p className="font-nohemi text-variable-collection-black">Loading PDF...</p>
                  </div>
                </div>
              }
              error={
                pdfError ? (
                  <div className="w-full max-w-[500px] h-[750px] flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="text-center">
                      <p className="font-nohemi text-variable-collection-black text-red-600">{pdfError}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-[500px] h-[750px] flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="text-center">
                      <p className="font-nohemi text-variable-collection-black text-red-600">Failed to load PDF file.</p>
                    </div>
                  </div>
                )
              }
            >
              {pdfLoaded && numPages && (
                <HTMLFlipBook
                  width={550}
                  height={780}
                  minWidth={300}
                  maxWidth={800}
                  minHeight={400}
                  maxHeight={1000}
                  maxShadowOpacity={0.5}
                  showCover={true}
                  mobileScrollSupport={true}
                  usePortrait={false}
                  className="shadow-2xl"
                >
                  {Array.from({ length: numPages }, (_, index) => (
                    <div key={index} className="page bg-white flex items-center justify-center overflow-hidden p-0">
                      <Page
                        pageNumber={index + 1}
                        width={550}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-md object-contain h-full w-full"
                      />
                    </div>
                  ))}
                </HTMLFlipBook>
              )}
            </Document>
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

