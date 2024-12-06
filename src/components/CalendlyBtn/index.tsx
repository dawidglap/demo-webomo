import React from "react";
import { useTranslations } from "next-intl"; // Ensure you have this installed and properly configured

// Declare the Calendly object for TypeScript
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyBtn: React.FC = () => {
  const t = useTranslations("Calendly"); // Assuming the translations are under a "Calendly" namespace

  React.useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Add the Calendly CSS file
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/kontakt-webomo/30min",
      });
    } else {
      console.error("Calendly script not loaded");
    }
  };

  return (
    <button
      type="button"
      className="inline-block rounded-[30px] bg-black px-11 py-[14px] text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black hover:dark:bg-neutral-300"
      onClick={handleClick}
    >
      {t("schedule")} {/* Fetch the localized text dynamically */}
    </button>
  );
};

export default CalendlyBtn;
