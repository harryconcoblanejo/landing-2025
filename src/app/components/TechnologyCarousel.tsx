'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiGraphql, SiCss3, SiTailwindcss, SiPrisma, SiJavascript, SiTypescript } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const technologies = [
  { icon: SiNextdotjs, name: 'nextjs', color: 'text-white drop-shadow-lg' },
  { icon: SiReact, name: 'react', color: 'text-[#61DAFB] drop-shadow-lg' },
  { icon: SiJavascript, name: 'javascript', color: 'text-[#F7DF1E] drop-shadow-lg' },
  { icon: SiTypescript, name: 'typescript', color: 'text-[#3178C6] drop-shadow-lg' },
  { icon: SiNodedotjs, name: 'nodejs', color: 'text-[#8cc84b] drop-shadow-lg' },
  { icon: SiMongodb, name: 'mongodb', color: 'text-[#47A248] drop-shadow-lg' },
  { icon: SiGraphql, name: 'graphql', color: 'text-[#E10098] drop-shadow-lg' },
  { icon: SiCss3, name: 'css', color: 'text-[#1572B6] drop-shadow-lg' },
  { icon: SiTailwindcss, name: 'tailwind', color: 'text-[#06B6D4] drop-shadow-lg' },
  { icon: SiPrisma, name: 'prisma', color: 'text-white drop-shadow-lg' }
];

export default function TechnologyCarousel() {
  const { language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
    containScroll: 'keepSnaps',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Add autoplay effect
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 1500);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full rounded-xl py-1">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {technologies.map((tech, index) => (
            <div key={index} className="flex-[0_0_200px] min-w-[200px] px-2">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 ${tech.color}`}>
                  <tech.icon className="w-full h-full" />
                </div>
                <span className="text-sm font-bold text-white whitespace-nowrap">
                  {tech.name === 'javascript' ? 'JavaScript' : 
                   tech.name === 'typescript' ? 'TypeScript' :
                   translations[language][tech.name]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
        onClick={scrollPrev}
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
        onClick={scrollNext}
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
} 