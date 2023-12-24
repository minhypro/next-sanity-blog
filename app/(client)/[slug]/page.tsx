import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import CommentsFacebook from "@/components/CommentsFacebook";
import { RichTextComponent } from "@/components/RichTextComponent/RichTextComponent";
import Tag from "@/components/Tag";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundOverlay } from "@/components/ui/background-overlay";
import { CATEGORY_SLUG } from "@/lib";
import { IPost } from "@/lib/interface";
import { dateConverter } from "@/lib/utils";
import { getAllSlugs, getPost } from "@/sanity/lib/actions";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  const slugRoutes = slugs.map((slug) => slug.slug?.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params: { slug } }: Props) {
  const post = (await getPost(slug)) as IPost;

  if (!post) {
    redirect("/not-found");
  }

  return (
    <main className="relative flex max-w-4xl flex-col items-center justify-between rounded-xl border bg-white p-8">
      <BackgroundOverlay
        style={{
          backgroundColor: `rgba(${post.mainColor.rgb.r}, ${post.mainColor.rgb.g}, ${post.mainColor.rgb.b}, ${post.mainColor.alpha})`,
        }}
      />
      <div className="z-0 mb-10 grid grid-cols-[35%_1fr] gap-8">
        <Image
          className="h-full min-h-[350px] w-full rounded-xl border border-border object-cover object-center"
          width={400}
          height={600}
          alt={`${post.title}-poster`}
          src={post.mainImage ? post.mainImage : "/code-snippet.png"}
          quality={80}
        />

        <div className="flex w-full flex-col gap-2 self-center ">
          <div className="min-w-fit max-w-min">
            <Link href={CATEGORY_SLUG + "/" + post.categories[0].slug.current}>
              <Tag
                title={
                  post.categories ? post.categories[0].title : "Miscelanous"
                }
                mainColor={post.categories ? post.categories[0].mainColor: undefined}
              />
            </Link>
          </div>
          <div className="text-xs">
            <span className="ml-2 capitalize">
              {dateConverter(post._createdAt)}
            </span>
            <span className="mx-4 inline-block h-2 w-2 rounded-full bg-red-500" />
            <span>
              {post.estimatedReadingTime
                ? Math.max(post.estimatedReadingTime, 1)
                : 1}{" "}
              phút đọc
            </span>
          </div>
          <h3 className="my-4 rounded-xl border bg-white p-4 text-2xl font-extrabold uppercase">
            {post.title}
          </h3>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={post.authorImage} />
              <AvatarFallback>{post.author.name}</AvatarFallback>
            </Avatar>
            <h5>{post.author.name}</h5>
            <span className="ml-auto text-xs capitalize">
              Cập nhật: {dateConverter(post._updatedAt)}
            </span>
          </div>
        </div>
      </div>
      <div className="post-content z-10 mb-4">
        <PortableText value={post.body} components={RichTextComponent} />
      </div>
      <CommentsFacebook dataHref={slug} />
    </main>
  );
}
