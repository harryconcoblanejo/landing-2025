"use client";

import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center transition-all duration-200 hover:scale-125 cursor-pointer bg-transparent p-0 m-0 border-none shadow-none outline-none"
      aria-label="Toggle language"
      style={{ boxShadow: 'none', background: 'none', border: 'none' }}
    >
      {language === 'en' ? (
        <ReactCountryFlag countryCode="ES" svg style={{ width: '2em', height: '1.2em', display: 'block' }} title="Español" />
      ) : (
        <ReactCountryFlag countryCode="GB" svg style={{ width: '2em', height: '1.2em', display: 'block' }} title="English" />
      )}
    </button>
  );
} 