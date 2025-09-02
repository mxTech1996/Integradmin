// In your file: /components/WhyChooseUsSection.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// Icons for each feature
import { FaBrain, FaHandshake, FaTrophy } from 'react-icons/fa';
// alternative icons

// --- Data for the features ---
const featuresData = [
  {
    icon: <FaBrain size={40} />,
    title: 'Deep Strategic Insight',
    description:
      'We go beyond surface-level analysis to uncover the core drivers of your business, providing insights that lead to impactful decisions.',
  },
  {
    icon: <FaHandshake size={40} />,
    title: 'A True Partnership',
    description:
      'We integrate with your team, acting as a trusted extension of your business to ensure strategies are planned and executed effectively.',
  },
  {
    icon: <FaTrophy size={40} />,
    title: 'Focus on Measurable Results',
    description:
      'Our success is measured by yours. We focus on delivering tangible, quantifiable outcomes that drive real growth and return on investment.',
  },
];

const WhyChooseUsSection = () => {
  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id='why-us' className='py-20 md:py-28 bg-white'>
      <div className='container mx-auto px-4 text-center'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='max-w-3xl mx-auto'
        >
          <p className='font-semibold text-stone-500 mb-2'>
            Our Core Advantages
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Why Choose Us
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='p-8 border border-gray-200/80 rounded-lg'
            >
              <div className='flex justify-center text-stone-600 mb-5'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16'
        >
          <Link href={'/contact'}>
            <button className='px-8 py-3 bg-stone-600 text-white font-semibold rounded-md hover:bg-stone-700 transition-colors'>
              Request a Quote
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
