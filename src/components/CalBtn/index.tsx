import { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl"; // Ensure this is properly configured

const CalBtn: React.FC = () => {
  const t = useTranslations("Calendly"); // Using the same namespace and key

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace="30min"
      data-cal-link="webomo/demo"
      data-cal-config='{"layout":"month_view"}'
      className="inline-block rounded-[30px] bg-black px-11 py-[14px] text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black hover:dark:bg-neutral-300"
    >
      {t("schedule")} {/* Fetch the localized text dynamically */}
    </button>
  );
};

export default CalBtn;
