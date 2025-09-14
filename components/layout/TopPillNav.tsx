 'use client';
import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Facebook, Instagram, Youtube, Linkedin, Music2, Menu, X, Search } from "lucide-react";
import Image from "next/image";

const TopPillNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [headwearOpen, setHeadwearOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openHeadwear = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setHeadwearOpen(true);
  };

  // Apparel dropdown state and helpers
  const [apparelOpen, setApparelOpen] = useState(false);
  const apparelCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openApparel = () => {
    if (apparelCloseTimer.current) {
      clearTimeout(apparelCloseTimer.current);
      apparelCloseTimer.current = null;
    }
    setApparelOpen(true);
  };

  const closeApparelWithDelay = () => {
    if (apparelCloseTimer.current) clearTimeout(apparelCloseTimer.current);
    apparelCloseTimer.current = setTimeout(() => setApparelOpen(false), 300);
  };

  const closeHeadwearWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHeadwearOpen(false), 300);
  };

  const headwearCollections: { title: string; slug: string; img: string }[] = [
    { title: "Signature Collection", slug: "signature", img: "/signature_collection_thumbnail.webp" },
    { title: "Baseball Collection", slug: "baseball", img: "/baseball_collection_thumbnail.webp" },
    { title: "Fashion Collection", slug: "fashion", img: "/fashion_collection_thumbnail.webp" },
    { title: "Leisure Collection", slug: "leisure", img: "/leisure_collection_thumbnail.webp" },
    { title: "Sport Collection", slug: "sport", img: "/sport_collection_thumbnail.webp" },
    { title: "Industrial Collection", slug: "industrial", img: "/industrial_collection_thumbnail.webp" },
    { title: "Camo Collection", slug: "camo", img: "/camo_collection_thumbnail.webp" },
  ];

  const apparelCollections: { title: string; slug: string; img: string }[] = [
    { title: "Winter", slug: "winter", img: "/winter_collection_thumbnail.webp" },
    { title: "Kids Collection", slug: "kids", img: "/kids_collection_thumbnail.webp" },
  ];

const handleLogoClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
 if (pathname === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

  // Navigate to a route and scroll to top (or just scroll if already there)
  const goToTopOf = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
    setIsMenuOpen(false);
  };

  // Removed unused goToSection helper

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`relative mx-auto max-w-7xl ${isMenuOpen ? 'rounded-none' : 'rounded-full'} md:rounded-full bg-[#E7E3D7] backdrop-blur border border-[#8E857B] shadow-card`}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 md:px-8 py-2">
          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            className="md:hidden justify-self-start p-2 rounded-full text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors group"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /> : <Menu className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" />}
          </button>

          {/* Left links (desktop) */}
          <nav className="hidden md:flex text-semibold items-center gap-3 justify-self-start whitespace-nowrap" aria-label="Primary">
            {/* Headwear with mega menu */}
            <div
              className="group"
              onMouseEnter={openHeadwear}
              onMouseLeave={closeHeadwearWithDelay}
              onFocus={openHeadwear}
              onBlur={closeHeadwearWithDelay}
            >
              <Link href="/category/headwear" onClick={goToTopOf('/category/headwear')} className="text-sm text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors rounded-full px-4 py-2">HEADWEAR</Link>
              {headwearOpen && (
                <>
                  {/* Hover bridge to cover the gap between the pill and dropdown */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-[1080px] z-40"
                    onMouseEnter={openHeadwear}
                    onMouseLeave={closeHeadwearWithDelay}
                  />
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[1080px] rounded-xl bg-[#E7E3D7] shadow-xl border border-[#8E857B]/40 p-2"
                    onMouseEnter={openHeadwear}
                    onMouseLeave={closeHeadwearWithDelay}
                  >
                    <div className="grid grid-cols-4 gap-5">
                      {headwearCollections.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/category/headwear?collection=${c.slug}`}
                          className="group/item flex items-center gap-4 p-3 rounded-lg hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors"
                        >
                          <div className="relative h-10 w-10 shrink-0 rounded-md overflow-hidden ring-1 ring-[#8E857B]/40 group-hover/item:ring-[#E7E3D7]">
                            <Image src={c.img} alt={c.title} fill className="object-cover" />
                          </div>
                          <span className="text-sm font-medium">{c.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Apparel with mega menu (match Headwear) */}
            <div
              className="group"
              onMouseEnter={openApparel}
              onMouseLeave={closeApparelWithDelay}
              onFocus={openApparel}
              onBlur={closeApparelWithDelay}
            >
              <Link href="/category/apparel" onClick={goToTopOf('/category/apparel')} className="text-sm text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors rounded-full px-4 py-2">APPAREL</Link>
              {apparelOpen && (
                <>
                  {/* Hover bridge to cover the gap, match headwear behavior */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-[1080px] z-40"
                    onMouseEnter={openApparel}
                    onMouseLeave={closeApparelWithDelay}
                  />
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[1080px] rounded-xl bg-[#E7E3D7] shadow-xl border border-[#8E857B]/40 p-2"
                    onMouseEnter={openApparel}
                    onMouseLeave={closeApparelWithDelay}
                  >
                    <div className="grid grid-cols-4 gap-5">
                      {apparelCollections.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/category/apparel?collection=${c.slug}`}
                          className="group/item flex items-center gap-4 p-3 rounded-lg hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors"
                        >
                          <div className="relative h-10 w-10 shrink-0 rounded-md overflow-hidden ring-1 ring-[#8E857B]/40 group-hover/item:ring-[#E7E3D7]">
                            <Image src={c.img} alt={c.title} fill className="object-cover" />
                          </div>
                          <span className="text-sm font-medium">{c.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <a href="https://drive.google.com/file/d/1U3gIJ79gqyHr7CgnwJ-Y2hymYNZWqbyq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors whitespace-nowrap rounded-full px-4 py-2">CATALOGUE</a>
            <Link href="/find-reseller" className="text-sm text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors whitespace-nowrap rounded-full px-4 py-2">FIND A RESELLER</Link>
          </nav>

          {/* Center logo */}
          <div className="flex items-center justify-center">
            <Link href="/" onClick={handleLogoClick}>
              <Image 
                src="/FWRD-Black-Logo.png" 
                alt="FWRD"
                width={80}
                height={20}
                className="h-12 md:h-14 w-auto scale-[0.9] md:scale-[1.1]"
                priority
              />
            </Link>
          </div>

          {/* Right side icons (desktop) */}
          <div className="hidden md:flex items-center gap-4 justify-self-end">
            <div className="flex items-center gap-3 text-[#393939]">
              <a aria-label="Facebook" href="https://facebook.com/fwrdheadwearapparelza" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Facebook className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
              <a aria-label="Instagram" href="https://instagram.com/fwrdheadwearapparelza" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Instagram className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
              <a aria-label="YouTube" href="https://youtube.com/channel/UCCY1jcwbOK-DXEfmMI5a77Q" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Youtube className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
              <a aria-label="LinkedIn" href="https://za.linkedin.com/company/fwrdheadwearandapparel" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Linkedin className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
              <a aria-label="Tiktok" href="https://tiktok.com/@fwrdheadwearappar?lang=en" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Music2 className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
            </div>
            <span className="hidden md:inline-block w-px h-8 bg-[#393939]" />
            <button aria-label="Account" className="group p-2 rounded-full hover:bg-[#393939] transition-colors">
              <Search className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-3">
            <nav className="flex flex-col gap-2 py-2" aria-label="Primary">
              <Link href="/category/headwear" onClick={goToTopOf('/category/headwear')} className="px-4 py-2 rounded-full text-sm text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors">HEADWEAR</Link>
              <Link href="/category/apparel" onClick={goToTopOf('/category/apparel')} className="px-4 py-2 rounded-full text-sm text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors">APPAREL</Link>
              <a href="https://drive.google.com/file/d/1U3gIJ79gqyHr7CgnwJ-Y2hymYNZWqbyq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full text-sm text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors">CATALOGUE</a>
              <Link href="/find-reseller" className="px-4 py-2 rounded-full text-sm text-[#393939] hover:bg-[#393939] hover:text-[#E7E3D7] transition-colors">FIND A RESELLER</Link>
              <div className="mt-3 flex items-center gap-2">
                <a aria-label="Facebook" href="https://facebook.com/fwrdheadwearapparelza" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Facebook className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
                <a aria-label="Instagram" href="https://instagram.com/fwrdheadwearapparelza" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Instagram className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
                <a aria-label="YouTube" href="https://youtube.com/channel/UCCY1jcwbOK-DXEfmMI5a77Q" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Youtube className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
                <a aria-label="LinkedIn" href="https://za.linkedin.com/company/fwrdheadwearandapparel" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Linkedin className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
                <a aria-label="Tiktok" href="https://tiktok.com/@fwrdheadwearappar?lang=en" className="group p-2 rounded-full hover:bg-[#393939] transition-colors"><Music2 className="h-5 w-5 text-[#393939] group-hover:text-[#E7E3D7]" /></a>
              </div>
            </nav>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TopPillNav;
