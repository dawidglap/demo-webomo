import React from "react";
import Graphics from "@/components/Cta/Graphics";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <section id="cta" className="relative z-10 pt-[110px]">
        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-10 pt-14 shadow-card dark:bg-dark dark:shadow-card-dark sm:px-20 lg:px-12 lg:pt-20 xl:px-20">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp mx-auto max-w-[530px] text-center lg:ml-0 lg:text-left"
                  data-wow-delay=".2s"
                >
                  <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[38px] md:leading-tight">
                    Take Your Social Media to the Next Level with Webomo
                  </h2>
                  <p className="mb-10 text-base text-body">
                    Join Webomo's expert-driven social media services and start
                    building a powerful online presence. From strategy to
                    engagement, we have the tools to help you grow.
                  </p>

                  <div className="-mx-[10px] flex flex-wrap items-center justify-center lg:justify-start">
                    <div className="inline-block px-[10px]">
                      <Link
                        href="#"
                        className="mb-5 inline-flex items-center rounded-md bg-primary px-5 py-[10px] text-white hover:bg-opacity-90"
                      >
                        Get Started
                      </Link>
                    </div>

                    <div className="inline-block px-[10px]">
                      <Link
                        href="#"
                        className="mb-5 inline-flex items-center rounded-md bg-black px-5 py-[10px] text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
                      >
                        Book a Call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative z-10 mx-auto mt-20 max-w-[435px] lg:mt-0"
                  data-wow-delay=".3s"
                >
                  <Image
                    width={299}
                    height={419}
                    src={"/images/cta/cta-light.png"}
                    alt="cta image"
                    className="mx-auto max-w-full"
                  />

                  <div className="absolute -top-5 left-0 right-0 -z-10 aspect-square w-full rounded-full bg-gradient-2"></div>
                  <div className="absolute right-0 top-0 -z-10">
                    <svg
                      width="60"
                      height="43"
                      viewBox="0 0 60 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_47_16)">
                        <path
                          d="M18.3392 1.12402C18.342 1.06386 18.3451 1.00425 18.3484 0.94519C18.3456 1.00499 18.3425 1.06459 18.3392 1.12402C18.0601 7.2551 21.0899 18.9962 35.5087 18.295C29.6192 18.7078 17.9481 22.8922 18.347 36.3249C18.164 30.4662 14.3716 18.8894 0.685511 18.8251C0.56152 18.827 0.43993 18.8273 0.320892 18.8261C0.443205 18.8249 0.564743 18.8245 0.685511 18.8251C6.49532 18.7353 17.5757 15.1217 18.3392 1.12402Z"
                          fill="#7083F5"
                        />
                        <path
                          d="M48.8789 21.0097C48.8805 20.9735 48.8824 20.9378 48.8844 20.9023C48.8827 20.9382 48.8808 20.974 48.8789 21.0097C48.7114 24.6883 50.5293 31.733 59.1806 31.3122C55.6469 31.5599 48.6442 34.0705 48.8836 42.1302C48.7737 38.615 46.4983 31.6689 38.2867 31.6303C38.2123 31.6315 38.1393 31.6316 38.0679 31.6309C38.1413 31.6301 38.2142 31.6299 38.2867 31.6303C41.7725 31.5764 48.4208 29.4082 48.8789 21.0097Z"
                          fill="#19DEBB"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_47_16">
                          <rect
                            width="58.8596"
                            height="41.2017"
                            fill="white"
                            transform="translate(0.320892 0.94519)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 -z-10">
                    <svg
                      width="54"
                      height="30"
                      viewBox="0 0 54 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.9917 2.36882C44.2769 2.15978 42.6317 2.85567 40.9325 4.31213C38.1361 6.70897 33.284 7.90131 28.9104 4.32298C27.0368 2.79004 25.4038 2.54769 24.0545 2.77256C22.6575 3.00539 21.4826 3.75015 20.559 4.36587C19.0962 5.34105 17.4854 6.36579 15.6302 6.60628C13.7152 6.85451 11.6704 6.25989 9.34099 4.31875C7.39062 2.69344 5.7217 2.38082 4.43974 2.57805C3.12805 2.77985 2.10604 3.53341 1.51791 4.22847C1.25454 4.53973 0.788703 4.57855 0.477442 4.31517C0.16618 4.0518 0.12736 3.58597 0.390736 3.2747C1.15611 2.37017 2.47833 1.38589 4.21521 1.11867C5.98181 0.846879 8.06579 1.33405 10.2863 3.18443C12.3865 4.93464 14.0331 5.32439 15.4403 5.14198C16.9074 4.95181 18.2496 4.13088 19.74 3.13731L20.1495 3.75159L19.74 3.13731C20.6621 2.52256 22.0711 1.60622 23.8118 1.3161C25.6002 1.01804 27.6585 1.39092 29.8454 3.18019C33.5527 6.21337 37.6 5.22376 39.9716 3.19104C41.8396 1.5899 43.8859 0.624641 46.1703 0.903125C48.432 1.17883 50.7386 2.65261 53.1915 5.48284C53.4585 5.79096 53.4252 6.25723 53.1171 6.52426C52.809 6.7913 52.3427 6.758 52.0757 6.44988C49.7297 3.74304 47.7293 2.58064 45.9917 2.36882Z"
                        fill="#F76D8D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.9916 10.1093C44.2769 9.90026 42.6317 10.5961 40.9325 12.0526C38.1361 14.4494 33.2839 15.6418 28.9104 12.0635C27.0368 10.5305 25.4037 10.2882 24.0545 10.513C22.6575 10.7459 21.4825 11.4906 20.559 12.1063C19.0962 13.0815 17.4853 14.1063 15.6301 14.3468C13.7151 14.595 11.6704 14.0004 9.34098 12.0592C7.3906 10.4339 5.72169 10.1213 4.43972 10.3185C3.12804 10.5203 2.10603 11.2739 1.5179 11.9689C1.25452 12.2802 0.788688 12.319 0.477426 12.0557C0.166165 11.7923 0.127345 11.3264 0.39072 11.0152C1.15609 10.1107 2.47832 9.12637 4.2152 8.85915C5.98179 8.58736 8.06578 9.07453 10.2862 10.9249C12.3865 12.6751 14.0331 13.0649 15.4403 12.8825C16.9074 12.6923 18.2496 11.8714 19.7399 10.8778L20.1495 11.4921L19.7399 10.8778C20.6621 10.263 22.071 9.34669 23.8117 9.05658C25.6002 8.75852 27.6585 9.1314 29.8454 10.9207C33.5526 13.9538 37.6 12.9642 39.9716 10.9315C41.8396 9.33038 43.8858 8.36512 46.1703 8.6436C48.432 8.9193 50.7386 10.3931 53.1915 13.2233C53.4585 13.5314 53.4252 13.9977 53.1171 14.2647C52.809 14.5318 52.3427 14.4985 52.0757 14.1904C49.7297 11.4835 47.7292 10.3211 45.9916 10.1093Z"
                        fill="#F76D8D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Graphics*/}
        <Graphics />
      </section>
    </>
  );
};

export default Cta;
