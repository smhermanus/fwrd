export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  image: string | null;
  images: string | null;
  categoryId: string;
  category?: Category;
  featured: boolean;
  newArrival: boolean;
  // Filters
  color?: string | null;
  style?: string | null;
  fabric?: string | null;
  closure?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  products?: Product[];
  createdAt: Date;
  updatedAt: Date;
}

export function parseProductImages(images: string | null | undefined): string[] {
  if (!images) return [];
  try {
    const parsed = JSON.parse(images);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}