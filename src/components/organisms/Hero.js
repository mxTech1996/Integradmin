// CÓDIGO COMPLETO PARA LA PRIMERA SECCIÓN
// Guárdalo en un archivo como: /components/Hero.js

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './Navbar';
import { dataSite } from '@/data';
import Link from 'next/link';

// --- Componente Principal de la Sección Hero ---
const HeroSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className='relative h-screen w-full flex items-center bg-slate-900'>
      {/* Imagen de fondo */}
      <div className='absolute inset-0 z-0 opacity-40'>
        <Image
          src={dataSite.image_hero}
          layout='fill'
          objectFit='cover'
          quality={100}
          priority
          alt='' // Decorative background image
        />
      </div>

      {/* Superposición geométrica naranja */}
      <div
        className='absolute top-0 left-0 h-full w-full bg-orange-600 z-0'
        style={{ clipPath: 'polygon(0 0, 65% 0, 35% 100%, 0% 100%)' }}
      ></div>

      <Navbar />

      {/* Contenido Central */}
      <div className='relative z-10 container mx-auto px-4'>
        <motion.div
          className='max-w-2xl text-white'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.p
            variants={itemVariants}
            className='font-semibold text-yellow-400 mb-2'
          >
            Driving Growth, Inspiring Change
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className='text-5xl md:text-7xl font-bold leading-tight mb-6'
          >
            Strategic Solutions for Modern Business.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-lg text-gray-200 mb-8'
          >
            We partner with leaders to transform organizations, build
            capabilities, and drive sustainable growth. Unlock your
            company&#39;s full potential with Stratagem.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className='flex gap-4 items-center'
          >
            <Link href='#products'>
              <button className='px-8 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors'>
                Discover Our Products
              </button>
            </Link>
            <a
              href='/contact'
              className='font-semibold hover:text-yellow-400 transition-colors'
            >
              Schedule a Consultation &rarr;
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
