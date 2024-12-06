"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Spinner Icon
import CalendlyBtn from "../CalendlyBtn";

const Contact = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
          message: formData.message,
          email: formData.email, // User's email (mapped to {{email}})
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!, // Your Public Key
      );
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" }); // Clear the form

      // Show success toast
      toast.success(t("form.successMessage"), {
        position: "top-center", // Use string-based position
        autoClose: 3000, // Closes after 3 seconds
      });
    } catch (error) {
      setIsSubmitting(false);

      // Show error toast
      toast.error(t("form.errorMessage"), {
        position: "top-center", // Use string-based position
        autoClose: 3000,
      });

      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section id="support" className="pb-[110px] pt-[100px] md:pt-[150px]">
      <div className="container">
        <ToastContainer /> {/* Toast container for notifications */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div
            className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-[30px] bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 px-4 py-10 shadow-card dark:from-slate-900 dark:to-slate-800 dark:shadow-card-dark sm:px-10 md:px-8"
            data-wow-delay=".3s"
          >
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
                <div>
                  <textarea
                    rows={6}
                    name="message"
                    id="message"
                    placeholder={t("form.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center rounded-[30px] px-11 py-[14px] text-base font-medium text-white ${
                      isSubmitting
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-primary hover:bg-opacity-90"
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

          {/* Booking Card */}
          <div className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-[30px] bg-gradient-to-b from-indigo-50 to-slate-100 px-4 py-10 text-center shadow-card dark:from-slate-900 dark:to-slate-800 dark:shadow-card-dark sm:px-10 md:px-8">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-[36px] md:leading-tight">
              {t("bookCall.title")}
            </h2>
            <p className="mb-6 text-lg text-body dark:text-gray-300">
              {t("bookCall.subtitle")}
            </p>
            <CalendlyBtn />
            <div className="mt-8 space-y-4 text-center">
              <p className="flex items-center justify-center text-lg text-body dark:text-gray-300">
                <AiOutlineMail className="mr-2 text-lg text-primary" />
                <a
                  href="mailto:kontakt@webomo.ch"
                  className="underline hover:text-black hover:dark:text-neutral-400"
                >
                  kontakt@webomo.ch
                </a>
              </p>
            </div>
            <p className="mt-8 text-xl text-black dark:text-gray-300">
              {t("bookCall.thankYou")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
