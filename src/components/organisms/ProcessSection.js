// En tu archivo: /components/ProcessSection.js
'use client';

import { motion } from 'framer-motion';

// --- Datos para la sección ---
const processSteps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description:
      'We begin with a deep-dive analysis of your business, challenges, and objectives to build a comprehensive understanding of your unique landscape.',
  },
  {
    number: '02',
    title: 'Strategy & Implementation',
    description:
      'Leveraging our insights, we co-create a tailored strategic roadmap and work with your team to ensure its seamless and effective implementation.',
  },
];

const ProcessSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
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
    <section className='py-20 md:py-28 bg-gray-900 text-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-stone-400 mb-2'>How We Work</p>
          <h2 className='text-4xl md:text-5xl font-bold'>Our Proven Process</h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='relative p-8 border-l-2 border-stone-700'
            >
              <div className='absolute top-4 -left-1 text-8xl font-bold text-white/5 -z-0'>
                {step.number}
              </div>
              <div className='relative z-10'>
                <h3 className='text-3xl font-bold text-stone-300 mb-4'>
                  {step.title}
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
