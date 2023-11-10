import React from "react";

type Props = {
  section: string;
  children: React.ReactNode;
};

const FooterItem = ({ section, children }: Props) => {
  return (
    <div className="relative px-6 py-10">
      <div className="absolute -top-5 rounded-full border bg-white px-6 py-2 font-extrabold">
        {section}
      </div>
      {children}
    </div>
  );
};

export default FooterItem;
