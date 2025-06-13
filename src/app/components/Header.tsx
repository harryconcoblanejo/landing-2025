"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import { translations } from '../translations';

export default function Header() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const offset = 80; // header height + margin
      let current = '';
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
    <header className="fixed top-0 left-0 w-full z-30 bg-black/2 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <a href="#top" className="font-bold text-lg hover:underline focus:underline transition-colors duration-150">
                Rodrigo López
              </a>
            </div>
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