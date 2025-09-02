'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { LuShoppingBag } from 'react-icons/lu';
import { CartContext } from 'ui-old-version';

// --- Componente de Barra de Navegación (Header) ---
const NavBar = ({ withAll = true, withCart = false, textBlack = false }) => {
  const router = useRouter();
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Why Choose Us', href: '#why-us' },
  ];

  // Para el nombre de la empresa, usamos una versión más corta y legible
  const companyName = 'Integradmin Spindola';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='absolute top-0 left-0 right-0 z-20'
    >
      <div className='container mx-auto px-4'>
        <div className='h-24 flex justify-between items-center border-b border-gray-700/50'>
          <div
            className={`text-2xl font-semibold ${
              textBlack ? 'text-black' : 'text-white'
            }`}
          >
            {companyName}
          </div>
          {withAll && (
            <nav className='hidden lg:flex gap-10 text-sm text-gray-200'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='hover:text-white transition-colors'
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}
          <div className='flex items-center gap-6'>
            {withCart ? (
              <ButtonCart />
            ) : (
              <button
                onClick={() => router.push('/contact')}
                className='px-6 py-2 bg-stone-600 text-white font-semibold rounded-md hover:bg-stone-700 transition-colors'
              >
                Request a Quote
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};
export default NavBar;

const ButtonCart = () => {
  const { products } = useContext(CartContext);
  const router = useRouter();

  return (
    <button className='relative' onClick={() => router.push('/my-cart')}>
      <LuShoppingBag className='text-2xl text-yellow-900' />
      <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1 rounded-full'>
        {products.length}
      </span>
    </button>
  );
};
