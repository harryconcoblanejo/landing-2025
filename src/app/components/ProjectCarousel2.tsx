// Carrusel 2: Swiper sencillo para cards de proyectos
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

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

export default function ProjectCarousel2() {
    return (
        <section className="w-full max-w-2xl mx-auto py-8">
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                {projects.map((project, idx) => (
                    <SwiperSlide key={idx}>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl shadow-lg border bg-white dark:bg-[#23272f] border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-[1.02] transition-transform"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="h-40 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={200}
                                    className="object-cover w-full h-full"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                                <p className="text-base text-gray-700 dark:text-gray-200">{project.description}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
