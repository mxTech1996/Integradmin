// En tu archivo: /components/AboutSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// Íconos para la lista de características y redes sociales
import { LuCheckCircle, LuTwitter, LuLinkedin } from 'react-icons/lu';

// --- Datos para la sección ---
const aboutFeatures = [
  'Comprehensive Data Analysis',
  'Tailored Strategic Roadmaps',
  'Hands-On Implementation Support',
  'Long-Term Partnership Focus',
];

const AboutSection = () => {
  // Variantes para animación escalonada del texto
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='py-20 md:py-28 bg-white overflow-hidden'>
      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* --- Columna de Imagen (Izquierda) --- */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='w-full h-auto'
        >
          <Image
            src='/images/consulting-about-us.jpg' // Reemplaza con tu imagen generada
            alt='Integradmin Spindola team collaborating'
            width={600}
            height={600}
            className='rounded-lg object-cover shadow-xl'
          />
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
            className='font-semibold text-stone-500 mb-2'
          >
            About Integradmin Spindola
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            Pioneering Excellence in Management Consulting.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-gray-600 mb-8 leading-relaxed'
          >
            Since our inception, our mission has been to serve as a true partner
            to our clients. We delve deep into the core of your business to
            understand your unique challenges, providing the clarity and
            strategic direction needed to navigate today&#39;s complex market.
          </motion.p>

          <motion.ul variants={itemVariants} className='space-y-3 mb-8'>
            {aboutFeatures.map((feature, index) => (
              <li key={index} className='flex items-center gap-3'>
                <LuCheckCircle
                  className='text-stone-500 flex-shrink-0'
                  size={20}
                />
                <span className='text-gray-700'>{feature}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={itemVariants}
            className='flex items-center gap-8'
          >
            <button className='px-8 py-3 bg-stone-600 text-white font-semibold rounded-md hover:bg-stone-700 transition-colors'>
              Read More
            </button>
            <div className='flex items-center gap-4 text-gray-400'>
              <a href='#' className='hover:text-stone-600 transition-colors'>
                <LuTwitter size={20} />
              </a>
              <a href='#' className='hover:text-stone-600 transition-colors'>
                <LuLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
