import Hero from '@/components/sections/Hero';
import Collections from '@/components/sections/Collections';
import NewArrivals from '@/components/sections/NewArrivals';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import BrandSection from '@/components/sections/BrandSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <NewArrivals />
      <FeaturedProducts />
      <BrandSection />
    </>
  );
}