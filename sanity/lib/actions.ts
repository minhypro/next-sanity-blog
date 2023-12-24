import { groq } from "next-sanity";

import { ICategories, ICategory, IMetadata, IPost, Slug } from "@/lib";

import { readClient } from "./client";

export const getAllSlugs = () : Promise<{slug: Slug}[]> =>
  readClient.fetch(groq`*[_type == "post"]{slug}`);

export const getPost = (slug: string) : Promise<IPost> => {
  const query = groq`*[_type == "post" && slug.current == "${slug}"][0]{
    ...,
    "author": author->,
    "authorImage": author->image.asset->url,
    "categories": categories[]->{title, slug, mainColor},
    "mainImage": mainImage.asset->url,
    "numberOfCharacters": length(pt::text(body)),
    "estimatedWordCount": round(length(pt::text(body)) / 5),
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )}`;
  return readClient.fetch(query);
};

const postPreviewProps = `slug,
  _id,
  mainColor,
  title,
  excerpt,
  _createdAt,
  _updatedAt,
  "categories": categories[]->{title, slug, mainColor},
  "mainImage": mainImage.asset->url,
  "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )`;

export const getPosts = () => {
  return readClient.fetch(
    groq`*[_type == "post"]{${postPreviewProps}}| order(_updatedAt desc)`
  );
};

export const getCategories = (): Promise<Array<ICategories>> =>
  readClient.fetch(
    groq`*[_type == "category"]{_id, title, description, slug, mainColor}`
  );

export const getCategory = (slug: string): Promise<ICategory> => {
  const query = groq`*[_type == "category" && slug.current == "${slug}"][0]{
    ...,
    "posts": *[_type == "post" && references(^._id)]
      {
        ${postPreviewProps}
      }|order(_updatedAt desc),
    "postCount": count(*[_type == "post" && references(^._id)]) 
    }`;
  return readClient.fetch(query);
};

export const getRecentPosts = async (number?: number) =>
  await readClient.fetch(groq`*[_type == "post"]{
    slug,
    _id,
    title,
    excerpt,
    _createdAt,
    "mainImage": mainImage.asset->url,
  }[0..${number || 2}] | order(_updatedAt desc)`);

export const getMetadata = async (): Promise<IMetadata> => {
  const data = await readClient.fetch(
    groq`*[_type == "metaData" && published != 0]{..., "authorImage": author->image.asset->url}[0..0]`
  );
  return data[0];
};