import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const CardWithTitle = ({ title, children }: Props) => (
  <div className="relative rounded-2xl border bg-[#fffacd] px-6 py-10">
    <div className="absolute -top-5 rounded-full border bg-white px-6 py-2 text-lg font-extrabold">
      {title}
    </div>
    {children}
  </div>
);
