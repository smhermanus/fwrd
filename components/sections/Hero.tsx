 'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero.webp)' }}
    >
      <div className="container mx-auto px-20 py-30 lg:py-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="text-sm font-medium text-gray-300 tracking-wider">
              SUMMER STYLE ESSENTIALS
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              FASHION
              <br />
              <span className="text-[#8E857B] font-light text-4xl lg:text-6xl">COLLECTION</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <Link
                href="/category/apparel"
                className="inline-block relative top-2 lg:top-4 btn-secondary bg-[#8E857B] hover:bg-[#8E857B]/90 text-sm tracking-wider"
              >
                VIEW NOW
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;