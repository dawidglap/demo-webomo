"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import emailjs from "emailjs-com";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ManagerPackage = () => {
  const t = useTranslations("Manager");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthday: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          surname: formData.surname,
          birthday: formData.birthday,
          email: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      );
      setIsSubmitting(false);
      setFormData({
        name: "",
        surname: "",
        birthday: "",
        email: "",
      }); // Clear form
      toast.success(t("form.successMessage"), {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      setIsSubmitting(false);
      toast.error(t("form.errorMessage"), {
        position: "top-center",
        autoClose: 3000,
      });
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section
      id="manager-package"
      className="pb-[110px] pt-[100px] md:pt-[150px]"
    >
      <div className="container">
        <ToastContainer />
        <div className="text-center">
          <h1 className="mb-10 text-2xl font-semibold text-black dark:text-white md:text-5xl">
            {t("headline")}
            <br />
            <span className="mt-1 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text font-semibold leading-none text-transparent dark:from-purple-300 dark:to-pink-300">
              {t("subHeadline")}
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Package Details Card */}
          <div className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-[30px] bg-purple-100 px-4 py-10 shadow-xl dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 dark:shadow-card-dark sm:px-10 md:px-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-[36px] md:leading-tight">
              {t("package.title")}
            </h2>
            <ul className="mb-8 space-y-4 text-black dark:text-gray-300">
              <li className="text-base">
                <span className="font-semibold">•</span> {t("package.feature1")}
              </li>
              <li className="text-base">
                <span className="font-semibold">•</span> {t("package.feature2")}
              </li>
              <li className="text-base">
                <span className="font-semibold">•</span> {t("package.feature3")}
              </li>
            </ul>
            <p className="mb-2 text-4xl font-bold text-black dark:text-white">
              CHF 79.-{" "}
              <span className="text-lg font-medium">{t("perMonth")}</span>
            </p>
            <button className="block w-full rounded-[30px] bg-black py-3 text-center text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              {t("choosePlan")}
            </button>
          </div>

          {/* Contact Form */}
          <div className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-[30px] bg-indigo-100 px-4 py-10 shadow-xl dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 dark:shadow-card-dark sm:px-10 md:px-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-[36px] md:leading-tight">
              {t("form.title")}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("form.namePlaceholder")}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder={t("form.surnamePlaceholder")}
                    value={formData.surname}
                    onChange={handleChange}
                    className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="birthday"
                    id="birthday"
                    placeholder={t("form.birthdayPlaceholder")}
                    value={formData.birthday}
                    onChange={handleChange}
                    className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t("form.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center rounded-[30px] px-11 py-[14px] text-base font-medium text-white ${
                      isSubmitting
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-black hover:bg-opacity-90 dark:bg-neutral-100 dark:text-black hover:dark:bg-neutral-300"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
                        {t("form.submitting")}
                      </>
                    ) : (
                      t("submit")
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerPackage;
