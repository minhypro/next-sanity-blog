/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { groq } from "next-sanity";

import CommentsFacebook from "@/components/CommentsFacebook";
import Tag from "@/components/Tag";
import { BackgroundOverlay } from "@/components/ui/background-overlay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IPost } from "@/lib/interface";
import { dateConverter } from "@/lib/utils";
import { readClient } from "@/sanity/lib/client";

export const revalidate = 10;

export default async function Home() {
  const posts = await readClient.fetch(groq`*[_type == "post"]{
      body,
      slug,
      _id,
      _type,
      title,
      mainColor,
      title,
      excerpt,
      _createdAt,
      _updatedAt,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "numberOfCharacters": length(pt::text(body)),
      "estimatedWordCount": round(length(pt::text(body)) / 5),
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }| order(_updatedAt desc)`);

  return (
    <main className="max-w-4xl">
      <div>
        {posts?.map((post: IPost) => (
          <div key={post._id} className="mb-4">
            <Card>
              <CardContent className="relative rounded">
                <BackgroundOverlay
                  style={{
                    backgroundColor: `rgba(${post.mainColor.rgb.r}, ${post.mainColor.rgb.g}, ${post.mainColor.rgb.b}, ${post.mainColor.alpha})`,
                  }}
                />
                <div className="relative grid grid-cols-[35%_1fr] gap-8">
                  <Link href={post.slug.current} className="min-h-[350px]">
                    <Image
                      className="border-border h-full w-full rounded-lg border object-cover object-center"
                      width={400}
                      height={600}
                      alt={`${post.title}-poster`}
                      src={post.mainImage?post.mainImage:'/no-image.png'}
                      quality={80}
                    />
                  </Link>

                  <div className="flex w-full flex-col gap-2 self-center ">
                    <div className="text-xs">
                      <Tag
                        title={
                          post.categories ? post.categories[0] : "Miscelanous"
                        }
                        color="violet"
                      />
                      <span className="ml-2 capitalize">
                        {dateConverter(post._createdAt)}
                      </span>
                      <span className="mx-4 inline-block h-2 w-2 rounded-full bg-red-500" />
                      <span>{post.estimatedReadingTime ?? 0} min read</span>
                    </div>
                    <h3 className="text-2xl font-extrabold">{post.title}</h3>

                    <p>{post.excerpt}</p>
                    <div className="mt-4">
                      <Link href={`/post/${post.slug.current}`}>
                        <Button variant={"default"}>Đọc tiếp</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        <CommentsFacebook dataHref="/"/>
      </div>
    </main>
  );
}
