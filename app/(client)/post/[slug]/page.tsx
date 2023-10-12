/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from "@portabletext/react";
// import {getImageDimensions} from '@sanity/asset-utils'
// import urlBuilder from "@sanity/image-url";
// import Image from "next/image";
import { groq } from "next-sanity";

import { RichTextComponent } from "@/components/RichTextComponent";
import { IPost } from "@/lib/interface";
import { readClient } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await readClient.fetch(groq`*[_type == "post"]{slug}`);

  const slugRoutes = slugs.map((slug: any) => slug.slug?.current);

  return slugRoutes.map((slug: any) => ({
    slug,
  }));
}

// const SampleImageComponent = ({value}: {value: any}) => {
//   // const {width, height} = getImageDimensions(value)
//   return (
//     <img
//       src={urlForImage(value).url()}
//       alt={value.alt || ' '}
//       loading="lazy"
//       style={{
//         // Display alongside text if image appears inside a block text span
//         // display: isInline ? 'inline-block' : 'block',

//         // Avoid jumping around with aspect-ratio CSS property
//         // aspectRatio: width / height,
//       }}
//     />
//   )
// }
// const components = {
//   types: {
//     image: SampleImageComponent,
//     // Any other custom types you have in your content
//     // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
//   },
// }

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await readClient.fetch(query);

  return data;
}

export default async function Post({ params: { slug } }: Props) {
  const post = (await getData(slug)) as IPost;
  console.log(post.body, "here");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Blog
      {slug}
      <hr />
      <PortableText value={post.body} components={RichTextComponent} />
    </main>
  );
}
