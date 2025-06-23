'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function ProjectCarousel() {
	const { language } = useLanguage();
	const t = translations[language];
	const projects = [
		{
			title: t.projectsTodoTitle,
			description: t.projectsTodoDesc,
			image: '/images/CapturaToDoApp.PNG',
			url: 'https://todo-app-gray-beta.vercel.app/',
			external: true
		},
		{
			title: t.projectsDashboardTitle,
			description: t.projectsDashboardDesc,
			image: '/capturas htrace/Captura1.PNG',
			url: '/dashboard',
			external: false
		},
		{
			title: t.projectsLandingTitle,
			description: t.projectsLandingDesc,
			image: '/images/Captura agua.PNG',
			url: 'https://agua-page.vercel.app/',
			external: true
		}
	];

	return (
		<section className="w-full max-w-md mx-auto py-10 px-2 rounded-2xl bg-gradient-to-b from-slate-950 via-blue-200/90 to-blue-50/90 dark:from-[#1e293b] dark:via-[#23272f] dark:to-[#181e29] shadow-lg  dark:border-gray-800">
		
			<Swiper
				spaceBetween={24}
				slidesPerView={1}
				pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
				modules={[Pagination]}
			>
				{projects.map((project, idx) => (
					<SwiperSlide key={idx}>
						{project.external ? (
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block rounded-xl shadow-lg border bg-white dark:bg-[#23272f] border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-[1.02] transition-transform"
								style={{ textDecoration: 'none' }}
							>
								<div className="h-40 flex items-center justify-center bg-gray-200 dark:bg-gray-800 relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={200}
                                    className="object-cover w-full h-full rounded-t-xl"
                                    style={{ objectFit: 'cover' }}
                                />
                                {/* Transición visual entre imagen y body */}
                                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-white dark:to-[#23272f] pointer-events-none" />
                            </div>
								<div className="p-4">
									<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
									<p className="text-base text-gray-700 dark:text-gray-200">{project.description}</p>
								</div>
							</a>
						) : (
							<a
								href={project.url}
								className="block rounded-xl shadow-lg border bg-white dark:bg-[#23272f] border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-[1.02] transition-transform"
								style={{ textDecoration: 'none' }}
							>
								<div className="h-40 flex items-center justify-center bg-gray-200 dark:bg-gray-800 relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={200}
                                    className="object-cover w-full h-full rounded-t-xl"
                                    style={{ objectFit: 'cover' }}
                                />
                                {/* Transición visual entre imagen y body */}
                                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-white dark:to-[#23272f] pointer-events-none" />
                            </div>
								<div className="p-4">
									<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
									<p className="text-base text-gray-700 dark:text-gray-200">{project.description}</p>
								</div>
							</a>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			<div className="swiper-pagination-custom flex justify-center mt-8" />
		</section>
	);
}