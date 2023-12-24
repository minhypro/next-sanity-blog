import Image from "next/image";
import Link from "next/link";
import React from "react";

import Tag from "@/components/Tag";
import { BackgroundOverlay } from "@/components/ui/background-overlay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CATEGORY_SLUG } from "@/lib";
import { IPost } from "@/lib/interface";
import { dateConverter } from "@/lib/utils";

type Props = {
  post: IPost;
  showCategoryTag?: boolean;
};

export const PostPreviewCard: React.FC<Props> = ({
  post,
  showCategoryTag,
}: Props) => {
  return (
    <div key={post._id}>
      <Card>
        <CardContent className="relative rounded">
          <BackgroundOverlay
            style={{
              backgroundColor: `rgba(${post.mainColor.rgb.r}, ${post.mainColor.rgb.g}, ${post.mainColor.rgb.b}, ${post.mainColor.alpha})`,
            }}
          />
          <div className="relative grid min-h-[300px] grid-cols-[35%_1fr] gap-8">
            <Image
              className="h-full w-full rounded-lg border border-border object-cover object-center"
              width={400}
              height={600}
              alt={`${post.title}-poster`}
              src={post.mainImage ? post.mainImage : "/no-image.png"}
              quality={80}
            />

            <div className="flex w-full flex-col gap-2 self-center ">
              <div className="text-xs">
                {showCategoryTag && (
                  <Link href={CATEGORY_SLUG + "/" + post.categories[0].slug.current}>
                  <Tag
                    title={
                      post.categories ? post.categories[0].title : "Miscelanous"
                    }
                    mainColor={post.categories ? post.categories[0].mainColor : undefined}
                  />
                </Link>
                )}
                <span className="ml-2 capitalize">
                  {dateConverter(post._createdAt)}
                </span>
                <span className="mx-4 inline-block h-2 w-2 rounded-full bg-red-500" />
                <span>{post.estimatedReadingTime ?? 0} min read</span>
              </div>
              <h3 className="text-2xl font-extrabold">{post.title}</h3>

              <p>{post.excerpt}</p>
              <div className="mt-4">
                <Link href={`/${post.slug.current}`}>
                  <Button variant="bounce-in">Đọc tiếp</Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
