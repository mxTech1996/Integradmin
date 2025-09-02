// CÓDIGO COMPLETO PARA LA PRIMERA SECCIÓN
// Guárdalo en un archivo como: /components/Hero.js

'use client';

import { dataSite, email } from '@/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext } from 'react';
import { LuPhone, LuMail, LuTwitter, LuShoppingBag } from 'react-icons/lu';
import { CartContext } from 'ui-old-version';

// --- Componente de Barra de Navegación (Header) ---
// Incluye la barra superior de contacto y la navegación principal.
const Navbar = ({ withCart = false, textBlack = false, withAll = true }) => {
  const navLinks = [
    { title: 'About Us', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Products', href: '#products' },
    { title: 'Why Us', href: '#why-us' },
  ];
  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='absolute top-0 left-0 right-0 z-20'
    >
      {/* Top Bar */}
      <div className='bg-slate-900 bg-opacity-80 backdrop-blur-sm'>
        <div
          className={`container mx-auto px-4 h-10 flex justify-between items-center text-xs text-gray-300`}
        >
          <div className='flex gap-4 items-center'>
            <a
              href={`tel:${dataSite.telephone}`}
              className='flex items-center gap-2 hover:text-yellow-400'
            >
              <LuPhone size={14} />
              <span>{dataSite.telephone} </span>
            </a>
            <a
              href={`mailto:${email}`}
              className='hidden md:flex items-center gap-2 hover:text-yellow-400'
            >
              <LuMail size={14} />
              <span>{email} </span>
            </a>
          </div>
          <div className='flex gap-4 items-center'>
            {/* <LuTwitter className='cursor-pointer hover:text-yellow-400' />
            <LuLinkedin className='cursor-pointer hover:text-yellow-400' /> */}
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className='bg-white/10 backdrop-blur-sm'>
        <div
          className={`container mx-auto px-4 h-20 flex justify-between items-center ${
            textBlack ? 'text-black' : 'text-white'
          }`}
        >
          <Link href='/'>
            <div className='text-2xl font-bold'>Ibarra</div>
          </Link>
          {withAll && (
            <nav className='hidden lg:flex gap-8 text-sm'>
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className='hover:text-yellow-400 transition-colors'
                >
                  {link.title}
                </a>
              ))}
            </nav>
          )}
          {!withCart ? (
            <a
              href='/contact'
              className='px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors'
            >
              Get a Quote
            </a>
          ) : (
            <ShopButtonWithIcon />
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

const ShopButtonWithIcon = () => {
  const { products } = useContext(CartContext);
  return (
    <Link href='/my-cart'>
      <button className='relative flex items-center gap-2 px-4 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors'>
        <LuShoppingBag size={18} />
        <span>Shop Now</span>
        {products.length > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1'>
            {products.length}
          </span>
        )}
      </button>
    </Link>
  );
};
