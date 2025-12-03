import React, { useState } from 'react';

const Hero = () => {
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
      });
      setIsMenuHovered(false);
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col bg-bg-cream">
      {/* 좌우 그라데이션 배경 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 왼쪽 그라데이션 - 가장자리에서 부드럽게 페이드 */}
        <div 
          className="absolute left-0 top-0 w-[15%] h-full"
          style={{
            background: 'linear-gradient(to right, #EAFF71 0%, rgba(234, 255, 113, 0.9) 10%, rgba(234, 255, 113, 0.7) 25%, rgba(234, 255, 113, 0.4) 45%, rgba(234, 255, 113, 0.2) 65%, rgba(234, 255, 113, 0.05) 85%, transparent 100%)'
          }}
        ></div>
        {/* 오른쪽 그라데이션 - 가장자리에서 부드럽게 페이드 */}
        <div 
          className="absolute right-0 top-0 w-[15%] h-full"
          style={{
            background: 'linear-gradient(to left, #EAFF71 0%, rgba(234, 255, 113, 0.9) 10%, rgba(234, 255, 113, 0.7) 25%, rgba(234, 255, 113, 0.4) 45%, rgba(234, 255, 113, 0.2) 65%, rgba(234, 255, 113, 0.05) 85%, transparent 100%)'
          }}
        ></div>
      </div>
      {/* 좌측 상단 네비게이션 - 고정 */}
      <div className="fixed top-8 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div 
            className="flex items-center gap-3 pointer-events-auto"
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
          >
          {/* 원형 버튼 */}
          <div
            className="w-12 h-12 rounded-full flex-shrink-0 transition-all duration-500 ease-out cursor-pointer"
            style={{
              backgroundColor: '#EAFF71',
              boxShadow: '0 0 16px #EAFF71',
              transform: isMenuHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          ></div>

          {/* 메뉴 버튼들 - hover 시에만 나타남 */}
          <div
            className={`px-4 py-2 bg-primary rounded-full flex items-center gap-4 transition-all duration-700 ease-out overflow-hidden ${
              isMenuHovered ? 'opacity-100 translate-x-0 w-auto' : 'opacity-0 translate-x-[-20px] w-0'
            }`}
            style={{
              backgroundColor: '#EAFF71',
            }}
          >
            <a
              href="#interests"
              onClick={(e) => handleSmoothScroll(e, 'interests')}
              className="text-black font-urbanist hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              projects
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-black font-urbanist hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              about
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="text-black font-urbanist hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              contact
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* 메인 텍스트 - 화면 하단 */}
      <div className="flex-1 flex items-end pb-20 md:pb-32 relative z-10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 w-full flex items-end gap-6">
          <p className="font-instrument-serif leading-tight text-black text-4xl md:text-6xl lg:text-[96px]" style={{ fontSize: 'clamp(2.5rem, 8vw, 96px)' }}>
            <span className="italic">Chaeyeon Jin</span> is a creative UX/UI designer who bridges Tech and design.
          </p>
          
          {/* CTA 버튼 - 완전한 원형 */}
          <button
            onClick={(e) => handleSmoothScroll(e, 'interests')}
            className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            style={{
              backgroundColor: '#EAFF71',
            }}
            aria-label="Scroll to projects"
          >
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
