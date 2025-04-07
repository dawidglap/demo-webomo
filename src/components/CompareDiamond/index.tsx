import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    // <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4  px-4 dark:border-neutral-800 dark:bg-neutral-900">

    <div className="rounded-3xl shadow-xl">
      <Compare
        firstImage="/images/compare/raw-diamond.webp" 
        secondImage="/images/compare/diamond.webp" // Video URL
        secondImageIsVideo={false} // Set to true to enable video mode
        firstImageClassName="object-cover "
        secondImageClassname="object-cover"
        className="h-[250px] w-full md:h-[470px] md:w-full"
        slideMode="hover"
      />
    </div>
  );
}
