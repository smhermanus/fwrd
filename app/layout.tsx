import './globals.css';
import type { Metadata } from 'next';
import TopPillNav from '@/components/layout/TopPillNav';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'FWRD - Headwear & Apparel',
  description: 'Dynamic South African brand dedicated to delivering the latest trends in headwear and apparel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopPillNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}