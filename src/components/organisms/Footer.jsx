// En tu archivo: /components/Footer.js
'use client';

import { dataSite, email } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Datos para los enlaces del footer ---
const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: 'pdf/AP.INTEGRADMIN.SEPTIEMBRE.2025.pdf' },
  { name: 'Terms of Service', href: 'pdf/TYC.INTEGRADMIN.SEPTIEMBRE.2025.pdf' },
];

const Footer = () => {
  // Para el nombre de la empresa, usamos una versión más corta y legible
  const companyName = 'Integradmin Spindola';

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
    <footer className='bg-zinc-800 text-white'>
      <motion.div
        className='container mx-auto px-4 py-16'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Columna 1: Empresa */}
          <motion.div
            variants={itemVariants}
            className='md:col-span-2 lg:col-span-1'
          >
            <h3 className='text-2xl font-semibold mb-4'>{companyName}</h3>
            <p className='text-gray-400 max-w-xs'>
              We provide a full range of services to meet our clients&#39;
              requirements and help their businesses grow.
            </p>
          </motion.div>

          {/* Columna 2: Enlaces */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Main Links</h4>
            <ul className='space-y-2'>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-stone-400 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Contacto */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Contact Us</h4>
            <address className='not-italic text-gray-400 space-y-2'>
              <p>{dataSite.address}</p>
              <p>
                <a
                  href='tel:+525512345678'
                  className='hover:text-stone-400 transition-colors'
                >
                  {dataSite.telephone}
                </a>
              </p>
              <p>
                <a
                  href='mailto:contact@integradmin.com'
                  className='hover:text-stone-400 transition-colors'
                >
                  {email}
                </a>
              </p>
            </address>
          </motion.div>

          {/* Columna 4: Suscripción y Pagos */}
          <motion.div variants={itemVariants}>
            <h4 className='font-bold text-lg mb-4'>Subscribe</h4>
            <p className='text-gray-400 mb-4'>
              Get the latest news and articles from us.
            </p>
            {/* <form className='flex flex-col gap-4'>
              <input
                type='email'
                placeholder='Email*'
                className='w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500'
              />

              <button
            
                type='submit'
                className='w-full py-2 bg-stone-600 text-white font-semibold rounded-md hover:bg-stone-700 transition-colors'
              >
                Subscribe
              </button>
            </form> */}
            {/* --- Logo de Visa y Mastercard --- */}
            <div className='mt-6'>
              <Image
                src='/images/visaMaster.png'
                alt='Visa and Mastercard accepted'
                width={100}
                height={30}
                objectFit='contain'
              />
            </div>
          </motion.div>
        </div>

        {/* --- Sub-Footer con Copyright --- */}
        <div className='mt-16 pt-8 border-t border-zinc-700 text-center text-gray-500 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} {companyName} S DE RL DE CV. All
            Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
