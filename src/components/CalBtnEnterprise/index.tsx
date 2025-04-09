import { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl"; // Ensure this is properly configured
import { FaCheck } from "react-icons/fa6";

const CalBtn: React.FC = () => {
  const t = useTranslations("Calendly"); // Using the same namespace and key

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
      <button
        type="button"
        data-cal-namespace="30min"
        data-cal-link="webomo/enterprise"
        data-cal-config='{"layout":"month_view"}'
        className=" mt-4 block w-full rounded-full bg-black px-8 py-2 text-center text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        {t("schedule")} {/* Fetch the localized text dynamically */}
      </button>
      {/* <ul className=" mt-4 dark:text-gray-400">
        <div className="flex ">
          <FaCheck className="my-auto mr-4" />
          <li className="text-sm">{t("features1")}</li>
        </div>
        <div className="flex ">
          <FaCheck className="my-auto mr-4" />
          <li className="text-sm">{t("features2")}</li>
        </div>
        <div className="flex ">
          <FaCheck className="my-auto mr-4" />
          <li className="text-sm">{t("features4")}</li>
        </div>
      </ul> */}
    </>
  );
};

export default CalBtn;
