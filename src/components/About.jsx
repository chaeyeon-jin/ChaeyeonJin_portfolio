'use client'

import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-white">
      <div className="max-w-[90%] mx-auto px-5">
        <h2 className="font-urbanist italic text-4xl md:text-5xl mb-12 text-black">Introduction</h2>
        <div className="max-w-4xl">
          <div>
            <h3 className="font-urbanist text-3xl md:text-4xl mb-6 text-black">Hello, I'm Chaeyeon Jin</h3>
            <p className="font-urbanist text-lg md:text-xl mb-6 text-black/70 leading-relaxed">
              I'm a UX/UI designer passionate about crafting intuitive and engaging digital experiences.
              I cover the full spectrum of design—from user research and interface design to interaction design—and I have hands-on experience in branding.
              I build with HTML, CSS, and JavaScript, and I'm currently learning React to bring even more flexibility into my work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-urbanist font-semibold text-lg text-lime mb-2 uppercase">Major</h4>
                <p className="font-urbanist text-base font-semibold text-black">
                  Visual Communication Design
                  <br />
                  Minor in Industrial Design
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-urbanist font-semibold text-lg text-lime mb-2 uppercase">Year</h4>
                <p className="font-urbanist text-base font-semibold text-black">2nd semester Junior</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-urbanist font-semibold text-lg text-lime mb-2 uppercase">Goal</h4>
                <p className="font-urbanist text-base font-semibold text-black">UX/UI designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
