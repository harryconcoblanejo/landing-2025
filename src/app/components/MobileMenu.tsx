'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { translations } from '../translations';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const offset = 80;
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animación para los links
  const linkBase =
    'text-white text-base font-medium hover:underline hover:opacity-80 transition-opacity duration-200 py-3 w-full text-center border-b border-white/10 opacity-0 translate-y-4 transition-all';

  return (
    <div className="md:hidden">
      {/* Botón hamburguesa: en el flujo normal, fixed solo cuando el menú está abierto */}
      {!isMenuOpen ? (
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center p-0 m-0 bg-transparent border-none shadow-none outline-none text-white transition-transform duration-200 hover:scale-125"
          aria-label="Toggle menu"
          style={{ boxShadow: 'none', background: 'none', border: 'none' }}
        >
          <FaBars size={24} />
        </button>
      ) : (
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center p-0 m-0 bg-transparent border-none shadow-none outline-none text-white transition-transform duration-200 hover:scale-125"
          aria-label="Toggle menu"
          style={{ boxShadow: 'none', background: 'none', border: 'none' }}
        >
          <FaTimes size={24} />
        </button>
      )}

      {/* Menú tipo drawer desde la derecha, debajo del header, altura automática y fondo semitransparente */}
      <div
        className={`fixed top-16 right-0 w-4/5 max-w-xs min-w-[180px] bg-black/90 shadow-lg z-50 transform transition-transform duration-300 ease-in-out rounded-b-xl overflow-hidden h-auto flex flex-col justify-center ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center px-2 w-full pb-4">
          <a
            href="#about"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('about');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
              toggleMenu();
            }}
            className={linkBase.replace('text-base', 'text-lg') + (isMenuOpen ? ' opacity-100 translate-y-0' : '') + (activeSection==='about' ? ' underline' : '')}
            style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
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
              toggleMenu();
            }}
            className={linkBase.replace('text-base', 'text-lg') + (isMenuOpen ? ' opacity-100 translate-y-0' : '') + (activeSection==='projects' ? ' underline' : '')}
            style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
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
              toggleMenu();
            }}
            className={linkBase.replace('text-base', 'text-lg') + (isMenuOpen ? ' opacity-100 translate-y-0' : '') + (activeSection==='contact' ? ' underline' : '')}
            style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
          >
            {translations[language].contact}
          </a>
          {/* Botón de descarga de CV en el menú mobile */}
          <a
            href="/images/Rodrigo López 2025 cv.pdf"
            download
            className={linkBase.replace('text-base', 'text-lg') + (isMenuOpen ? ' opacity-100 translate-y-0' : '')}
            style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
            title="Descargar CV"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <FiDownload className="w-5 h-5" />
              <span>CV</span>
            </span>
          </a>
        </nav>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera, debajo del header */}
      {isMenuOpen && (
        <div
          className="fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] bg-black/40 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}