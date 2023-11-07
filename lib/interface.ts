export interface IPost {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  excerpt: string;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  _updatedAt: string;
  mainColor: {
    hex: string;
    alpha: number;
    rgb: { g: number; _type: string; a: number; b: number; r: number };
    hls: { h: number; _type: string; a: number; l: number; s: number };
  };
  mainImage: string;
  categories: string[];
  estimatedReadingTime?: number;
  authorImage: string;
  author: {
    name: string;
  };
}
