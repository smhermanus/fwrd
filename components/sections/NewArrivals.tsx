import Link from 'next/link';
import Image from 'next/image';

const newArrivals = [
  {
    id: '1',
    name: 'GILDAN CAMO TRUCKER CAP',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    href: '/product/gildan-camo-trucker-cap'
  },
  {
    id: '2',
    name: 'KIDS VIRYHOOD HAT',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    href: '/product/kids-viryhood-hat'
  },
  {
    id: '3',
    name: 'DELTA CAP',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    href: '/product/delta-cap'
  },
  {
    id: '4',
    name: 'FWRD QUARTER ZIP SWEATER',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    href: '/product/fwrd-quarter-zip-sweater'
  }
];

const NewArrivals = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          NEW ARRIVALS
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group block"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-800 text-center leading-tight">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;