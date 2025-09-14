import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { formatPrice } from '@/lib/utils';
import { parseProductImages } from '@/types';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: {
      category: true,
    },
  });

  if (!product) {
    notFound();
  }

  const additionalImages = parseProductImages(product.images);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link 
              href={`/category/${product.category.slug}`} 
              className="hover:text-primary"
            >
              {product.category.name}
            </Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-96 lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image || 'https://via.placeholder.com/600x600'}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Additional Images */}
              {additionalImages.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  {additionalImages.slice(0, 4).map((image: string, index: number) => (
                    <div key={index} className="relative h-24 bg-gray-100 rounded overflow-hidden">
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 2}`}
                        fill
                        className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  {product.category.name}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </p>
              </div>

              {product.description && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Contact for Pricing */}
              <div className="space-y-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Interested in this product?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Contact one of our authorized resellers for pricing and availability.
                  </p>
                  <Link
                    href="/find-reseller"
                    className="btn-primary inline-block"
                  >
                    FIND A RESELLER
                  </Link>
                </div>
              </div>

              {/* Product Features */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium quality materials</li>
                  <li>• Available for custom branding</li>
                  <li>• Professional grade construction</li>
                  <li>• Multiple color options available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Related Products
          </h2>
          {/* Add related products logic here */}
          <div className="text-center text-gray-500">
            Related products coming soon...
          </div>
        </div>
      </section>
    </div>
  );
}