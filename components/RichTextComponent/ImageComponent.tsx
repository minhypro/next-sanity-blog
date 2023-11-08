/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";

export const ImageComponent = ({ value }: { value: any }) => {
  return (
    <Image
      src={urlForImage(value).url()}
      className="w-full"
      alt={value.alt || " "}
      loading="lazy"
      width={1000}
      height={1000}
    />
  );
};
