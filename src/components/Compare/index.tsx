import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    // <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4  px-4 dark:border-neutral-800 dark:bg-neutral-900">
    <div className="rounded-3xl shadow-xl">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-full md:h-[500px] md:w-full"
        slideMode="hover"
      />
    </div>
  );
}
