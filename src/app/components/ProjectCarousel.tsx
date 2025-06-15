'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
	{
		title: 'Todo App',
		description: 'Aplicación de tareas minimalista',
		image: '/images/farzad-p-xSl33Wxyc-unsplash.jpg',
		url: 'https://todo-app-gray-beta.vercel.app/'
	},
	{
		title: 'Gestor de Proyectos',
		description: 'Organiza tus proyectos fácilmente',
		image: '/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg',
		url: 'https://todo-app-gray-beta.vercel.app/'
	},
	{
		title: 'Dashboard',
		description: 'Panel de control interactivo',
		image: '/images/farzad-p-xSl33Wxyc-unsplash.jpg',
		url: 'https://todo-app-gray-beta.vercel.app/'
	},
	{
		title: 'E-commerce',
		description: 'Tienda online moderna y responsiva',
		image: '/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg',
		url: 'https://todo-app-gray-beta.vercel.app/'
	},
	{
		title: 'Blog Personal',
		description: 'Plataforma para compartir artículos y noticias',
		image: '/images/farzad-p-xSl33Wxyc-unsplash.jpg',
		url: 'https://todo-app-gray-beta.vercel.app/'
	}
];

export default function ProjectCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		dragFree: false,
		containScroll: false,
		align: 'start',
		slidesToScroll: 1,
		skipSnaps: false,
		watchDrag: false
	});

	useEffect(() => {
		if (!emblaApi) return;
		let stopped = false;
		const autoplay = () => {
			if (!emblaApi || stopped) return;
			emblaApi.scrollNext();
		};
		const interval = setInterval(autoplay, 2000);
		return () => {
			stopped = true;
			clearInterval(interval);
		};
	}, [emblaApi]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="relative w-full overflow-hidden py-4">
			<div className="embla" ref={emblaRef}>
				<div className="embla__container flex transition-all duration-300 ease-in-out" style={{ minWidth: 0 }}>
					{[...projects, ...projects].map((project, index) => (
						<a
							key={index}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`embla__slide flex-shrink-0 w-[320px] sm:w-full rounded-2xl shadow-xl p-0 overflow-hidden border hover:scale-[1.02] transition-transform bg-white dark:bg-[#23272f] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 mx-2 sm:mx-4 md:mx-6`}
							style={{ textDecoration: 'none', maxWidth: '340px', minWidth: '320px' }}
						>
							{/* Simulación de vista previa del proyecto */}
							<div className={`h-40 sm:h-48 flex items-center justify-center bg-gray-200 dark:bg-gray-800`}>
								<img
									src={project.image}
									alt={project.title}
									className="object-cover w-full h-full rounded-t-2xl"
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className="p-2 sm:p-4">
								<h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h3>
								<p className="text-base sm:text-lg">{project.description}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
