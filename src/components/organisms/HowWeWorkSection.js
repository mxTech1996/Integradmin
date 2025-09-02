// En tu archivo: /components/HowWeWorkSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Datos para la sección ---
const workProcessData = [
  {
    step: '01',
    title: 'Consultation & Goal Setting',
    description:
      'We start by listening. Our initial phase is dedicated to understanding your vision and defining clear, ambitious goals together.',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description:
      'Leveraging data and our expertise, we develop a bespoke strategic plan and validate this roadmap with your key stakeholders.',
  },
  {
    step: '03',
    title: 'Implementation & Review',
    description:
      'We guide the execution of the strategy, providing hands-on support and establishing metrics to track progress and ensure lasting results.',
  },
];

const HowWeWorkSection = () => {
  // Variantes para animación escalonada
  const textContainerVariants = {
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
    <section className='py-20 md:py-28 bg-white overflow-hidden'>
      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* --- Columna de Texto (Izquierda) --- */}
        <motion.div
          variants={textContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className='font-semibold text-stone-500 mb-2'
          >
            How We Work
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            A Collaborative Path to Success
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-gray-600 mb-10 leading-relaxed'
          >
            Our process is built on a foundation of partnership and
            transparency. We guide you through each phase, ensuring you are
            informed, involved, and confident in every decision we make
            together.
          </motion.p>

          <motion.div variants={itemVariants} className='space-y-8'>
            {workProcessData.map((process, index) => (
              <div key={index} className='flex items-start gap-6'>
                <div className='text-4xl font-bold text-gray-200'>
                  {process.step}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-800'>
                    {process.title}
                  </h3>
                  <p className='text-gray-500 mt-1'>{process.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- Columna de Imagen (Derecha) --- */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='w-full h-auto'
        >
          <Image
            src='/images/wework.png'
            alt='Consultant working on a tablet'
            width={600}
            height={700}
            className='rounded-lg object-cover shadow-xl'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
