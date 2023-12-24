import Link from "next/link";
import React from "react";

import { CardWithTitle } from "@/components/CardWithTitle";
import { getCategories } from "@/sanity/lib/actions";

import Tag from "../Tag";

export const Categories: React.FC = async () => {
  const categories = await getCategories();
  return (
    <CardWithTitle title="Chủ đề">
      <div className="flex flex-wrap gap-2">
        {categories?.map((tag) => (
          <Link key={tag._id} href={`/category/${tag.slug.current}`}>
            <Tag title={tag.title} mainColor={tag.mainColor} />
          </Link>
        ))}
      </div>
    </CardWithTitle>
  );
};
