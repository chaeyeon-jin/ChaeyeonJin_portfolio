'use client'

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message, type = 'info') => {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    notification.className = `fixed top-24 right-5 md:right-10 px-6 py-3 rounded-lg shadow-lg text-white z-50 ${bgColor} transform translate-x-full transition-transform duration-300`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 10);

    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(formData.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    showNotification('Message sent successfully! Thank you.', 'success');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-lime/20 to-white">
      <div className="max-w-[90%] mx-auto px-5">
        <h2 className="font-urbanist italic text-4xl md:text-5xl mb-12 text-black">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-urbanist text-3xl mb-4 text-black">Join my journey!</h3>
            <p className="font-urbanist text-lg mb-8 text-black/70">Contact me anytime :)</p>
            
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hcd0402@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-all hover:translate-x-2"
              >
                <span className="text-2xl">✉️</span>
                <span className="font-urbanist text-black">hcd0402@gmail.com</span>
              </a>
              <a
                href="https://github.com/Chaeyeon-Jin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-all hover:translate-x-2"
              >
                <span className="text-2xl">🐙</span>
                <span className="font-urbanist text-black">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/chaeyeon-jin-a4498b327/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-all hover:translate-x-2"
              >
                <span className="text-2xl">💼</span>
                <span className="font-urbanist text-black">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="font-urbanist text-2xl mb-6 text-center text-black">Email me</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl border-none bg-white/90 text-black placeholder-black/50 focus:outline-none focus:bg-white transition-colors font-urbanist"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl border-none bg-white/90 text-black placeholder-black/50 focus:outline-none focus:bg-white transition-colors font-urbanist"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl border-none bg-white/90 text-black placeholder-black/50 focus:outline-none focus:bg-white transition-colors font-urbanist resize-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-white text-black font-urbanist font-semibold hover:bg-lime/30 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
