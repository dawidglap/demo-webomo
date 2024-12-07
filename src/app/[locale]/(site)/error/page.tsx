import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const ErrorPage = () => {
  const t = useTranslations("404");
  const locale = useLocale(); // Get active locale

  return (
    <section className="pb-[110px] pt-[150px] lg:pt-[220px]">
      <div className="container overflow-hidden lg:max-w-[1250px]">
        <div className="mx-auto w-full max-w-[570px]">
          <div className="wow fadeInUp mb-8 w-full" data-wow-delay=".2s">
            <Image
              src="/images/404/404.svg"
              alt="404"
              className="mx-auto max-w-full"
              width={505}
              height={138}
            />
          </div>

          <div className="wow fadeInUp text-center" data-wow-delay=".2s">
            <h2 className="mb-[18px] text-[28px] font-bold text-black dark:text-white sm:text-[35px]">
              {t("pageNotFound")}
            </h2>
            <p className="mb-[30px] text-base font-medium text-body sm:text-lg">
              {t("description")}
            </p>

            <Link
              href={`/${locale}/`} // Locale-aware homepage
              className="inline-flex justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white hover:bg-opacity-90"
            >
              {t("goHome")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
