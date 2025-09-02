// En tu archivo: /components/TestimonialsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuStar } from 'react-icons/lu';

// --- Data para la sección de testimonios (la que me proporcionaste) ---
const testimonialsData = dataSite.references;

const TestimonialsSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id='testimonials'
      className='relative py-20 md:py-28 bg-stone-200 overflow-hidden'
    >
      {/* Fondo de imagen difuminado como en la referencia */}
      <div className='absolute inset-0 z-0 opacity-40'>
        <Image
          src={dataSite.image_hero2}
          alt='Person working on laptop in background'
          layout='fill'
          objectFit='cover'
          quality={80}
        />
      </div>
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {/* Símbolo decorativo como en la imagen */}
          <div className='flex justify-center mb-6 text-stone-600'>
            <svg
              width='40'
              height='10'
              viewBox='0 0 40 10'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 5L5 0L10 5L5 10L0 5Z' />
              <path d='M15 5L20 0L25 5L20 10L15 5Z' />
              <path d='M30 5L35 0L40 5L35 10L30 5Z' />
            </svg>
          </div>
          <p className='text-xl md:text-2xl font-semibold text-gray-800 mb-12'>
            We love to receive such feedback from our customers!
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-white p-8 rounded-lg shadow-md text-left flex flex-col h-full'
            >
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                {testimonial.name.split(',')[0]} {/* Solo el nombre */}
              </h3>
              <p className='text-stone-600 text-sm mb-4'>
                {testimonial.name.split(',')[1]} {/* Cargo */}
              </p>
              <p className='text-gray-700 italic flex-grow mb-6 leading-relaxed'>
                &quot;{testimonial.description}&quot;
              </p>

              {/* Rating de estrellas */}
              <div className='flex items-center text-yellow-500 text-lg mt-auto'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <LuStar key={i} fill='currentColor' stroke='none' />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <LuStar key={i} stroke='currentColor' fill='none' />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16'
        >
          <button className='px-8 py-3 bg-stone-600 text-white font-semibold rounded-md hover:bg-stone-700 transition-colors'>
            Contact Us
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
