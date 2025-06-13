'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiGraphql, SiCss3, SiTailwindcss, SiPrisma, SiJavascript, SiTypescript } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useTheme } from '../contexts/ThemeContext';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const technologies = [
  { icon: SiNextdotjs, name: 'nextjs', color: '#ffffff' },
  { icon: FaReact, name: 'react', color: '#61DAFB' },
  { icon: FaNodeJs, name: 'nodejs', color: '#339933' },
  { icon: FaDatabase, name: 'sql', color: '#00758F' },
  { icon: SiMongodb, name: 'mongodb', color: '#47A248' },
  { icon: SiGraphql, name: 'graphql', color: '#E10098' },
  { icon: SiTailwindcss, name: 'tailwind', color: '#06B6D4' },
  { icon: SiPrisma, name: 'prisma', color: '#2D3748' },
];

export default function TechnologyCarousel() {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[language];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: false,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(autoplay, 1000);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex flex-col items-center justify-center"
              style={{ minWidth: '80px', maxWidth: '120px' }}
            >
              <tech.icon
                className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14"
                style={{
                  color: isDark ? tech.color : tech.color,
                  filter: isDark ? 'brightness(1.2)' : 'none',
                }}
              />
              <span
                className="text-xs sm:text-sm mt-2 font-medium"
                style={{
                  color: isDark ? '#fff' : '#1a202c',
                }}
              >
                {t[tech.name as keyof typeof t]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}