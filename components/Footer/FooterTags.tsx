import Link from "next/link";
import React from "react";

import { getCategories } from "@/sanity/lib/actions";

import Tag from "../Tag";
import FooterItem from "./FooterItem";

export const revalidate = 120;

export const FooterTags: React.FC = async () => {
  const categories = await getCategories();

  return (
    <FooterItem section="Chủ đề">
      <div className="flex flex-wrap gap-2">
        {categories?.map((tag) => (
          <Link key={tag._id} href={`/category/${tag.slug.current}`}>
            <Tag title={tag.title} mainColor={tag.mainColor} />
          </Link>
        ))}
      </div>
    </FooterItem>
  );
};
