// En tu archivo: /components/ApproachSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// Íconos para la lista de características
import { LuSearch, LuUsers, LuTarget } from 'react-icons/lu';

// --- Datos para las características ---
const featuresData = [
  {
    icon: <LuSearch size={20} />,
    text: 'We begin with a comprehensive analysis of your market, operations, and competitive landscape.',
  },
  {
    icon: <LuUsers size={20} />,
    text: 'We work alongside your team, ensuring strategies are co-created and practical to implement.',
  },
  {
    icon: <LuTarget size={20} />,
    text: 'Every solution is tied to clear, measurable key performance indicators for tracking success.',
  },
];

const ApproachSection = () => {
  // Variantes para animación escalonada del texto
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Variantes para la animación de las columnas
  const leftColumnVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const rightColumnVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className='py-20 md:py-28 bg-white overflow-x-hidden'>
      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* --- Columna de Imágenes (Izquierda) --- */}
        <motion.div
          className='relative h-[400px] md:h-[500px]'
          variants={leftColumnVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='absolute top-0 left-0 w-[80%] h-[85%] rounded-lg overflow-hidden shadow-2xl'>
            <Image
              src={dataSite.image_hero2}
              alt='Consultant presenting data'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='absolute bottom-0 right-0 w-[55%] h-[50%] rounded-lg overflow-hidden border-8 border-white shadow-2xl'>
            <Image
              src={dataSite.services[1].image}
              alt='Team analyzing charts on a tablet'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </motion.div>

        {/* --- Columna de Texto (Derecha) --- */}
        <motion.div
          variants={textContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={itemVariants}
            className='font-semibold text-yellow-500 mb-2'
          >
            Our Approach
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'
          >
            Data-Driven Strategies for Tangible Results.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-gray-600 mb-8 leading-relaxed'
          >
            Our methodology is rooted in rigorous analysis and a deep
            partnership with our clients. We transform raw data into powerful
            insights and actionable strategies that don&#39;t just sit on a
            shelf—they drive real-world performance.
          </motion.p>

          <motion.ul variants={itemVariants} className='space-y-4 mb-10'>
            {featuresData.map((feature, index) => (
              <li key={index} className='flex items-start gap-3'>
                <span className='mt-1 flex-shrink-0 text-yellow-500 bg-yellow-100 p-2 rounded-full'>
                  {feature.icon}
                </span>
                <span className='text-gray-600'>{feature.text}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants}>
            <Link href={'#services'}>
              <button className='px-8 py-3 bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-700 transition-colors'>
                Explore Our Services
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
