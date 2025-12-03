'use client'

import React from 'react';

const Skills = () => {
  const designTools = [
    { name: 'Figma', level: 'Advanced', category: 'design' },
    { name: 'Adobe illustrator', level: 'Advanced', category: 'design' },
    { name: 'Adobe Photoshop', level: 'Advanced', category: 'design' },
    { name: 'Adobe After Effects', level: 'Intermediate', category: 'design' }
  ];

  const frontendSkills = [
    { name: 'HTML', level: 'Advanced', category: 'frontend' },
    { name: 'CSS', level: 'Advanced', category: 'frontend' },
    { name: 'JavaScript', level: 'Intermediate', category: 'frontend' },
    { name: 'React', level: 'Beginner', category: 'frontend' }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-white">
      <div className="max-w-[90%] mx-auto px-5">
        <h2 className="font-urbanist italic text-4xl md:text-5xl mb-12 text-black">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="font-urbanist text-2xl mb-6 text-black">Design Tools</h3>
            <div className="flex flex-col gap-4">
              {designTools.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-lime/30 to-white hover:from-lime/40 transition-all hover:translate-x-2"
                >
                  <span className="font-urbanist font-semibold text-black">{skill.name}</span>
                  <span className="px-3 py-1 rounded-full bg-lime/50 text-black text-sm font-medium">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="font-urbanist text-2xl mb-6 text-black">Frontend Development</h3>
            <div className="flex flex-col gap-4">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-lime/20 to-white hover:from-lime/30 transition-all hover:translate-x-2"
                >
                  <span className="font-urbanist font-semibold text-black">{skill.name}</span>
                  <span className="px-3 py-1 rounded-full bg-lime/40 text-black text-sm font-medium">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
