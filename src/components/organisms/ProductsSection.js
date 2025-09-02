// En tu archivo: /components/ProductsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { CartContext } from 'ui-old-version';

// --- DATA: La información de productos que proporcionaste ---
const productsData = dataSite.products;

const ProductsSection = ({ isHome = true }) => {
  const router = useRouter();
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // --- Variantes para animar el contenido de la tarjeta ---
  const contentVariants = {
    rest: { y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { y: -20, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const descriptionVariants = {
    rest: { opacity: 0, y: 10, transition: { duration: 0.3, ease: 'easeOut' } },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 },
    },
  };

  return (
    <section id='products' className='py-20 md:py-28 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-5xl font-bold text-white text-center mb-16'
        >
          Our Digital Products
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {productsData
            .filter((product) => parseFloat(product.price) > 50)
            .map((product) => {
              const handleClick = () => {
                if (isHome) {
                  router.push('/contact');
                  return;
                }
                handleAddOrRemoveProduct(product.id);
              };

              const isInCart = validateProductInCart(product.id);
              return (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  initial='rest'
                  whileHover='hover'
                  animate='rest'
                  className='group relative h-96 rounded-lg overflow-hidden shadow-lg'
                >
                  {/* Imagen de Fondo con animación de zoom */}
                  <div className='absolute inset-0'>
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout='fill'
                      objectFit='cover'
                      className='transition-transform duration-500 ease-in-out group-hover:scale-105'
                    />
                  </div>
                  {/* --- CAMBIO: Overlay oscuro más pronunciado para legibilidad --- */}
                  <div className='absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-400' />

                  {/* Contenido de la tarjeta */}
                  <div className='relative h-full flex flex-col justify-between p-6 text-white'>
                    <div>
                      <p className='font-bold text-xl text-white'>
                        ${product.price} USD
                      </p>
                    </div>

                    {/* --- Contenido central que se anima al pasar el mouse --- */}
                    <motion.div
                      variants={contentVariants}
                      className='text-center'
                    >
                      <h3 className='text-3xl font-bold leading-tight'>
                        {product.name}
                      </h3>
                      {/* --- CAMBIO: Descripción animada que aparece al pasar el mouse --- */}
                      <motion.p
                        variants={descriptionVariants}
                        className='mt-2 text-sm text-gray-300 line-clamp-2'
                      >
                        {product.description}
                      </motion.p>
                    </motion.div>

                    <div>
                      <button
                        className={`w-full mt-4 px-6 py-3 border border-white/50 ${
                          isInCart ? 'bg-red-500' : 'bg-transparent'
                        } text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300`}
                        onClick={handleClick}
                      >
                        {isHome
                          ? 'Get a quote'
                          : isInCart
                          ? 'Remove from cart'
                          : 'Add to cart'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
      {!isHome && (
        <div className='container mx-auto px-4 mt-10'>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='text-4xl md:text-5xl font-bold text-white text-center mb-16'
          >
            Our Additionals Products
          </motion.h2>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
          >
            {productsData
              .filter((product) => parseFloat(product.price) < 50)
              .map((product) => {
                const handleClick = () => {
                  if (isHome) {
                    router.push('/contact');
                    return;
                  }
                  handleAddOrRemoveProduct(product.id);
                };

                const isInCart = validateProductInCart(product.id);
                return (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    initial='rest'
                    whileHover='hover'
                    animate='rest'
                    className='group relative h-96 rounded-lg overflow-hidden shadow-lg'
                  >
                    {/* Imagen de Fondo con animación de zoom */}
                    <div className='absolute inset-0'>
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout='fill'
                        objectFit='cover'
                        className='transition-transform duration-500 ease-in-out group-hover:scale-105'
                      />
                    </div>
                    {/* --- CAMBIO: Overlay oscuro más pronunciado para legibilidad --- */}
                    <div className='absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-400' />

                    {/* Contenido de la tarjeta */}
                    <div className='relative h-full flex flex-col justify-between p-6 text-white'>
                      <div>
                        <p className='font-bold text-xl text-white'>
                          ${product.price} USD
                        </p>
                      </div>

                      {/* --- Contenido central que se anima al pasar el mouse --- */}
                      <motion.div
                        variants={contentVariants}
                        className='text-center'
                      >
                        <h3 className='text-3xl font-bold leading-tight'>
                          {product.name}
                        </h3>
                        {/* --- CAMBIO: Descripción animada que aparece al pasar el mouse --- */}
                        <motion.p
                          variants={descriptionVariants}
                          className='mt-2 text-sm text-gray-300 line-clamp-2'
                        >
                          {product.description}
                        </motion.p>
                      </motion.div>

                      <div>
                        <button
                          className={`w-full mt-4 px-6 py-3 border border-white/50 ${
                            isInCart ? 'bg-red-500' : 'bg-transparent'
                          } text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300`}
                          onClick={handleClick}
                        >
                          {isHome
                            ? 'Get a quote'
                            : isInCart
                            ? 'Remove from cart'
                            : 'Add to cart'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
