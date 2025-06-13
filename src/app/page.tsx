"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from './context/LanguageContext';
import TechnologyCarousel from './components/TechnologyCarousel';
import { translations } from './translations';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Mobile First */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gray-200 dark:bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
            alt="Hero Image"
            fill
            className="object-cover brightness-125 dark:brightness-100"
            priority
          />
          {/* Capa blanca solo si no está en dark mode */}
          {!isDark && <div className="absolute inset-0 pointer-events-none bg-white/10" />}
          {/* Degradado para mejorar la legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
        </div>

        {/* Contenedor del texto */}
        <div className="relative h-full flex items-center">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.hero.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        {/* Overlay TechnologyCarousel at the bottom of the hero */}
        <div className="absolute bottom-0 left-0 w-full pb-2 px-2 z-20">
          <TechnologyCarousel />
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="w-full py-12 bg-transparent flex justify-center items-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: isDark ? '#fff' : '#1a202c' }}
          >
            {t.about}
          </h2>
          <p
            className="text-lg"
            style={{ color: isDark ? '#e5e7eb' : '#374151' }}
          >
            {t.aboutText}
          </p>
        </div>
      </section>

      {/* Projects Section - Mobile First */}
      <section id="projects" className="w-full px-4 py-12 sm:px-6 md:px-8 lg:px-12">
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: isDark ? '#fff' : '#1a202c' }}
        >
          {t.projects}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5].map((project) => (
            <div
              key={project}
              className="rounded-lg shadow-md p-4 sm:p-6 transform transition-transform hover:scale-[1.02]"
              style={{
                background: isDark ? '#23272f' : '#fff',
                color: isDark ? '#e5e7eb' : '#1a202c',
              }}
            >
              <h3
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{ color: isDark ? '#fff' : '#1a202c' }}
              >
                {t.projects} {project}
              </h3>
              <p
                className="text-sm sm:text-base"
                style={{ color: isDark ? '#e5e7eb' : '#4b5563' }}
              >
                {language === 'en'
                  ? `This is a description for project ${project}.`
                  : `Esta es una descripción para el proyecto ${project}.`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-6 md:py-12 flex justify-center items-center bg-transparent">
        <div className="max-w-2xl w-full mx-auto px-4 text-center">
          <h2
            className="text-4xl font-extrabold mb-6 text-center"
            style={{ color: isDark ? '#fff' : '#1a202c' }}
          >
            {t.contactText}
          </h2>
          <form className="bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg p-4 md:p-8 space-y-4 md:space-y-6 text-left" autoComplete="off">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input id="name" type="text" placeholder={t.contactName} aria-label={t.contactName} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-yellow-400 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none transition" required />
                <span className="text-xs text-red-400 mt-1 block min-h-[1em]">{/* error aquí si lo hay */}</span>
              </div>
              <div>
                <input id="email" type="email" placeholder={t.contactEmail} aria-label={t.contactEmail} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-yellow-400 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none transition" required />
                <span className="text-xs text-red-400 mt-1 block min-h-[1em]">{/* error aquí si lo hay */}</span>
              </div>
              <div>
                <input id="phone" type="tel" placeholder={t.contactPhone} aria-label={t.contactPhone} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-yellow-400 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none transition" required />
                <span className="text-xs text-red-400 mt-1 block min-h-[1em]">{/* error aquí si lo hay */}</span>
              </div>
              <div className="md:col-span-2">
                <textarea id="message" placeholder={t.contactMessage} aria-label={t.contactMessage} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-yellow-400 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none transition" rows={4} required />
                <span className="text-xs text-red-400 mt-1 block min-h-[1em]">{/* error aquí si lo hay */}</span>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input id="consent" type="checkbox" className="accent-yellow-300 w-4 h-4 mr-2" required />
              <label htmlFor="consent" className="text-xs text-gray-700 dark:text-gray-300">{t.contactConsent}</label>
            </div>
            <p className="text-xs text-gray-500 mt-2 mb-4">{t.contactLegal}</p>
            <button type="submit" className="w-full py-2 rounded-full bg-yellow-200 text-gray-700 font-bold text-base shadow-lg hover:bg-yellow-300 transition">{t.contactSend}</button>
          </form>
        </div>
      </section>
    </div>
  );
}

