"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from './context/LanguageContext';
import TechnologyCarousel from './components/TechnologyCarousel';
import { translations } from './translations';
import ThemeToggle from './components/ThemeToggle';
import { useForm, ValidationError } from '@formspree/react';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import ProjectCarousel from './components/ProjectCarousel';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  // Cambia el endpoint a xvgrajrw para Formspree
  const [state, handleSubmit] = useForm("xvgrajrw");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const t = translations[language];

  return (
    <div className={`flex flex-col min-h-screen w-full ${isDark ? 'dark' : ''}`}> 
      <Header />
      {/* Hero Section - Mobile First */}
      <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gray-200 dark:bg-gray-800 mobile-horizontal:h-[80vh]">
        <div className="absolute inset-0">
          <Image
             src="/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
            // src="/images/farzad-p-xSl33Wxyc-unsplash.jpg"
            alt="Hero Image"
            fill
            className="object-cover brightness-125 dark:brightness-100"
            priority
          />
          {/* Capa blanca solo si no está en dark mode */}
          {!isDark && <div className="absolute inset-0 pointer-events-none bg-white/10" />}
          {/* Degradado para mejorar la legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
          {/* Gradiente de transición visual hacia el body */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-[#181e29]/70 to-[#181e29] dark:via-[#101624]/80 dark:to-[#101624] pointer-events-none z-20" />
        </div>
        
        {/* Contenedor del texto */}
        <div className="absolute inset-0 flex items-center justify-start z-10 mobile-horizontal:justify-center">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12 min-w-0">
            <div className="rounded-2xl bg-black/20 dark:bg-black/30 backdrop-blur-md p-4 sm:p-6 flex flex-col items-start shadow-lg">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.hero.title}
              </h1>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
        {/* Overlay TechnologyCarousel at the bottom of the hero */}
        <div className="absolute bottom-0 left-0 w-full pb-2 px-2 z-20 mobile-horizontal:mt-16">
          <TechnologyCarousel />
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="w-full py-12 bg-transparent flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-full min-w-0">
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
      <section id="projects" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 max-w-full min-w-0">
        <h2
          className="text-4xl font-extrabold mb-6 text-center font-sans"
          style={{ color: isDark ? '#fff' : '#1a202c' }}
        >
          {t.projects}
        </h2>
        <ProjectCarousel />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-6 md:py-12 flex justify-center items-center bg-transparent px-4 sm:px-6 md:px-8 lg:px-12 max-w-full min-w-0">
        <div className="max-w-2xl w-full mx-auto px-4 text-center">
          <h2
            className="text-4xl font-extrabold mb-6 text-center"
            style={{ color: isDark ? '#fff' : '#1a202c' }}
          >
            {t.contactText}
          </h2>
          {state.succeeded ? (
            <p className="text-green-600 text-center mb-8">¡Mensaje enviado correctamente!</p>
          ) : (
            <form className="bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg p-4 md:p-8 space-y-4 md:space-y-6 text-left" autoComplete="off" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-1 text-gray-700 dark:text-gray-300">
                    {t.contactName} <span className="text-red-500" aria-label="obligatorio">*</span>
                  </label>
                  <input id="name" type="text" name="name" placeholder={t.contactName} aria-label={t.contactName} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-yellow-400 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none transition" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-1 text-gray-700 dark:text-gray-300">
                    {t.contactEmail} <span className="text-red-500" aria-label="obligatorio">*</span>
                  </label>
                  <input id="email" type="email" name="email" placeholder={t.contactEmail} aria-label={t.contactEmail} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-yellow-400 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none transition" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium mb-1 text-gray-700 dark:text-gray-300">
                    {t.contactPhone} <span className="text-red-500" aria-label="obligatorio">*</span>
                  </label>
                  <input id="phone" type="tel" name="phone" placeholder={t.contactPhone} aria-label={t.contactPhone} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-yellow-400 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none transition" required />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-xs font-medium mb-1 text-gray-700 dark:text-gray-300">
                    {t.contactMessage} <span className="text-red-500" aria-label="obligatorio">*</span>
                  </label>
                  <textarea id="message" name="message" placeholder={t.contactMessage} aria-label={t.contactMessage} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-yellow-400 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none transition" rows={4} required />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {state.submitting ? 'Enviando...' : t.contactSend}
              </button>
            </form>
          )}
          {/* Datos de contacto personales */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-base">
            {/* WhatsApp */}
            <a
              href="https://wa.me/541141636472"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
              style={{ color: isDark ? '#25D366' : '#128C7E' }}
            >
              <SiWhatsapp className="w-5 h-5" />
              <span className="font-medium">+54 11 4163-6472</span>
            </a>
            {/* Mail */}
            <a
              href="mailto:harryconcoblanejo@gmail.com"
              className="flex items-center gap-2 transition-colors"
              style={{ color: isDark ? '#60a5fa' : '#2563eb' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.83l-7.07 7.07a1 1 0 0 1-1.42 0L4 6.83V20h16V6.83z" />
              </svg>
              <span className="font-medium">harryconcoblanejo@gmail.com</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rodrigo-lopez-0bb48620b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
              style={{ color: isDark ? '#60a5fa' : '#2563eb' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.25-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"/></svg>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

