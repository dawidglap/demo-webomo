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
      className="font-sm mt-4 max-w-[12rem] rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-4 py-[10px] text-center text-base text-white shadow-lg hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400 md:text-sm"
    >
      {t("schedule")} {/* Fetch the localized text dynamically */}
    </button>
  );
};

export default CalBtn;
