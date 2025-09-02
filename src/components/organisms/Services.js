// En tu archivo: /components/ServicesSection.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// Íconos para los paquetes y las características
import { LuRocket, LuTrendingUp, LuGlobe, LuCheck } from 'react-icons/lu';

// --- Datos para los paquetes de servicios ---
const servicesData = [
  {
    icon: <LuRocket size={32} />,
    title: 'Startup Ignition Package',
    description:
      'Perfect for new ventures to establish a solid market entry strategy.',
    price: 'Starting at $5,000',
    features: [
      'Business Plan Development',
      'Market Research & Analysis',
      'Financial Modeling',
      'Investor Pitch Deck Creation',
    ],
    buttonText: 'Get Started',
    isFeatured: false,
  },
  {
    icon: <LuTrendingUp size={32} />,
    title: 'Growth Accelerator Program',
    description:
      'For established businesses aiming to scale operations and expand their reach.',
    price: '$7,500 / month',
    features: [
      'Operational Efficiency Audit',
      'Supply Chain Optimization',
      'Digital Transformation Strategy',
      'Performance Dashboards & KPIs',
    ],
    buttonText: 'Choose Plan',
    isFeatured: true, // Esta es la tarjeta destacada
  },
  {
    icon: <LuGlobe size={32} />,
    title: 'Enterprise Transformation',
    description:
      'A comprehensive partnership for large corporations navigating significant change.',
    price: 'Custom Quote',
    features: [
      'Corporate Restructuring',
      'Change Management',
      'Merger & Acquisition Advisory',
      'Digital Ecosystem Architecture',
    ],
    buttonText: 'Request a Quote',
    isFeatured: false,
  },
];

const ServicesSection = () => {
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
    <section id='services' className='py-20 md:py-28 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-yellow-500 mb-2'>Our Services</p>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900'>
            Our Popular Consulting Packages
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`flex flex-col rounded-xl shadow-lg transition-all duration-300 ${
                service.isFeatured
                  ? 'bg-slate-800 text-white border-2 border-yellow-400'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              <div className='p-8 flex-grow'>
                <div
                  className={`mb-4 ${
                    service.isFeatured ? 'text-yellow-400' : 'text-yellow-500'
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className='text-2xl font-bold mb-3'>{service.title}</h3>
                <p
                  className={`mb-6 ${
                    service.isFeatured ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>
                {/* <p className='text-4xl font-bold mb-6'>{service.price}</p> */}
                <ul className='space-y-3'>
                  {service.features.map((feature, i) => (
                    <li key={i} className='flex items-center gap-3'>
                      <LuCheck
                        className={`flex-shrink-0 ${
                          service.isFeatured
                            ? 'text-yellow-400'
                            : 'text-yellow-500'
                        }`}
                      />
                      <span
                        className={`${
                          service.isFeatured ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='p-8 pt-0'>
                <Link href={'/contact'}>
                  <button
                    className={`w-full px-6 py-3 font-semibold rounded-md transition-colors duration-300 ${
                      service.isFeatured
                        ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    {service.buttonText}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
