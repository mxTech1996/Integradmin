// En tu archivo: /components/SubscribeSection.js
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    // Fondo texturizado/color beige claro como en la referencia
    <section className='py-20 md:py-28 bg-stone-200'>
      <div className='container mx-auto px-4'>
        <motion.div
          variants={cardVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          className='max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12 text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Get Expert Insights, Delivered to Your Inbox.
          </h2>
          <p className='text-gray-600 mb-8'>
            Subscribe to our newsletter for the latest analysis, industry
            trends, and strategic advice from our experts.
          </p>

          <form
            className='flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto'
            onSubmit={(e) => {
              e.preventDefault();
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                setError('Please enter a valid email address.');
                return;
              }
              setError('');
              alert('Subscribed!');
            }}
          >
            <input
              type='email'
              placeholder='Your Email Address'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-5 py-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all'
            />
            <button
              type='submit'
              className='flex-shrink-0 px-8 py-3 bg-stone-600 text-white font-semibold rounded-md hover:bg-stone-700 transition-colors'
            >
              Subscribe
            </button>
          </form>
          {error && <p className='text-red-500 mt-2'>{error}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeSection;
