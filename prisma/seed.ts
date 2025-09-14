import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const headwearCategory = await prisma.category.upsert({
    where: { slug: 'headwear' },
    update: {},
    create: {
      name: 'Headwear',
      slug: 'headwear',
      description: 'Premium quality headwear for all occasions',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  });

  const apparelCategory = await prisma.category.upsert({
    where: { slug: 'apparel' },
    update: {},
    create: {
      name: 'Apparel',
      slug: 'apparel',
      description: 'Stylish and comfortable apparel collection',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  });

  // Create sample products
  const products = [
    {
      name: 'Gildan Camo Trucker Cap',
      slug: 'gildan-camo-trucker-cap',
      description: 'Premium trucker cap with camouflage design',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      images: JSON.stringify([
        'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      ]),
      categoryId: headwearCategory.id,
      featured: true,
      newArrival: true,
      // filters
      color: 'camo',
      style: 'camo',
      fabric: 'mesh',
      closure: 'snapback',
    },
    {
      name: 'Kids Viryhood Hat',
      slug: 'kids-viryhood-hat',
      description: 'Comfortable hat perfect for kids',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      categoryId: headwearCategory.id,
      newArrival: true,
      // filters
      color: 'navy',
      style: 'kids',
      fabric: 'cotton',
      closure: 'strapback',
    },
    {
      name: 'Delta Cap',
      slug: 'delta-cap',
      description: 'Classic delta cap with premium finish',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      categoryId: headwearCategory.id,
      newArrival: true,
      // filters
      color: 'black',
      style: 'baseball',
      fabric: 'polyester',
      closure: 'fitted',
    },
    {
      name: 'FWRD Quarter Zip Sweater',
      slug: 'fwrd-quarter-zip-sweater',
      description: 'Premium quarter zip sweater for comfort and style',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      categoryId: apparelCategory.id,
      featured: true,
      newArrival: true,
      // filters
      color: 'navy',
      style: 'winter',
      fabric: 'wool',
      closure: null,
    },
    {
      name: 'Classic T-Shirt',
      slug: 'classic-t-shirt',
      description: 'Comfortable classic t-shirt for everyday wear',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      categoryId: apparelCategory.id,
      featured: true,
      // filters
      color: 'white',
      style: 'fashion',
      fabric: 'cotton',
      closure: null,
    },
    {
      name: 'Tank Top',
      slug: 'tank-top',
      description: 'Breathable tank top for active wear',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      categoryId: apparelCategory.id,
      featured: true,
      // filters
      color: 'black',
      style: 'leisure',
      fabric: 'polyester',
      closure: null,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });