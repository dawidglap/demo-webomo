import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function TimelineDemo() {
  const data = [
    {
      title: "01",
      content: (
        <div className="flex flex-col">
          <span className="text-xs uppercase text-neutral-500 dark:text-neutral-400">
            Los geht s
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-3xl">
            Buche ein kostenloses Beratungsgespräch
          </h3>
          <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200 md:text-xl">
            Starte deine Branding-Reise, indem du einen Termin für dein erstes
            Gespräch vereinbarst. Wir können es kaum erwarten, mit dir
            zusammenzukommen und deine Marke neu zu gestalten.
          </p>
          <Link
            href="/kontakt"
            className="font-sm mt-4 max-w-[12rem] rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-4 py-[10px] text-center text-base text-white shadow-lg hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400 md:text-sm"
          >
            Erstgespräch buchen
          </Link>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div className="flex flex-col">
          <span className="text-xs uppercase text-neutral-500 dark:text-neutral-400">
            Was brauchst du?
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-3xl">
            Individuelle Strategie
          </h3>
          <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200 md:text-xl">
            In unserem Beratungsgespräch entwickeln wir gemeinsam eine
            massgeschneiderte Strategie, die genau auf die Bedürfnisse deines
            Unternehmens eingeht. Dabei erstellen wir eine klare Roadmap, die
            den Erfolg deiner Marke aufzeigt. Unser persönlicher Ansatz
            garantiert, dass die Strategie nicht nur wirkungsvoll ist, sondern
            auch perfekt zu deiner Markenvision und deinen Zielen passt.
          </p>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div className="flex flex-col">
          <span className="text-xs uppercase text-neutral-500 dark:text-neutral-400">
            Es geht los
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-3xl">
            Umsetzung
          </h3>
          <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200 md:text-xl">
            Nach deiner Zustimmung zu unserem Vorschlag beginnen wir mit der
            Umsetzung. Gemeinsam bringen wir die massgeschneiderten
            Branding-Strategien und -Materialien auf den Weg, die deine Marke in
            eine neue Richtung führen werden. Dabei konzentrieren wir uns
            darauf, deine Markenziele reibungslos und erfolgreich zu
            realisieren.
          </p>
        </div>
      ),
    },
    {
      title: "04",
      content: (
        <div className="flex flex-col">
          <span className="text-xs uppercase text-neutral-500 dark:text-neutral-400">
            Optimierung
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-3xl">
            Maximale Leistung
          </h3>
          <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200 md:text-xl">
            Wir streben danach, die Performance deiner Marke konstant zu
            steigern. Mit regelmässigen Marktanalysen und strategischen
            Anpassungen optimieren wir unsere Zusammenarbeit, um noch bessere
            Ergebnisse zu erzielen.
          </p>
          <Link
            href="/kontakt"
            className="font-sm mt-4 max-w-[10rem] rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-4 py-[10px] text-center text-base text-white shadow-lg hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400 md:text-sm"
          >
            Jetzt loslegen
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <Timeline data={data} />
    </div>
  );
}
