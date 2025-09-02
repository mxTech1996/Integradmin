// En tu archivo: /components/Footer.js
'use client';

import { dataSite, email } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Datos para los enlaces del footer ---
const footerLinks = {
  explore: [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
};

const Footer = () => {
  // Variantes para animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className='bg-slate-800 text-white'>
      <motion.div
        className='container mx-auto px-4 py-16'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Columna 1: Nombre de la empresa */}
          <motion.div variants={itemVariants} className='lg:col-span-1'>
            <h3 className='text-2xl font-bold mb-4'>Ibarra</h3>
            <p className='text-gray-300 max-w-xs'>
              A leading consultancy firm providing first-class management and
              strategic services across various industries.
            </p>
          </motion.div>

          {/* Columna 2: Explorar */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Explore</h4>
            <ul className='space-y-2'>
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-yellow-400 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Legal */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Legal</h4>
            <ul className='space-y-2'>
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-yellow-400 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4: Contacto y Pagos */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Get In Touch</h4>
            {/* --- Información de contacto añadida --- */}
            <address className='not-italic text-gray-300 space-y-2 mb-6'>
              <p>{dataSite.address}</p>
              <p>
                <a
                  href='mailto:contact@ibarra.consulting'
                  className='hover:text-yellow-400 transition-colors'
                >
                  {email}
                </a>
              </p>
            </address>

            {/* --- Logo de Visa y Mastercard --- */}
            <h4 className='font-bold text-lg mb-2'>Accepted Payments</h4>
            <div className='w-24 h-auto'>
              <Image
                src='/images/visaMaster.png'
                alt='Visa and Mastercard logos'
                width={100}
                height={30}
                objectFit='contain'
              />
            </div>
          </motion.div>
        </div>

        {/* --- Sub-Footer con Copyright --- */}
        <div className='mt-16 pt-8 border-t border-slate-700 text-center text-gray-400 text-sm'>
          {/* --- Nombre de la empresa actualizado --- */}
          <p>&copy; {new Date().getFullYear()} Ibarra. All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
