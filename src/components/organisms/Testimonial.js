// En tu archivo: /components/TestimonialsSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuQuote } from 'react-icons/lu';

// Importa los componentes y estilos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { dataSite } from '@/data';

// --- Datos para la sección ---
const testimonialsData = dataSite.references;

const TestimonialsSection = () => {
  return (
    <section className='py-20 md:py-28 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <p className='font-semibold text-yellow-500 mb-2'>
            What Our Clients Say
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900'>
            Real Stories, Real Results
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* --- Carrusel de Testimonios --- */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={30} // Espacio entre diapositivas
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              // Muestra 2 tarjetas en pantallas medianas y grandes
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className='pb-12' // Padding bottom para la paginación
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='bg-gray-50 rounded-lg p-8 h-full flex flex-col'>
                  <LuQuote className='text-yellow-400 text-4xl mb-4' />
                  <p className='text-gray-600 italic leading-relaxed flex-grow'>
                    &quot;{testimonial.description}&quot;
                  </p>
                  <div className='mt-6 flex items-center gap-4'>
                    {/* <Image
                      src={testimonial.image}
                      alt={`Headshot of ${testimonial.name}`}
                      width={60}
                      height={60}
                      className='rounded-full object-cover'
                    /> */}
                    <div>
                      <p className='font-bold text-slate-800'>
                        {testimonial.name}
                      </p>
                      {/* <p className='text-gray-500 text-sm'>
                        {testimonial.title}
                      </p> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
