// CÓDIGO COMPLETO PARA LA PRIMERA SECCIÓN
// Guárdalo en un archivo como: /components/Hero.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavBar from './Navbar';
import { dataSite } from '@/data';

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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='relative w-full min-h-screen bg-gray-900 text-white flex items-center'>
      <NavBar />
      <div className='container mx-auto px-4 pt-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Columna de Texto (Izquierda) */}
          <motion.div
            className='text-center lg:text-left'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className='font-semibold text-stone-400 mb-2'
            >
              Strategic Management Consulting
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className='text-5xl md:text-6xl font-bold leading-tight mb-6'
            >
              Your Vision, Executed with Precision.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className='text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0'
            >
              We provide tailored management solutions that streamline
              operations, foster innovation, and drive sustainable growth for
              your enterprise.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className='px-8 py-3 bg-stone-600 text-white font-semibold rounded-md hover:bg-stone-700 transition-colors'>
                Explore Our Solutions
              </button>
            </motion.div>
          </motion.div>

          {/* Columna de Imagen (Derecha) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='hidden lg:block w-full h-[60vh] max-h-[500px] relative'
          >
            <Image
              src={dataSite.image_hero}
              alt='Strategic planning session'
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
