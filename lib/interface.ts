type RGBColor = { g: number; _type: string; a: number; b: number; r: number };
type HSLColor = { h: number; _type: string; a: number; l: number; s: number };

export type MainColor = {
  hex: string;
  alpha: number;
  rgb: RGBColor;
  hsl: HSLColor;
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

export interface ICategory {
  _type: string;
  title: string;
  _createdAt: string;
  description: string;
  _id: string;
  _updatedAt: string;
  mainColor: MainColor;
  slug: { current: string };
  _rev: string;
  posts: IPost[];
  postCount: number;
}
