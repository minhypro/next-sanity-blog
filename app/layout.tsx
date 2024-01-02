import "./globals.css";

import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Script from "next/script";

import { getMetadata } from "@/sanity/lib/actions";

const inter = Lora({ subsets: ["vietnamese"] });

const metaFromSanity = await getMetadata()

export const revalidate = 120;

export const metadata: Metadata = {
  title: metaFromSanity.title,
  description: metaFromSanity.description,
  authors: [{ name: "Mike Le" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        defer
        async
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=723229132582538&autoLogAppEvents=1"
      />
    </html>
  );
}
