import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterBottom from "@/components/Footer/FooterBottom";
import { FooterMenu } from "@/types/footerMenu";

const footerNavData: FooterMenu[] = [
  {
    title: "Services",
    navItems: [
      {
        label: "Social Media Strategy",
        route: "#",
      },
      {
        label: "Content Creation",
        route: "#",
      },
      {
        label: "Analytics & Insights",
        route: "#",
      },
      {
        label: "Paid Advertising",
        route: "#",
      },
    ],
  },
  {
    title: "About Webomo",
    navItems: [
      {
        label: "Our Story",
        route: "#",
      },
      {
        label: "Team",
        route: "#",
      },
      {
        label: "Careers",
        route: "#",
      },
      {
        label: "Partnerships",
        route: "#",
      },
    ],
  },
  {
    title: "Resources",
    navItems: [
      {
        label: "Blog",
        route: "#",
      },
      {
        label: "Case Studies",
        route: "#",
      },
      {
        label: "Guides",
        route: "#",
      },
      {
        label: "Webomo Academy",
        route: "#",
      },
    ],
  },
  {
    title: "Support",
    navItems: [
      {
        label: "FAQs",
        route: "#",
      },
      {
        label: "Contact Us",
        route: "#",
      },
      {
        label: "Community Forum",
        route: "#",
      },
      {
        label: "Help Center",
        route: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#F8FAFB] pb-[46px] pt-[95px] dark:bg-[#15182A]">
          <div className="container max-w-[1390px]">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-4/12 xl:w-5/12">
                <div className="mb-11 max-w-[320px]">
                  <Link href="/" className="mb-8 inline-block">
                    {/* Logo images */}
                    {/* <Image
                      width={173}
                      height={34}
                      src={"/images/logo/logo.svg"}
                      alt="Logo"
                      priority
                      className="block max-w-full dark:hidden"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Image
                      width={173}
                      height={34}
                      src={"/images/logo/logo-white.svg"}
                      alt="Logo"
                      priority
                      className="hidden max-w-full dark:block"
                      style={{ width: "auto", height: "auto" }}
                    /> */}
                    <span className="text-[30px] font-bold text-[#181C30] dark:text-white">
                      Webomo
                    </span>
                  </Link>
                  <p className="text-base text-body">
                    Webomo provides expert social media solutions for businesses
                    looking to elevate their online presence and engage
                    audiences effectively. Join us to unlock your brand’s
                    potential.
                  </p>
                </div>
              </div>

              <div className="w-full px-4 lg:w-8/12 xl:w-7/12">
                <div className="-mx-4 flex flex-wrap">
                  {footerNavData.map((group, groupIndex) => (
                    <div
                      key={groupIndex}
                      className={`w-full px-4 sm:w-1/2 md:w-2/12 lg:w-2/12 ${groupIndex === 0 ? "md:w-2/12 lg:w-2/12" : groupIndex === 3 ? "md:w-4/12 lg:w-4/12" : "md:w-3/12 lg:w-3/12"}`}
                    >
                      <div className="mb-11">
                        <h3 className="mb-8 text-[22px] font-medium text-black dark:text-white">
                          {group.title}
                        </h3>

                        <ul className="space-y-[10px]">
                          {group.navItems &&
                            group.navItems.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href={item.route}
                                  className="inline-block text-base text-body hover:text-primary"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
