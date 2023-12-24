import React from "react";

import { CardWithTitle } from "@/components/CardWithTitle";

export const About: React.FC = () => {
  return (
    <CardWithTitle title="About me">
      <div>
        Passionate web developer with 3 years of experience in React and Node.
        Currently pursuing a second bachelor&apos;s in Information Technology.
        Join me on this coding journey as I share tricks, tips, and insights in
        Vietnamese.
      </div>
    </CardWithTitle>
  );
};
