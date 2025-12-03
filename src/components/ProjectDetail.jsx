'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProjectDetail = ({ id, router: routerProp }) => {
  const router = routerProp || useRouter();

  // 프로젝트 데이터
  const projectsData = {
    1: {
      id: 1,
      name: 'SiMO: SiMple mockup generator for designers',
      period: '2025.9~12',
      roles: ['UX', 'UI', 'Frontend Dev'],
      website: 'https://mock-ai-azure.vercel.app/',
      slides: Array.from({ length: 12 }, (_, i) => `/simo/simoslide${i + 1}.png`)
    },
    2: {
      id: 2,
      name: 'BiasPoca: reliable and safe photocard marketplace for U.S. K-pop fans',
      period: '2025/10-12',
      roles: ['UX', 'UI', 'Frontend Dev'],
      website: 'https://biaspoca.vercel.app/home',
      slides: [] // BiasPoca 슬라이드가 있다면 추가
    },
    3: {
      id: 3,
      name: 'Five Flows: wellness brand for understanding inner energy',
      period: '2025.9~12',
      roles: ['UX', 'UI', 'Frontend Dev'],
      website: 'https://fiveflows.vercel.app/',
      slides: Array.from({ length: 11 }, (_, i) => `/fiveflows/fiveflowsslide${i + 1}.png`)
    }
  };

  const project = projectsData[parseInt(id?.toString() || '0')];

  const handleBack = () => {
    router.push('/');
    // 스크롤을 projects 섹션으로 이동
    setTimeout(() => {
      const projectsSection = document.getElementById('interests');
      if (projectsSection) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        window.scrollTo({
          top: projectsSection.offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  useEffect(() => {
    // Scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-0.5 bg-lime z-40 transition-all duration-300';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);
    
    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    };
    
    window.addEventListener('scroll', updateProgress);
    
    return () => {
      window.removeEventListener('scroll', updateProgress);
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-urbanist text-2xl mb-4">Project not found</h1>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-primary rounded-full text-black font-urbanist"
            style={{ backgroundColor: '#EAFF71' }}
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 - 뒤로가기 버튼 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-black font-urbanist hover:opacity-70 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </button>
        </div>
      </div>

      {/* 프로젝트 정보 */}
      <div className="pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          {/* 프로젝트 제목 및 메타 정보 */}
          <div className="mb-16">
            <h1 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-black leading-tight">
              {project.name}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <span className="font-urbanist text-sm text-black/60 uppercase tracking-wide block mb-2">Period</span>
                <p className="font-urbanist text-xl text-black">{project.period}</p>
              </div>
              <div>
                <span className="font-urbanist text-sm text-black/60 uppercase tracking-wide block mb-2">My Role</span>
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role, index) => (
                    <span
                      key={index}
                      className="inline-block px-4 py-2 bg-primary/30 rounded-full text-black font-urbanist text-sm"
                      style={{ backgroundColor: 'rgba(234, 255, 113, 0.3)' }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-urbanist text-sm text-black/60 uppercase tracking-wide block mb-2">Website</span>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black font-urbanist hover:opacity-70 transition-opacity"
                >
                  <span>Visit Live Site</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 프로젝트 슬라이드 이미지들 */}
          {project.slides && project.slides.length > 0 && (
            <div className="space-y-0">
              {project.slides.map((slide, index) => (
                <div key={index} className="w-full">
                  <img
                    src={slide}
                    alt={`${project.name} slide ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

