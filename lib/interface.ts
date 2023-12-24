type RGBColor = { g: number; _type: string; a: number; b: number; r: number };
type HSLColor = { h: number; _type: string; a: number; l: number; s: number };
export type Slug = { current: string; _type: string };

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
  slug: Slug;
  _createdAt: string;
  _updatedAt: string;
  mainColor: MainColor;
  mainImage: string;
  categories: {title: string, slug: Slug, mainColor: MainColor}[];
  estimatedReadingTime?: number;
  authorImage: string;
  author: {
    name: string;
  };
}

export interface ICategories {
  title: string;
  description: string;
  _id: string;
  slug: Slug;
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

export interface IMetadata {
  about: string;
  description: string;
  _id: string;
  published: number;
  title: string;
  authorImage: string
}