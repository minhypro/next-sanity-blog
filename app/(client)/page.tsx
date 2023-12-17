import { PostPreviewCard } from "@/components/PostPreviewCard";
import { IPost } from "@/lib/interface";
import { getPosts } from "@/sanity/lib/actions";

export const revalidate = 120;

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl">
      <div className="flex flex-col gap-12">
        {posts?.map((post: IPost) => (
          <PostPreviewCard key={post._id} post={post} showCategoryTag />
        ))}
      </div>
    </main>
  );
}
