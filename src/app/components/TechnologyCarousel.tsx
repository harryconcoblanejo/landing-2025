'use client';

import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SiNextdotjs, SiMongodb, SiGraphql, SiTailwindcss, SiPrisma } from 'react-icons/si';
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
    dragFree: false,
    containScroll: false,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    watchDrag: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    let stopped = false;
    const autoplay = () => {
      if (!emblaApi || stopped) return;
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };
    const interval = setInterval(autoplay, 1000);
    return () => {
      stopped = true;
      clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex"
          style={{ minWidth: 0 }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 mx-2 sm:mx-4 md:mx-6 flex flex-col items-center justify-center"
              style={{ minWidth: '80px', maxWidth: '120px' }}
            >
              <tech.icon
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                style={{
                  color: tech.color,
                  filter: isDark ? 'brightness(1.2)' : 'none',
                }}
              />
              <span
                className="text-xs sm:text-sm mt-2 font-medium text-white"
              >
                {(() => {
                  const label = t[tech.name as keyof typeof t];
                  return typeof label === 'string' ? label : tech.name.toUpperCase();
                })()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}