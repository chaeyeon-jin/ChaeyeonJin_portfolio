'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const router = useRouter();
  
  const projects = [
    {
      id: 1,
      title: 'SiMO: SiMple mockup generator for designers',
      description: 'UX/UI Design & Frontend Development',
      thumbnail: '/images/simo1.png',
      roles: ['UX', 'UI', 'Frontend Dev']
    },
    {
      id: 2,
      title: 'BiasPoca: reliable and safe photocard marketplace for U.S. K-pop fans',
      description: 'UX/UI Design & Frontend Development',
      thumbnail: '/images/biaspoca1.png',
      roles: ['UX', 'UI', 'Frontend Dev']
    },
    {
      id: 3,
      title: 'Five Flows: wellness brand for understanding inner energy',
      description: 'UX/UI Design & Frontend Development',
      thumbnail: '/images/fiveflows1.png',
      roles: ['UX', 'UI', 'Frontend Dev']
    },
    {
      id: 4,
      title: 'UI design project, 2025',
      description: 'UI design project 4 description',
      thumbnail: 'https://via.placeholder.com/400x300?text=Project+4'
    },
    {
      id: 5,
      title: 'UI design project, 2025',
      description: 'UI design project 5 description',
      thumbnail: 'https://via.placeholder.com/400x300?text=Project+5'
    },
    {
      id: 6,
      title: 'UI design project, 2025',
      description: 'UI design project 6 description',
      thumbnail: 'https://via.placeholder.com/400x300?text=Project+6'
    }
  ];

  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleCards(prev => new Set(prev).add(index));
          }, index * 100);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="interests" className="min-h-screen py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <h2 className="font-urbanist italic text-4xl md:text-5xl mb-12 text-black">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => (project.id === 1 || project.id === 2 || project.id === 3) && router.push(`/project/${project.id}`)}
              className={`relative aspect-video rounded-2xl overflow-hidden cursor-pointer group transition-all duration-600 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-24 scale-90'
              }`}
              style={{
                boxShadow: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(234, 255, 113, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-400"
                />
                {/* 하단 태그 - 항상 표시 */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm">
                  <div className="flex flex-wrap gap-2">
                    {project.roles && project.roles.map((role, roleIndex) => (
                      <span
                        key={roleIndex}
                        className="px-3 py-1 bg-primary/30 rounded-full text-black font-urbanist text-sm"
                        style={{ backgroundColor: 'rgba(234, 255, 113, 0.3)' }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover 시 전체 오버레이 */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <h3 className="font-urbanist text-xl font-semibold text-black mb-2">{project.title}</h3>
                  <p className="font-urbanist text-black/80">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
