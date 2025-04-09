import React from "react";
import Link from "next/link";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <div className="w-full overflow-x-hidden">

      <div className="bg-primary py-7 dark:bg-black">
        <div className="container max-w-[1390px]">
          <div className="-mx-3 flex flex-wrap">
            <div className="order-last w-full px-3 lg:order-first lg:w-1/3">
              <p className="mt-4 text-center text-base text-white lg:mt-0 lg:text-left">
                &copy; {currentYear} Webomo. All rights reserved
              </p>
            </div>

            <div className="w-full px-3 md:w-1/2 lg:w-1/3">
              <div className="mb-4 flex items-center justify-center space-x-5 md:mb-0 md:justify-start lg:justify-center">
                <Link
                  href="#"
                  className="text-white opacity-70 hover:opacity-100"
                  name="social icon"
                  aria-label="Facebook"
                >
                  {/* Facebook Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                      fill="white"
                    />
                  </svg>
                </Link>

                <Link
                  href="#"
                  className="text-white opacity-70 hover:opacity-100"
                  name="social icon"
                  aria-label="Twitter"
                >
                  {/* Twitter Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.571 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52833 8.31345 7.04329 7.56059C5.55824 6.80773 4.24813 5.75098 3.198 4.45893C2.82629 5.09738 2.63095 5.82315 2.632 6.56193C2.632 8.01193 3.37 9.29293 4.492 10.0429C3.82801 10.022 3.17863 9.84271 2.598 9.51993V9.57193C2.5982 10.5376 2.93237 11.4735 3.54385 12.221C4.15533 12.9684 5.00648 13.4814 5.953 13.6729C5.33661 13.84 4.69031 13.8646 4.063 13.7449C4.32987 14.5762 4.85001 15.3031 5.55059 15.824C6.25118 16.345 7.09713 16.6337 7.97 16.6499C7.10248 17.3313 6.10918 17.8349 5.04688 18.1321C3.98458 18.4293 2.87413 18.5142 1.779 18.3819C3.6907 19.6114 5.9161 20.2641 8.189 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                      fill="white"
                    />
                  </svg>
                </Link>

                <Link
                  href="#"
                  className="text-white opacity-70 hover:opacity-100"
                  name="social icon"
                  aria-label="LinkedIn"
                >
                  {/* LinkedIn Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46943 6.99929 4.939 6.99902C4.40857 6.99876 3.89996 6.78779 3.52508 6.41253C3.15019 6.03727 2.93973 5.52846 2.94 4.99802C2.94027 4.46759 3.15123 3.95899 3.52649 3.5841C3.90175 3.20922 4.41057 2.99876 4.941 2.99902C5.47143 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="w-full px-3 md:w-1/2 lg:w-1/3">
              <div className="flex items-center justify-center space-x-4 sm:space-x-8 md:justify-end lg:justify-end">
                <Link href="#" className="text-base text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-base text-white">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FooterBottom;
