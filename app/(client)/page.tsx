/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from "next/image";
import { groq } from "next-sanity";

import { readClient } from "@/sanity/lib/client";

export const revalidate = 10

export default async function Home() {
  const posts = await readClient.fetch(
    // groq`${buildQuery({
    //   type: "post",
    // })}{"mainImage": mainImage.asset->url, "categories": category}`
    groq`*[_type == "post"]{
      body,
      _id,
      _type,
      title,
      categories->,
    }`
  );


  return (
    <main className="items-center ">
      {/* <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card> */}
      <div>
      {posts?.map((post: any) => (<div key={post._id} className="mb-4">{JSON.stringify(post)}</div>))}
      </div>
     
    </main>
  );
}
