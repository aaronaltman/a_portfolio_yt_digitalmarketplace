import clsx from "clsx";
import { twMerge } from "./twMerge";

export function cn(...inputs: classValue[]) {
  return twMerge(clsx(inputs));
}
