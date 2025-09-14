import Link from 'next/link';
import Image from 'next/image';
import { MoveRight, MoveLeft } from 'lucide-react';

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          FEATURED PRODUCTS
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4">

          {/* Tank Top */}
          <Link href="/product/tank-top" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/Activ-Vest-Navy.webp"
                  alt="Tank Top"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>

          {/* Activ Vest */}
          <div className="bg-[#393939] text-white p-8 h-64 flex flex-col justify-center items-center rounded-lg">
            <h4 className="text-lg font-light text-[#E7E3D7]/80">JUST ARRIVED</h4>
            <h3 className="text-3xl font-bold mb-8">ACTIV VEST</h3>
            <Link href="/product/activ-vest" className="group text-sm underline inline-flex items-center gap-1.5">
              <MoveLeft className="h-6 w-6 transform-gpu group-hover:animate-[pulse-scale_0.8s_ease-in-out_infinite]" />
              <span>VIEW NOW</span>
            </Link>
          </div>

          {/* Classic T-Shirt */}
          <div className="col-span-2 lg:row-span-2 relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/feature-image-colour.webp"
                alt="Classic T-Shirt"
                fill
                className="object-cover opacity-100"
              />
            </div>
            <div className="relative p-12 text-center flex flex-col justify-end h-full">
              <h4 className="text-lg font-light text-[#E7E3D7]/80">JUST ARRIVED</h4>
              <h3 className="text-4xl font-bold mb-8">CLASSIC T-SHIRT</h3>
              <Link href="/product/classic-t-shirt" className="group text-sm underline inline-flex items-center gap-1.5">
                <MoveRight className="h-6 w-6 transform-gpu group-hover:animate-[pulse-scale_0.8s_ease-in-out_infinite]" />
                <span>VIEW NOW</span>
              </Link>
            </div>
          </div>

          {/* Miami Cap */}
          <div className="bg-[#393939] text-white p-8 h-64 flex flex-col justify-center items-center rounded-lg">
          <h4 className="text-lg font-light text-[#E7E3D7]/80">JUST ARRIVED</h4>
          <h3 className="text-3xl font-bold mb-8">MIAMI CAP</h3>
            <Link href="/product/miami-cap" className="group text-sm underline inline-flex items-center gap-1.5">
              <span>VIEW NOW</span>
              <MoveRight className="h-6 w-6 transform-gpu group-hover:animate-[pulse-scale_0.8s_ease-in-out_infinite]" />
            </Link>
          </div>

          {/* Green Cap */}
          <Link href="/product/green-cap" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/Miami-Cap-Mint-Angle.jpg"
                  alt="Green Cap"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;