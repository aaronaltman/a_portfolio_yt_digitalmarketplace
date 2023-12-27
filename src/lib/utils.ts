import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function tw(...args: any[]) {
  return clsx(twMerge(...args));
}
