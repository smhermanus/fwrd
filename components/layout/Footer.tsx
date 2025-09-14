 'use client';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin, Music2 } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const handleLogoClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#E7E3D7] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="lg:col-span-2">
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
            <p className="text-gray-600 mt-2 max-w-md">
              Dynamic South African brand dedicated to delivering the latest trends 
              in headwear and apparel for the promotional industry.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/category/headwear" className="block text-gray-600 hover:text-primary">
                Headwear
              </Link>
              <Link href="/category/apparel" className="block text-gray-600 hover:text-primary">
                Apparel
              </Link>
              <a href="https://drive.google.com/file/d/1U3gIJ79gqyHr7CgnwJ-Y2hymYNZWqbyq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-primary">
                Catalogue
              </a>
              <Link href="/find-reseller" className="block text-gray-600 hover:text-primary">
                Find a Reseller
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-2">
              <Link href="/contact" className="block btn-primary text-center bg-[#393939] hover:bg-[#8E857B] text-sm">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="https://facebook.com/fwrdheadwearapparelza" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/fwrdheadwearapparelza" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com/channel/UCCY1jcwbOK-DXEfmMI5a77Q" className="text-gray-600 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://za.linkedin.com/company/fwrdheadwearandapparel" className="text-gray-600 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://tiktok.com/@fwrdheadwearappar?lang=en" className="text-gray-600 hover:text-primary">
                <Music2 className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © FWRD Headwear & Apparel. All rights reserved. 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;