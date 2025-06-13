"use client";

import { useEffect, useState } from "react";
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme-dark");
      const dark = stored ? JSON.parse(stored) : false;
      setIsDark(!!dark);
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      console.log("[ThemeToggle] useEffect: stored=", stored, "dark=", dark, "<html>.classList=", document.documentElement.classList.value);
    }
  }, []);

  const toggleDark = () => {
    setIsDark((prev) => {
      const newDark = !prev;
      if (newDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme-dark", JSON.stringify(newDark));
      console.log("[ThemeToggle] toggleDark: newDark=", newDark, "<html>.classList=", document.documentElement.classList.value);
      return newDark;
    });
  };

  return (
    <button
      onClick={toggleDark}
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