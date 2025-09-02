'use client';

import Navbar from '../../components/organisms/Navbar';
import Products from '@/components/organisms/ProductsSection';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div>
      <Navbar textBlack={true} withAll={false} withCart={true} />
      <div className='mt-40'>
        <Products isHome={false} />
      </div>
      <Footer />
    </div>
  );
}
