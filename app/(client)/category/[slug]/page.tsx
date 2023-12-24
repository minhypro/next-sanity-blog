import { AlertCircle } from "lucide-react";
import { redirect } from "next/navigation";

import { PostPreviewCard } from "@/components/PostPreviewCard";
import { RightSidebar } from "@/components/RightSidebar";
import Tag from "@/components/Tag";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { BackgroundOverlay } from "@/components/ui/background-overlay";
import { IPost } from "@/lib";
import { getCategories, getCategory } from "@/sanity/lib/actions";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await getCategories();
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Category({ params: { slug } }: Props) {
  const categoryData = await getCategory(slug);

  if (!categoryData) {
    redirect("/not-found");
  }

  return (
    <>
      <div className="relative mb-10 grid max-w-3xl grid-cols-[40%_1fr] gap-6 rounded-xl border bg-white p-4 text-center xl:min-w-[500px]">
        <BackgroundOverlay
          style={{
            backgroundColor: `rgba(${categoryData.mainColor.rgb.r}, ${categoryData.mainColor.rgb.g}, ${categoryData.mainColor.rgb.b}, ${categoryData.mainColor.alpha})`,
          }}
        />
        <div className="z-0 flex flex-col items-center gap-2">
          <Tag title={categoryData.title} variant="no-bounce" className="max-w-min cursor-auto text-lg" />
          <p>{categoryData.postCount} : Bài viết</p>
        </div>
        <div className="z-0 flex content-center items-center">
          <p>{categoryData.description}</p>
        </div>
      </div>
      <div className="grid max-w-6xl grid-cols-1 gap-10 xl:grid-cols-[0.65fr_0.35fr]">
        <main className="flex max-w-5xl flex-col gap-12">
          {categoryData.posts.length ? (
            categoryData.posts.map((post: IPost) => (
              <PostPreviewCard key={post._id} post={post} />
            ))
          ) : (
            <Alert variant="destructive" className="bg-red-100">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>
                There is no post here. Please come back later.
              </AlertTitle>
            </Alert>
          )}
        </main>

        <RightSidebar />
      </div>
    </>
  );
}
