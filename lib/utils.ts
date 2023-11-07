import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const defaultOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
export const dateConverter = (
  value: string,
  options: Intl.DateTimeFormatOptions = defaultOptions,
) => {
  const date = new Date(value);
  return date.toLocaleDateString("vi-VN", options);
};
