"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";
import CalBtnTimeline from "../CalBtnTimeline";

export function TimelineDemo() {
  const t = useTranslations("TimelineDemo"); // Using translations from "Timeline"

  const data = [
    {
      title: t("step1.number"),
      content: (
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-indigo-500 dark:text-indigo-400">
            {t("step1.label")}
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-3xl">
            {t("step1.title")}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-200 md:text-xl">
            {t("step1.description")}
          </p>
          <CalBtnTimeline />
        </div>
      ),
    },
    {
      title: t("step2.number"),
      content: (
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-indigo-500 dark:text-indigo-400">
            {t("step2.label")}
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-3xl">
            {t("step2.title")}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-200 md:text-xl">
            {t("step2.description")}
          </p>
        </div>
      ),
    },
    {
      title: t("step3.number"),
      content: (
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-indigo-500 dark:text-indigo-400">
            {t("step3.label")}
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-3xl">
            {t("step3.title")}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-200 md:text-xl">
            {t("step3.description")}
          </p>
        </div>
      ),
    },
    {
      title: t("step4.number"),
      content: (
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-indigo-500 dark:text-indigo-400">
            {t("step4.label")}
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-3xl">
            {t("step4.title")}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-200 md:text-xl">
            {t("step4.description")}
          </p>
          <CalBtnTimeline />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">

    <div className="mx-auto max-w-4xl">
      <Timeline data={data} />
    </div>
    </div>
  );
}
