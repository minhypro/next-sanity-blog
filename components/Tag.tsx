import { cn } from "@/lib/utils";

type TagProps = {
  title: string;
  color?: "red" | "sky" | "violet";
  className?: string;
};

const colors = {
  red: " bg-red-200 text-red-600 ",
  sky: " bg-sky-200 text-sky-600 ",
  violet: " bg-violet-200 text-violet-600 ",
};
const Tag = ({ title, className, color }: TagProps) => {
  return (
    <span
      className={cn(
        "mr-1 inline-block rounded px-2 py-1 text-xs font-semibold last:mr-0",
        color ? colors[color] : colors.sky,
        className,
      )}
    >
      {title}
    </span>
  );
};

export default Tag;
