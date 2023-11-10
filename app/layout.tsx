import "./globals.css";

import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Script from 'next/script'

const inter = Lora({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "NextJS Sanity Blog",
  description: "NextJs Sanity Blog",
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
      <Script defer async src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=723229132582538&autoLogAppEvents=1" />
    </html>
  );
}
