"use client";

import { useTheme } from '../contexts/ThemeContext';
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 transition-all duration-300 focus:outline-none cursor-pointer hover:scale-110"
    >
      {isDark ? (
        <MdLightbulbOutline size={24} color="#bbb" title="Luz apagada" />
      ) : (
        <MdLightbulb size={24} color="#fff" title="Luz encendida" style={{ filter: 'drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #fff)' }} />
      )}
    </button>
  );
}