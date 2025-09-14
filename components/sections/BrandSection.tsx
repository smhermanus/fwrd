import Image from 'next/image';
import Link from 'next/link';

const BrandSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-[3fr_2fr] gap-4 items-stretch">
          {/* Red Hoodies Image */}
          <div className="relative h-full">
            <div className="relative h-full rounded-lg overflow-hidden">
              <Image
                src="/Boston-Hoodie-image.jpg"
                alt="Red hoodies couple"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Brand Information */}
          <div className="space-y-4">
            <div className="bg-[#393939] text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">REDEFINING YOUR BRAND</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                We specialise in providing brands and retailers with a brand-forward, premium quality product that will 
                elevate your brand. FWRD is the only promo brand that has chosen to not offer a focused branding as we 
                believe in supporting our local branding companies by allowing their branding expertise and our 
                product quality to shine.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                FWRD&apos;s vision is to ensure your brand stands out from the crowd. Possibilities are endless with our 
                premium quality products which are designed to balance style and functionality. FWRD proudly offers a 
                broad selection of diverse, on-trend styles to suit the casual, corporate, and sporty lifestyles the modern 
                promotional industry requires.
              </p>
            </div>

            <div className="bg-[#E7E3D7] p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">WHERE TO FIND FWRD?</h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                The FWRD brand is strictly distributed via authorised promotional resellers, namely 
                Promotional Companies, Marketing, Printing and Promotional clothing sectors are also supply 
                independent resellers, Advertising & Event companies.
              </p>
              <p className="text-gray-700 text-bold text-sm mb-6">
                Not a promotional company, but would like a FWRD product?
              </p>
              <Link
                href="/find-reseller"
                className="btn-primary inline-block bg-[#393939] hover:bg-[#8E857B] text-sm tracking-wider"
              >
                FIND A RESELLER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;