import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768;
  }
  return false;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));