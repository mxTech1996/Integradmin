// En tu archivo: /components/ServicesSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

// --- Datos para la sección ---
const eventsData = dataSite.services;

const ServicesSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='services' className='py-20 md:py-28 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col md:flex-row justify-between items-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white text-center md:text-left'>
            Services
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {eventsData.slice(0, 4).map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='group relative block h-80 rounded-lg overflow-hidden shadow-lg'
            >
              <div className='absolute inset-0'>
                <Image
                  src={event.image}
                  alt={event.title}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-500 ease-in-out group-hover:scale-105 opacity-40'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
              <div className='absolute inset-0 p-6 flex flex-col justify-between text-white'>
                <div>
                  {/* <p className='font-semibold text-stone-300'>{event.date}</p> */}
                  <p className='text-xs text-white'>{event.description}</p>
                </div>
                <div>
                  <h3 className='text-2xl font-bold'>{event.title}</h3>
                  <div className='mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-stone-300'>
                    <Link href={'/contact'}>
                      <span>Learn More</span>
                    </Link>
                    <LuArrowRight />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
