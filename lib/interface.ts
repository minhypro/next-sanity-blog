export type MainColor = {
  hex: string;
  alpha: number;
  rgb: { g: number; _type: string; a: number; b: number; r: number };
  hsl: { h: number; _type: string; a: number; l: number; s: number };
};

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
  mainColor: MainColor;
  mainImage: string;
  categories: string[];
  estimatedReadingTime?: number;
  authorImage: string;
  author: {
    name: string;
  };
}

export interface ITags {
  title: string;
  description: string;
  _id: string;
  slug: {
    current: string;
  };
  mainColor: MainColor;
}
