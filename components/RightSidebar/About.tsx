import React from "react";

import { CardWithTitle } from "@/components/CardWithTitle";
import { getMetadata } from "@/sanity/lib/actions";

export const About: React.FC = async () => {
  const metaData = await getMetadata()

  return (
    <CardWithTitle title="About me">
      <div>
        {metaData.about}
      </div>
    </CardWithTitle>
  );
};
