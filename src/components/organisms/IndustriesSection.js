// In your file: /components/IndustriesSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Icon for the list
import { LuCheckCircle } from 'react-icons/lu';

// --- Data for the section ---
const industriesData = [
  'Technology & SaaS',
  'Finance & Banking',
  'Healthcare & Biotech',
  'Manufacturing & Supply Chain',
];

const IndustriesSection = () => {
  // Animation variants
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
        {/* --- Text Column (Left) --- */}
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
            Who We Serve
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'
          >
            Partnering with Diverse Industries.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-gray-600 mb-8 leading-relaxed'
          >
            Our strategic principles are adaptable and have been successfully
            applied across a wide range of sectors. We empower organizations of
            all sizes—from disruptive startups to established Fortune 500
            companies—to achieve market leadership.
          </motion.p>

          <motion.ul
            variants={itemVariants}
            className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10'
          >
            {industriesData.map((industry, index) => (
              <li key={index} className='flex items-center gap-3'>
                <LuCheckCircle
                  className='text-yellow-500 flex-shrink-0'
                  size={20}
                />
                <span className='text-gray-700 font-medium'>{industry}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants}>
            {/* <button className='px-8 py-3 bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-700 transition-colors'>
              View Our Case Studies
            </button> */}
          </motion.div>
        </motion.div>

        {/* --- Image Collage Column (Right) --- */}
        <motion.div
          className='relative h-[400px] md:h-[500px]'
          variants={rightColumnVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='absolute top-0 right-0 w-[80%] h-[85%] rounded-lg overflow-hidden shadow-2xl'>
            <Image
              src={dataSite.services[0].image}
              alt='Modern manufacturing facility'
              layout='fill'
              objectFit='cover'
              className='grayscale'
            />
          </div>
          <div className='absolute bottom-0 left-0 w-[55%] h-[50%] rounded-lg overflow-hidden border-8 border-white shadow-2xl'>
            <Image
              src={dataSite.services[2].image}
              alt='Scientists in a lab'
              layout='fill'
              objectFit='cover'
              className='grayscale'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
