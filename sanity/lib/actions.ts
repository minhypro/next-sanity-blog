import { groq } from "next-sanity";

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
