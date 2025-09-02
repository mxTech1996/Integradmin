// En tu archivo: /components/CallToActionSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CallToActionSection = () => {
  // Variantes para la animación de entrada
  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <section className='bg-orange-600 text-white py-20 md:py-28 overflow-hidden'>
      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* --- Columna de Texto (Izquierda) --- */}
        <motion.div
          variants={textVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className='font-semibold text-yellow-200 mb-2'>
            Ready to Transform?
          </p>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
            Get Professional Help with Your Next Business Challenge.
          </h2>
          <p className='text-gray-100 mb-8 leading-relaxed max-w-md'>
            Whether you&#39;re facing operational hurdles, seeking market
            expansion, or planning a strategic pivot, our expert consultants are
            ready to guide you.
          </p>
          <button className='px-8 py-3 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 transition-colors'>
            Schedule a Free Consultation
          </button>
        </motion.div>

        {/* --- Columna de Imagen (Derecha) --- */}
        <motion.div
          variants={imageVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          className='relative w-full h-[350px] md:h-[450px] flex justify-center lg:justify-end'
        >
          <Image
            src='/images/call.png'
            alt='Male business consultant smiling'
            width={450} // Ajusta el ancho según la imagen de referencia
            height={450} // Ajusta la altura según la imagen de referencia
            objectFit='contain' // Usa 'contain' para que la imagen no se recorte y se ajuste al espacio
            className='absolute bottom-0 right-0'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
