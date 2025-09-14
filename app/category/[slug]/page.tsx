import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import type { Product } from '@/types';
import CategoryFilters from '@/components/sections/CategoryFilters';

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}


export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  // Helpers to parse CSV query params
  const parseCsv = (val?: string | string[]) => {
    if (!val) return [] as string[];
    const raw = Array.isArray(val) ? val.join(',') : val;
    return raw
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
  };

  const colorFilter = parseCsv(searchParams?.color);
  const styleFilter = parseCsv(searchParams?.style);
  const fabricFilter = parseCsv(searchParams?.fabric);
  const closureFilter = parseCsv(searchParams?.closure);

  // Collection from query (e.g. /category/headwear?collection=signature)
  const collectionParamRaw = (searchParams?.collection as string | undefined) || '';
  const collectionParam = collectionParamRaw.split(',').filter(Boolean)[0];

  // Banner selection: prefer collection-specific image from /public, fall back to category banner
  // Available files in /public:
  // - headwear_collection_banner.webp, apparel_collection_banner.webp
  // - signature_collection_banner.webp, baseball_collection_banner.webp, fashion_collection_banner.webp,
  //   leisure_collection_banner.webp, sport_collection_banner.webp, industrial_collection_banner.webp,
  //   camo_collection_banner.webp, kids_collection_banner.webp, winter_collection_banner.webp
  const collectionBannerMap: Record<string, Record<string, string>> = {
    headwear: {
      signature: '/signature_collection_banner.webp',
      baseball: '/baseball_collection_banner.webp',
      fashion: '/fashion_collection_banner.webp',
      leisure: '/leisure_collection_banner.webp',
      sport: '/sport_collection_banner.webp',
      industrial: '/industrial_collection_banner.webp',
      camo: '/camo_collection_banner.webp'
    },
    apparel: {
      winter: '/winter_collection_banner.webp',
      kids: '/kids_collection_banner.webp',
    },
  };

  // Fetch category base
  const category = await prisma.category.findUnique({ where: { slug: params.slug } });
  if (!category) notFound();

  // Build product where from filters
  const styleFiltersFinal = Array.from(new Set([collectionParam, ...styleFilter].filter(Boolean)));
  const whereBase: Record<string, unknown> = { categoryId: category.id };
  const and: Record<string, unknown>[] = [];
  if (colorFilter.length) and.push({ color: { in: colorFilter } });
  if (styleFiltersFinal.length) and.push({ style: { in: styleFiltersFinal } });
  if (fabricFilter.length) and.push({ fabric: { in: fabricFilter } });
  if (closureFilter.length) and.push({ closure: { in: closureFilter } });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const whereInput = (and.length ? { ...whereBase, AND: and } : whereBase) as any;

  // Fetch filtered products
  const products = await prisma.product.findMany({ where: whereInput, orderBy: { createdAt: 'desc' } });

  const defaultCategoryBanner = params.slug === 'headwear'
    ? '/headwear_collection_banner.webp'
    : '/apparel_collection_banner.webp';

  const headerImage = collectionParam
    ? (collectionBannerMap[params.slug]?.[collectionParam] || defaultCategoryBanner)
    : defaultCategoryBanner;

  const headingTitle = (collectionParam ? `${collectionParam} Collection` : category.name).toUpperCase();
  const [firstWord, ...restWords] = headingTitle.split(' ');
  const secondLine = restWords.join(' ');

  return (
    <div className="min-h-screen">
      {/* Category/Collection Banner */}
      <section className="relative h-68 md:h-76 lg:h-[24rem] xl:h-[28rem] overflow-hidden">
        <Image src={headerImage} alt={headingTitle} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-60 mt-20">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
              {firstWord}
              {secondLine && <span className="font-light block">{` ${secondLine}`}</span>}
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-3xl">
              {category.description || `Explore our ${category.name.toLowerCase()} collection`}
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
            {/* Sidebar Filters */}
            <div>
              <CategoryFilters />
            </div>

            {/* Products Grid */}
            <div>
              {products.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-500">
                    No products available in this category yet.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                  {products.map((product: Product) => {
                    const collectionLabel = product.style
                      ? `${product.style.charAt(0).toUpperCase()}${product.style.slice(1)} Collection`
                      : `${category.name} Collection`;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        className="group block rounded-lg border border-[#8E857B]/40 bg-[#E7E3D7] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-shadow"
                      >
                        {/* Image area */}
                        <div className="bg-gradient-to-b from-gray-100 to-gray-200">
                          <div className="relative h-44 md:h-52 lg:h-56 xl:h-60 p-4">
                            <Image
                              src={product.image || 'https://via.placeholder.com/600x600?text=Product'}
                              alt={product.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        {/* Text area */}
                        <div className="px-5 py-4 border-t border-[#8E857B]/40 bg-[#E7E3D7]">
                          <h3 className="text-base font-semibold text-[#1f2937] mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500">{collectionLabel}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const categories = await prisma.category.findMany({
    select: { slug: true },
  });

  return categories.map((category: { slug: string }) => ({
    slug: category.slug,
  }));
}