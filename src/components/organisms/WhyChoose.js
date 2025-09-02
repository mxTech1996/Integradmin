// En tu archivo: /components/WhyChooseUsSection.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// --- Datos para la sección, incluyendo una imagen para cada característica ---
const featuresData = [
  {
    id: 1,
    title: '01. Bespoke Strategy & Planning',
    description:
      'We craft custom strategies tailored to your unique market position and long-term objectives, ensuring a clear roadmap to success.',
    image: '/images/why1.png', // Reemplaza con tus imágenes
  },
  {
    id: 2,
    title: '02. Seamless Implementation',
    description:
      'Our team works hand-in-hand with yours to integrate new processes and ensure smooth, effective execution with minimal disruption.',
    image: '/images/why2.png',
  },
  {
    id: 3,
    title: '03. Performance & Growth Tracking',
    description:
      'We establish clear KPIs and analytics to measure impact, optimize performance, and drive continuous, data-informed growth.',
    image: '/images/why3.png',
  },
];

const WhyChooseUsSection = () => {
  // Estado para controlar qué característica (y qué imagen) está activa
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id='why-us' className='py-20 md:py-28 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-yellow-500 mb-2'>Why Choose Us</p>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900'>
            We Create Value at Every Step
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* --- Columna de Texto Interactivo (Izquierda) --- */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='flex flex-col gap-4'
          >
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-yellow-50 shadow-lg'
                    : 'bg-transparent'
                }`}
              >
                <h3
                  className={`text-2xl font-bold transition-colors ${
                    activeIndex === index ? 'text-yellow-600' : 'text-slate-800'
                  }`}
                >
                  {feature.title}
                </h3>
                <p className='mt-2 text-gray-600'>{feature.description}</p>
              </div>
            ))}
            <div className='mt-6'>
              <Link href='/contact'>
                <button className='px-8 py-3 bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-700 transition-colors'>
                  Schedule a Discovery Call
                </button>
              </Link>
            </div>
          </motion.div>

          {/* --- Columna de Imagen Animada (Derecha) --- */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='relative w-full h-[450px] rounded-lg overflow-hidden'
          >
            <AnimatePresence>
              <motion.div
                key={activeIndex} // La clave cambia, activando la animación
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='absolute inset-0'
              >
                <Image
                  src={featuresData[activeIndex].image}
                  alt={featuresData[activeIndex].title}
                  layout='fill'
                  objectFit='cover'
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
