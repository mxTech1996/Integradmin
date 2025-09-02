'use client';

import HeroSection from '@/components/organisms/Hero';
import AboutSection from '@/components/organisms/About';
import WhyChooseUs from '@/components/organisms/WhyChoose';
import Testimonials from '@/components/organisms/Testimonial';
import Footer from '@/components/organisms/Footer';
import ProcessSection from '@/components/organisms/ProcessSection';
import HowWeWorkSection from '@/components/organisms/HowWeWorkSection';
import ServicesSection from '@/components/organisms/Services';
import CallToActionSection from '@/components/organisms/CalltoAction';
import ProductsSection from '@/components/organisms/ProductsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ProcessSection />
      <CallToActionSection />
      <ProductsSection />
      <HowWeWorkSection />
      <ServicesSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
