'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const dashboardSlides = [
	{
		image: '/capturas htrace/Captura1.PNG',
		title: {
			es: 'Vista general',
			en: 'Overview',
		},
		desc: {
			es: 'Panel principal con resumen de métricas clave y accesos rápidos, filtros de informes, comparacion de graficos y descarga de pdf y csv.',
			en: 'Main panel with summary of key metrics and quick access, report filters, chart comparison, and PDF/CSV download.',
		},
	},
	{
		image: '/capturas htrace/Captura2.PNG',
		title: {
			es: 'En tránsito',
			en: 'In Transit',
		},
		desc: {
			es: 'Sección de envíos en tiempo real, checkpoints, temperaturas y estado de las muestras',
			en: 'Real-time shipments section, checkpoints, temperatures, and sample status',
		},
	},
	{
		image: '/capturas htrace/Captura3.PNG',
		title: {
			es: 'Reportes',
			en: 'Reports',
		},
		desc: {
			es: 'Visualización de reportes y exportación de datos.',
			en: 'Reports visualization and data export.',
		},
	},
	{
		image: '/capturas htrace/captura 3.PNG',
		title: {
			es: 'Panel de configuración',
			en: 'Settings Panel',
		},
		desc: {
			es: 'Seccón de configuración del sistema, gestión de usuarios, roles, permisos y calibracón de dispositivos.',
			en: 'System settings section, user management, roles, permissions, and device calibration.',
		},
	},
];

export default function DashboardCarousel() {
	const { language } = useLanguage();
	return (
		<section className="w-full max-w-2xl mx-auto py-10 px-2 rounded-2xl bg-gradient-to-b from-slate-950 via-blue-200/90 to-blue-50/90 dark:from-[#1e293b] dark:via-[#23272f] dark:to-[#181e29] shadow-lg dark:border-gray-800 mt-8">
			<h2 className="text-2xl font-bold mb-6 text-center text-gray-100 dark:text-white">
				{language === 'es' ? 'Dashboard - Detalle' : 'Dashboard - Details'}
			</h2>
			<Swiper
				spaceBetween={24}
				slidesPerView={1}
				pagination={{ clickable: true, el: '.swiper-pagination-dashboard' }}
				modules={[Pagination]}
			>
				{dashboardSlides.map((slide, idx) => (
					<SwiperSlide key={idx}>
						<div className="rounded-xl shadow-lg border bg-white dark:bg-[#23272f] border-gray-200 dark:border-gray-700 overflow-hidden">
							<div className="h-56 flex items-center justify-center bg-gray-200 dark:bg-gray-800 relative">
								<Image
									src={slide.image}
									alt={slide.title[language]}
									width={600}
									height={300}
									className="object-cover w-full h-full rounded-t-xl"
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className="p-4">
								<h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
									{slide.title[language]}
								</h3>
								<p className="text-base text-gray-700 dark:text-gray-200">
									{slide.desc[language]}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="swiper-pagination-dashboard flex justify-center mt-8" />
		</section>
	);
}
