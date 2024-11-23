"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" pb-[46px] pt-[95px]">
          <div className="container max-w-[1390px] rounded-[30px]  bg-gradient-to-br from-indigo-100 via-pink-50 to-purple-200 p-8 shadow-xl dark:from-slate-900 dark:to-slate-800">
            {/* Sezione "Folge uns" e social media */}
            <div className="flex flex-wrap items-center justify-between border-b border-primary px-4 pb-4 dark:border-gray-700">
              <h3 className="text-[22px] font-bold text-black dark:text-white">
                Folge uns
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-xl text-black hover:text-primary dark:text-white"
                >
                  #
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-xl text-black hover:text-primary dark:text-white"
                >
                  @
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-xl text-black hover:text-primary dark:text-white"
                >
                  f
                </a>
              </div>
            </div>

            {/* Quattro colonne sotto la linea divisoria */}
            <div className="flex flex-wrap justify-between pt-8 text-left md:text-left">
              {/* Sezione "Unternehmen" */}
              <div className="mb-8 w-full px-4 md:w-1/4">
                <h3 className="mb-4 text-[22px] font-bold text-black dark:text-white">
                  Unternehmen
                </h3>
                <ul className="space-y-2 text-base text-body dark:text-white">
                  <li>
                    <Link href="#">Über uns</Link>
                  </li>
                  <li>
                    <Link href="#">Jobs</Link>
                  </li>
                  <li>
                    <Link href="#">Datenschutzerklärung</Link>
                  </li>
                  <li>
                    <Link href="#">Impressum</Link>
                  </li>
                  <li>
                    <Link href="#">AGBs</Link>
                  </li>
                </ul>
              </div>

              {/* Sezione "webomo-business" */}
              <div className="mb-8 w-full px-4 md:w-1/4">
                <h3 className="mb-4 text-[22px] font-bold text-black dark:text-white">
                  webomo-business
                </h3>
                <ul className="space-y-2 text-base text-body dark:text-white">
                  <li>
                    <Link href="/webomo-business">Partnerprogramm</Link>
                  </li>
                  <li>
                    <Link href="#faq-business">
                      Fragen & Antworten zu Partnerprogramm
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Sezione "Hilfe" */}
              <div className="mb-8 w-full px-4 md:w-1/4">
                <h3 className="mb-4 text-[22px] font-bold text-black dark:text-white">
                  Hilfe
                </h3>
                <ul className="space-y-2 text-base text-body dark:text-white">
                  <li>
                    <Link href="#">Fragen & Antworten</Link>
                  </li>
                </ul>
              </div>

              {/* Sezione "Kontakt" con email, telefono e link di contatto */}
              <div className="mb-8 w-full px-4 md:w-1/4">
                <h3 className="mb-4 text-[22px] font-bold text-black dark:text-white">
                  Kontakt
                </h3>
                <ul className="space-y-2 text-base text-body dark:text-white">
                  <li>
                    <Link href="#">Fragen & Antworten</Link>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:info@webomo.com"
                      className="hover:text-primary"
                    >
                      info@webomo.com
                    </a>
                  </li>
                  <li>
                    Telefon:{" "}
                    <a href="tel:+123456789" className="hover:text-primary">
                      +1 234 567 89
                    </a>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione Footer Bottom */}
        <div className="py-4 text-center text-black dark:text-white">
          <p className="text-sm">
            Copyright © 2024 - webomo.ch <br /> Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
