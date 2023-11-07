import "./globals.css";

import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

const inter = Comfortaa({ subsets: ["vietnamese"] });

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
    </html>
  );
}
