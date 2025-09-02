// En tu archivo: /components/AboutSection.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// Ícono opcional si prefieres no usar números
import { LuTrendingUp, LuUsers, LuGlobe } from 'react-icons/lu';

// --- Datos para las estadísticas clave ---
const statsData = [
  {
    value: '20+',
    title: 'Years of Combined Experience',
    description:
      'Our senior partners bring decades of cross-industry expertise to every project.',
  },
  {
    value: '95%',
    title: 'Client Success Rate',
    description:
      'We pride ourselves on delivering measurable results and fostering long-term partnerships.',
  },
  {
    value: '15+',
    title: 'Countries Served',
    description:
      'Providing strategic insights to businesses navigating the global marketplace.',
  },
];

const AboutSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

  return (
    <section id='about' className='py-20 md:py-28 bg-white'>
      <motion.div
        className='container mx-auto px-4 text-center max-w-4xl'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          variants={itemVariants}
          className='font-semibold text-yellow-500 mb-2'
        >
          About Stratagem
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'
        >
          Welcome to Stratagem Consulting Group
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className='text-lg text-gray-600 mb-12'
        >
          We are a premier management consulting firm dedicated to helping
          businesses navigate complexity, overcome challenges, and achieve
          sustainable growth. Our data-driven approach ensures that we deliver
          not just advice, but tangible results.
        </motion.p>

        {/* --- Grid de Estadísticas --- */}
        <motion.div
          variants={itemVariants}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          {statsData.map((stat, index) => (
            <div key={index} className='p-6 border border-gray-200 rounded-lg'>
              <p className='text-5xl font-bold text-yellow-500 mb-3'>
                {stat.value}
              </p>
              <h3 className='text-xl font-semibold text-slate-800 mb-2'>
                {stat.title}
              </h3>
              <p className='text-gray-500 text-sm'>{stat.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className='mt-12'>
          <Link href='#why-us'>
            <button className='px-8 py-3 bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-700 transition-colors'>
              Learn More About Us
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
