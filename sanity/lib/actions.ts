import { groq } from "next-sanity";

import { ICategory } from "@/lib";

import { readClient } from "./client";

export const getAllSlugs = () =>
  readClient.fetch(groq`*[_type == "post"]{slug}`);

export const getPost = (slug: string) => {
  const query = groq`*[_type == "post" && slug.current == "${slug}"][0]{
    ...,
    "author": author->,
    "authorImage": author->image.asset->url,
    "categories": categories[]->title,
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
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url,
  "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )`;

export const getPosts = () => {
  return readClient.fetch(
    groq`*[_type == "post"]{${postPreviewProps}}| order(_updatedAt desc)`
  );
};

export const getCategories = (): Promise<
  Array<{
    title: string;
    description: string;
    slug: string;
  }>
> =>
  readClient.fetch(
    groq`*[_type == "category"]{title, description, "slug": slug.current}`
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
