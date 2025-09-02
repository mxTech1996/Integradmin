// En tu archivo: /components/ProductsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { LuArrowRight } from 'react-icons/lu';
import { CartContext } from 'ui-old-version';

// --- Datos para la sección ---
const products = dataSite.products;

const ProductsSection = ({ isHome = true }) => {
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);
  const navigation = useRouter();
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
    <section id='products' className='py-20 md:py-28 bg-slate-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col md:flex-row justify-between items-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white text-center md:text-left'>
            Our Products
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.slice(0, 8).map((item, index) => {
            const isInCart = validateProductInCart(item.id);
            const handleClick = () => {
              if (isHome) {
                navigation.push('/contact');
              }
              handleAddOrRemoveProduct(item.id);
            };

            return (
              <motion.a
                href='#'
                key={index}
                variants={itemVariants}
                className='group relative block h-96 rounded-lg overflow-hidden shadow-lg'
              >
                <div className='absolute inset-0'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout='fill'
                    objectFit='cover'
                    className='transition-transform duration-500 ease-in-out group-hover:scale-105'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
                <div className='absolute bottom-0 left-0 p-6 text-white'>
                  <p className='text-sm font-semibold text-yellow-400'>
                    {item.description}
                  </p>
                  <h3 className='text-2xl font-bold mt-2'>{item.name}</h3>
                  {/* price */}
                  <p className='text-lg font-semibold text-yellow-400'>
                    {item.price} USD
                  </p>
                  {/* Button add to cart */}

                  <div className='mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {/* modify classname to red button when add to cart */}

                    <button
                      onClick={handleClick}
                      className={`px-4 py-2 ${
                        isInCart ? 'bg-red-500' : 'bg-yellow-500'
                      } text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors flex items-center gap-2`}
                    >
                      {isHome
                        ? 'Get a quote'
                        : isInCart
                        ? 'Remove from Cart'
                        : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
