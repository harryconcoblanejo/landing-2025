"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import { translations } from '../translations';
import { FiDownload } from 'react-icons/fi';

export default function Header() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const offset = 80; // header height + margin
      let current = '';
      if (window.scrollY < offset) {
        setActiveSection('top');
        return;
      }
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top - offset;
          if (top <= 0) current = id;
        }
      }
      setActiveSection(current || 'about');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${activeSection !== 'top' ? 'bg-slate-900/90' : 'bg-black/2'} backdrop-blur-sm text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#top"
              onClick={e => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('top');
              }}
              className={`text-xl font-bold text-white transition-colors duration-150 hover:underline focus:underline${activeSection==='top' ? ' underline underline-offset-4' : ''}`}
            >
              Rodrigo López
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('about');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className={`text-white text-base font-medium hover:underline hover:opacity-80 transition-opacity duration-200${activeSection==='about' ? ' underline' : ''}`}
            >
              {translations[language].about}
            </a>
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className={`text-white text-base font-medium hover:underline hover:opacity-80 transition-opacity duration-200${activeSection==='projects' ? ' underline' : ''}`}
            >
              {translations[language].projects}
            </a>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className={`text-white text-base font-medium hover:underline hover:opacity-80 transition-opacity duration-200${activeSection==='contact' ? ' underline' : ''}`}
            >
              {translations[language].contact}
            </a>
          </div>
          <div className="flex items-center gap-4 md:static md:mr-12 md:gap-4 fixed top-4 right-4 z-[110] md:top-auto md:right-auto">
            {/* Botón de descarga de CV, igual que los links */}
            <a
              href="/images/Rodrigo López 2025 cv.pdf"
              download
              className="text-white text-base font-medium hover:underline hover:opacity-80 transition-opacity duration-200 flex items-center gap-1 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="Descargar CV"
            >
              <FiDownload className="w-5 h-5" />
              <span>CV</span>
            </a>
            <LanguageToggle />
            <ThemeToggle />
            {/* MobileMenu siempre visible en mobile, oculto en md+ */}
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}