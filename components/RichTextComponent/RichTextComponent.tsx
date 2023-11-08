/* eslint-disable @typescript-eslint/no-explicit-any */

import { CodeBlock } from "./CodeBlock";
import { ImageComponent } from "./ImageComponent";

export const RichTextComponent = {
  types: {
    image: ImageComponent,
    code: CodeBlock,
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
      <li
        className="before:color-red-500 before:-ml-2 before:mr-2 before:text-red-500 before:content-['•']"
        style={{ listStyleType: "none" }}
      >
        {children}
      </li>
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
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }: any) => (
      <em className="font-semibold text-gray-600">{children}</em>
    ),
    highlight: ({ children }: any) => (
      <em className="font-semibold text-red-600">{children}</em>
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
          rel={target === "_blank" ? "noindex nofollow" : ""}
          className="underline"
        >
          {children}
        </a>
      );
    },
  },
};
