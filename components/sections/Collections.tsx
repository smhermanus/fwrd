import Link from 'next/link';
import Image from 'next/image';
import { MoveRight, MoveLeft } from 'lucide-react';

const Collections = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Apparel Collection */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="relative h-52 lg:h-64 bg-gray-50 rounded-2xl">
              <Image
                src="/Apparel-collection.webp"
                alt="Apparel Collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-8 text-right right-8 text-[#E7E3D7]">
              <h3 className="text-3xl font-bold">APPAREL</h3>
              <h4 className="text-lg mb-4 text-[#E7E3D7]/80">COLLECTION</h4>
              <Link
                href="/category/apparel"
                className="text-sm font-medium underline hover:no-underline transition-all inline-flex items-center gap-1.5">
                <MoveLeft className="h-6 w-6 transform-gpu group-hover:animate-[pulse-scale_0.8s_ease-in-out_infinite]" />
                <span>VIEW NOW</span>
              </Link>
            </div>
          </div>

          {/* Headwear Collection */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="relative h-52 lg:h-64 bg-gray-50 rounded-2xl">
              <Image
                src="/Headwear-collection.webp"
                alt="Headwear Collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-8 left-8 text-[#393939]">
              <h3 className="text-3xl font-bold">HEADWEAR</h3>
              <h4 className="text-lg mb-4 text-[#393939]/70">COLLECTION</h4>
              <Link
                href="/category/headwear"
                className="text-sm font-medium underline hover:no-underline transition-all inline-flex items-center gap-1.5">
                <span>VIEW NOW</span>
                <MoveRight className="h-6 w-6 transform-gpu group-hover:animate-[pulse-scale_0.8s_ease-in-out_infinite]" />
              </Link>
            </div>
          </div>
        </div>
        {/* Brand description */}
        <div className="mt-16 mb-10 text-center text-2xl max-w-5xl mx-auto text-[#393939]">
          <span className="font-bold">FWRD</span> is a dynamic South African brand dedicated to delivering the latest trends in
          <span className="font-bold"> HEADWEAR</span> and
          <span className="font-bold"> APPAREL</span> specifically tailored for the Promotional Industry.
        </div>
      </div>
    </section>
  );
};

export default Collections;