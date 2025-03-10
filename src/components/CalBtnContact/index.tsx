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
      className="w-full rounded-full bg-gradient-to-r from-[#410cd9] to-[#f68efe] py-3 font-semibold text-white shadow-xl transition duration-300 hover:shadow-2xl"
    >
      {t("schedule")} {/* Fetch the localized text dynamically */}
    </button>
  );
};

export default CalBtn;
