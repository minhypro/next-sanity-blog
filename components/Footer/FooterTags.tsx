import Link from "next/link";
import { groq } from "next-sanity";
import React from "react";

import { ITags } from "@/lib/interface";
import { readClient } from "@/sanity/lib/client";

import Tag from "../Tag";
import FooterItem from "./FooterItem";

export const revalidate = 10;

export const FooterTags: React.FC = async () => {
  const tags = await readClient.fetch(groq`*[_type == "category"]{
        slug,
        _id,
        title,
        mainColor
      }`);

  return (
    <FooterItem section="Chủ đề">
      <div className="flex flex-wrap gap-2">

      {tags?.map((tag: ITags) => (
        <Link key={tag._id} href={`/category/${tag.slug.current}`}>
          <Tag
            title={tag.title}
            mainColor={tag.mainColor}
          />
        </Link>
      ))}
      </div>
    </FooterItem>
  );
};
