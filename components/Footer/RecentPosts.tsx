import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IPost } from "@/lib/interface";
import { dateConverter } from "@/lib/utils";
import { getRecentPosts } from "@/sanity/lib/actions";

import FooterItem from "./FooterItem";

export const revalidate = 120;

export const RecentPosts: React.FC = async () => {
  const posts = await getRecentPosts()

  return (
    <FooterItem section="Bài viết mới">
      {posts?.map((post: IPost, i: number) => (
        <div className="mx-5 my-6 flex" key={post._id}>
          <div className="relative">
            <Image
              className="h-14 w-14 rounded-lg border border-border object-cover object-center"
              width={100}
              height={100}
              alt={`${post.title}-poster`}
              src={post.mainImage ? post.mainImage : "/no-image.png"}
              quality={80}
            />
            <span className="absolute -left-3 -top-2 h-8 w-8 bg-number-decoration text-center text-xs font-black leading-8">
              {i + 1}
            </span>
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <Link href={`/${post.slug.current}`}>
              <h4 className="font-bold">{post.title}</h4>
            </Link>
            <p className="text-xs capitalize">
              {dateConverter(post._createdAt)}
            </p>
          </div>
        </div>
      ))}
    </FooterItem>
  );
};
