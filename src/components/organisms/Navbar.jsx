'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuTwitter, LuLinkedin } from 'react-icons/lu';

// --- Componente de Barra de Navegación (Header) ---
const NavBar = () => {
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
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
          <div className='text-2xl font-semibold text-white'>{companyName}</div>
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
          <div className='flex items-center gap-6'>
            <div className='hidden md:flex items-center gap-4 text-gray-300'>
              <LuTwitter
                size={18}
                className='cursor-pointer hover:text-white'
              />
              <LuLinkedin
                size={18}
                className='cursor-pointer hover:text-white'
              />
            </div>
            <button className='px-6 py-2 bg-stone-600 text-white font-semibold rounded-md hover:bg-stone-700 transition-colors'>
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
export default NavBar;
