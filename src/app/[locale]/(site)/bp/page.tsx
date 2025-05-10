"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa"; // Spinner Icon
import emailjs from "emailjs-com";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedin,
  FaSnapchatGhost,
  FaYoutube,
} from "react-icons/fa";

import { useRouter } from "next/navigation";

const ManagerPackage = () => {
  const t = useTranslations("Manager");
  const router = useRouter(); // For redirection
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthday: "",
    email: "",
    instagram: false,
    facebook: false,
    tiktok: false,
    linkedin: false,
    snapchat: false,
    youtube: false,
    ziel: "Paket Manager",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors on change
  };

  const validateFields = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name ist erforderlich.";
    if (!formData.surname.trim())
      newErrors.surname = "Nachname ist erforderlich.";
    if (!formData.birthday) {
      newErrors.birthday = "Geburtsdatum ist erforderlich.";
    } else {
      const today = new Date();
      const birthDate = new Date(formData.birthday);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      if (age < 18) {
        newErrors.birthday = "Sie müssen mindestens 18 Jahre alt sein.";
      }
    }
    if (!formData.email.trim()) newErrors.email = "E-Mail ist erforderlich.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";

    if (!acceptedTerms) {
      newErrors.acceptedTerms = "Bitte akzeptieren Sie die Bedingungen.";
    }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handlePaymentClick = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!validateFields()) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    setIsSubmitting(true); // Start loading spinner

    try {
      const templateParams = {
        name: formData.name || "Not Provided",
        surname: formData.surname || "Not Provided",
        birthday: formData.birthday || "Not Provided",
        email: formData.email || "Not Provided",
        instagram: formData.instagram ? "Instagram" : "Nicht ausgewählt",
        facebook: formData.facebook ? "Facebook" : "Nicht ausgewählt",
        tiktok: formData.tiktok ? "TikTok" : "Nicht ausgewählt",
        linkedin: formData.linkedin ? "LinkedIn" : "Nicht ausgewählt",
        snapchat: formData.snapchat ? "Snapchat" : "Nicht ausgewählt",
        youtube: formData.youtube ? "YouTube" : "Nicht ausgewählt",
        ziel: formData.ziel,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        "_luXCOss442fyLs0Z",
      );

      toast.success(
        "Ihre Daten wurden erfolgreich übermittelt. Weiterleitung zur Zahlungsseite in 3 Sekunden...",
        {
          position: "top-center",
          autoClose: 3000, // 3 seconds
        },
      );

      setTimeout(() => {
        router.push("https://buy.stripe.com/dR617Ygybcxn0Kc3cj");
      }, 3000);
    } catch (error) {
      console.error("Failed to send form data:", error);
      toast.error("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.", {
        position: "top-center",
        autoClose: 5000, // 5 seconds
      });
    } finally {
      setIsSubmitting(false); // Stop loading spinner
    }
  };

  return (
    <div className="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-8 p-6 lg:flex-row">
      <ToastContainer />
      {/* Package Details */}
      <div className="w-full lg:w-1/3 text-center">
        <div className=" relative flex flex-col rounded-2xl bg-gradient-to-r from-blue-700 to-purple-500 p-6 shadow-2xl dark:bg-slate-900">
          <h3 className="mb-4 text-2xl font-extrabold text-white dark:text-white">
            {t("manager")}
          </h3>
          <p className="mb-2 text-2xl font-light text-white dark:text-white">
            CHF 99.- <span className="text-lg font-medium">{t("year")}</span>
          </p>
          <p className="mb-6 text-xl font-bold text-white dark:text-gray-300">
            {t("duration")}
          </p>
          <ul className="mb-8 space-y-4">
          <div className="border-b-2 pb-2"></div>

            <li className="flex items-center text-base text-white dark:text-gray-300">
              {/* <svg
                className="mr-2 h-5 w-5 text-green-500 sm:h-6 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg> */}
              <div className="mx-auto">
                <p className="mx-auto font-bold text-xl">{t("Dashboard")}</p>
                <p className="">{t("DashboardInfo")}</p>
              </div>
            </li>
            <div className="border-b-2 pb-2"></div>

            <li className="flex items-center  text-base text-white dark:text-gray-300">
              <div className="mx-auto">
                <p className="font-bold  text-xl"> {t("Coaching")}</p>
                <p className="">{t("CoachingInfo")}</p>
              </div>
            </li>
            <div className="border-b-2 pb-2"></div>

            <li className="flex items-center text-base text-white dark:text-gray-300">
              {/* <svg
                className="mr-2 h-5 w-5 text-green-500 md:h-12 md:w-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg> */}
              <div className="mx-auto">
                <p className="font-bold  text-xl"> {t("Material")}</p>
                <p className="">{t("MaterialInfo")}</p>
              </div>
             
            </li>
            <div className="border-b-2 pb-2"></div>

            <li className="flex items-center text-base text-white dark:text-gray-300">
            <div className="mx-auto">
                <p className="font-bold  text-xl"> {t("Material2")}</p>
                <p className="">{t("MaterialInfo2")}</p>
              </div>
            </li>
          </ul>
          <small className="text-center text-white">*{t("PaymentInfo")}</small>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full rounded-2xl bg-gray-50 p-6 shadow-lg dark:bg-gray-800 lg:w-2/3">
        <form className="space-y-6">
          <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            {t("title")}
          </h3>

          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Gib deinen Namen ein"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-[30px] border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } bg-white px-4 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Surname Input */}
          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("surname")}
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Gib deinen Nachnamen ein"
              value={formData.surname}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-[30px] border ${
                errors.surname ? "border-red-500" : "border-gray-300"
              } bg-white px-4 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
            />
            {errors.surname && (
              <p className="mt-1 text-sm text-red-500">{errors.surname}</p>
            )}
          </div>

          {/* Birthday Input */}
          <div>
            <label
              htmlFor="birthday"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("birthday")}
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-[30px] border ${
                errors.birthday ? "border-red-500" : "border-gray-300"
              } bg-white px-4 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
            />
            {errors.birthday && (
              <p className="mt-1 text-sm text-red-500">{errors.birthday}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Gib deine E-Mail-Adresse ein"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-[30px] border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-white px-4 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          {/* Social Media Checklist */}
          <div>
            {/* <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              {t("platformSelection")}
            </h3>
            <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
              {t("platformInstruction")}
            </p> */}

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {/* Instagram */}
              {/* <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="instagram"
                  checked={formData.instagram}
                  onChange={handleChange}
                  className=" h-4 w-4 rounded border-gray-300 text-purple-600  focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <FaInstagram className="text-pink-600" size={20} />
                <span className="text-sm text-black dark:text-white">
                  Instagram
                </span>
              </label> */}

              {/* Facebook */}
              {/* <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="facebook"
                  checked={formData.facebook}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <FaFacebookF className="text-blue-600" size={20} />
                <span className="text-sm text-black dark:text-white">
                  Facebook
                </span>
              </label> */}

              {/* TikTok */}
              {/* <label className="flex items-center space-x-3">
                <input
                  disabled
                  type="checkbox"
                  name="tiktok"
                  checked={formData.tiktok}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black dark:border-gray-600 dark:bg-gray-700"
                />
                <FaTiktok className="text-black" size={20} />
                <span className="text-sm text-black dark:text-white">
                  TikTok
                </span>
              </label> */}

              {/* LinkedIn */}
              {/* <label className="flex items-center space-x-3">
                <input
                  disabled
                  type="checkbox"
                  name="linkedin"
                  checked={formData.linkedin}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700"
                />
                <FaLinkedin className="text-blue-700" size={20} />
                <span className="text-sm text-black dark:text-white">
                  LinkedIn
                </span>
              </label> */}

              {/* Snapchat */}
              {/* <label className="flex items-center space-x-3">
                <input
                  disabled
                  type="checkbox"
                  name="snapchat"
                  checked={formData.snapchat}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <FaSnapchatGhost className="text-yellow-500" size={20} />
                <span className="text-sm text-black dark:text-white">
                  Snapchat
                </span>
              </label> */}

              {/* YouTube */}
              {/* <label className="flex items-center space-x-3">
                <input
                  disabled
                  type="checkbox"
                  name="youtube"
                  checked={formData.youtube}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600 dark:border-gray-600 dark:bg-gray-700"
                />
                <FaYoutube className="text-red-600" size={20} />
                <span className="text-sm text-black dark:text-white">
                  YouTube
                </span>
              </label> */}
              {/* Checkbox per accettare termini */}


            </div>
          </div>
          <div className="flex items-start">
  <input
    type="checkbox"
    id="acceptedTerms"
    name="acceptedTerms"
    checked={acceptedTerms}
    onChange={(e) => {
      setAcceptedTerms(e.target.checked);
      setErrors((prev) => ({ ...prev, acceptedTerms: "" }));
    }}
    className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700"
  />
  
  <label htmlFor="acceptedTerms" className="text-sm text-gray-700 dark:text-gray-300">
  {t("acceptTermsStart")}{" "}
  <a
    href="/terms-and-conditions"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-indigo-600"
  >
    {t("acceptTermsAgbs")}
  </a>{" "}
  {t("acceptTermsAnd")}{" "}
  <a
    href="/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-indigo-600"
  >
    {t("acceptTermsPrivacy")}
  </a>
  .


  </label>
</div>
{errors.acceptedTerms && (
  <p className="mt-1 text-sm text-red-500">{errors.acceptedTerms}</p>
)}
          {/* Submit Button */}
          <div>
            <button
              onClick={handlePaymentClick}
              disabled={isSubmitting}
              className={`w-full rounded-[30px] px-6 py-3 text-center text-base font-medium text-white shadow-sm ${
                isSubmitting
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              }`}
            >
              {isSubmitting ? (
                <FaSpinner className="mx-auto animate-spin" />
              ) : (
                "Kreditkarte oder TWINT"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManagerPackage;
