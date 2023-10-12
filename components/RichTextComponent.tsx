/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";

const ImageComponent = ({ value }: { value: any }) => {
    console.log(value)
    console.log(urlForImage({...value}).url(), 'test')
  return (
    <Image 
    src={urlForImage(value).url()}
    alt={value.alt || " "} loading="lazy" />
  );
};

export const RichTextComponent = {
  types: {
    image: ImageComponent
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }: any) => <li>✅ {children}</li>,
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      // eslint-disable-next-line tailwindcss/classnames-order
      <h2 className="text-lg text-primary">{children}</h2>
    ),
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }: any) => (
      <em className="font-semibold text-gray-600">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow": ""}
        >
          {children}
        </a>
      );
    },
  },
};
