import { PostPreviewCard } from "@/components/PostPreviewCard";
import { RightSidebar } from "@/components/RightSidebar";
import Tag from "@/components/Tag";
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
  const slugRoutes = slugs.map((slug) => slug.slug);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Category({ params: { slug } }: Props) {
  const categoryData = await getCategory(slug);

  return (
    <>
      <div className="relative p-4 xl:min-w-[500px] max-w-3xl mb-10 bg-white grid grid-cols-[40%_1fr] text-center rounded-xl border gap-6">
        <BackgroundOverlay
          style={{
            backgroundColor: `rgba(${categoryData.mainColor.rgb.r}, ${categoryData.mainColor.rgb.g}, ${categoryData.mainColor.rgb.b}, ${categoryData.mainColor.alpha})`,
          }}
        />
        <div className="flex flex-col gap-6 items-center">
          <p className="font-bold text-lg">Category:</p>
          <Tag title={categoryData.title} className="z-10 text-xl max-w-min" />
          <p>{categoryData.postCount} : Bài viết</p>
        </div>
        <div className="flex items-center content-center">
          <p>{categoryData.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-[0.65fr_0.35fr] gap-12">
        <main className="max-w-5xl flex flex-col gap-12">
          {categoryData?.posts?.map((post: IPost) => (
            <PostPreviewCard key={post._id} post={post} />
          ))}
        </main>

        <RightSidebar />
      </div>
    </>
  );
}
