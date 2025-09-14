import Image from "next/image";
import Link from "next/link";

const categories = [
  // Headwear collections
  { title: "Signature Collection", href: "/category/headwear?collection=signature", img: "/Headwear-collection.webp" },
  { title: "Baseball Collection", href: "/category/headwear?collection=baseball", img: "/Miami-Cap-Mint-Angle.jpg" },
  { title: "Fashion Collection", href: "/category/headwear?collection=fashion", img: "/feature-image-colour.webp" },
  { title: "Leisure Collection", href: "/category/headwear?collection=leisure", img: "/Headwear-collection.webp" },
  { title: "Sport Collection", href: "/category/headwear?collection=sport", img: "/Headwear-collection.webp" },
  { title: "Industrial Collection", href: "/category/headwear?collection=industrial", img: "/Headwear-collection.webp" },
  { title: "Camo Collection", href: "/category/headwear?collection=camo", img: "/Headwear-collection.webp" },
  // Apparel collections
  { title: "Kids Collection", href: "/category/apparel?collection=kids", img: "/Activ-Vest-Navy.webp" },
  { title: "Winter", href: "/category/apparel?collection=winter", img: "/Apparel-collection.webp" },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero / Banner */}
      <section className="relative h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
        <Image src="/hero.webp" alt="Browse Categories" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start text-left px-20">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">Browse Categories</h1>
            <p className="text-base md:text-lg text-white/80 max-w-3xl">Explore our collections and refine by colour, style, fabric and closures.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 lg:py-16 container mx-auto px-4">
        <header className="text-left mb-10 md:mb-12 px-20">
          <h1 className="text-3xl md:text-4xl font-bold text-[#393939]">Browse Categories</h1>
          <p className="text-[#393939]/70 mt-2">Choose a collection to explore products.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((c) => (
            <Link key={c.title} href={c.href} className="group block rounded-2xl overflow-hidden bg-[#E7E3D7] border border-[#8E857B]/40">
              <div className="relative h-44 md:h-52">
                <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-[#393939] group-hover:text-[#1d2228]">{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
