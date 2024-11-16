"use client";

import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@/types/menu";
import { onScroll } from "@/utils/scrollActive";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeSwitcher from "@/components/Header/DarkModeSwitcher";
import GlobalSearchModal from "@/components/GlobalSearch";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Import Font Awesome icons

const menuData: Menu[] = [
  { label: "Leistungen", route: "/#leistungen" },
  { label: "Designs", route: "/designs" },
  { label: "Preise", route: "/price" },
];

const Header = () => {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const { data: session } = useSession();
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Toggle body overflow when mobile menu is open/closed
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <header
        className={`navbar left-0 top-0 z-50 w-full transition-all duration-300 ${
          sticky
            ? "fixed bg-opacity-90 shadow-lg backdrop-blur-lg"
            : "absolute bg-opacity-0"
        }`}
      >
        <div className="container relative mx-auto max-w-[1400px] px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="z-50 block w-1/4">
              <Link href="/" className=" block max-w-[180px]">
                <span className="relative text-4xl font-bold tracking-wider text-[#181C30] transition-all duration-300 dark:text-white md:text-[48px]">
                  Webomo
                </span>
              </Link>
            </div>

            {/* Theme Switcher and Hamburger button for mobile */}
            <div className="flex items-center space-x-4 lg:hidden">
              <DarkModeSwitcher />
              <button
                onClick={navbarToggleHandler}
                className={`${
                  navbarOpen ? "hidden" : "flex"
                } navbarOpen h-10 w-10 flex-col items-center justify-center space-y-[6px] font-bold`}
                aria-label="navbarOpen"
                name="navbarOpen"
              >
                <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
                <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
                <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
              </button>
            </div>

            {/* Full-screen mobile menu */}
            <AnimatePresence>
              {navbarOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className=" fixed inset-0 z-40 flex h-screen flex-col items-center justify-center overflow-y-auto bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 text-center backdrop-blur-md dark:from-slate-800 dark:via-blue-950 dark:to-black lg:hidden"
                >
                  <button
                    onClick={closeMenu}
                    className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center text-4xl font-bold text-[#000] dark:text-white"
                    aria-label="closeNavbar"
                    name="closeNavbar"
                  >
                    ✕
                  </button>

                  <motion.nav
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.4,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                    className="flex flex-col items-center space-y-10"
                  >
                    <ul className="flex flex-col items-center space-y-10">
                      {menuData.map((item, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <Link
                            href={item.route}
                            onClick={closeMenu}
                            className="text-3xl font-semibold uppercase text-black transition-all duration-300 hover:text-primary dark:text-white"
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Button and Social Media Links - Fade in together after menu items */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: menuData.length * 0.4 + 0.2,
                        duration: 0.5,
                      }}
                      className="mt-8 flex flex-col items-center space-y-4"
                    >
                      <Link
                        href="#"
                        onClick={closeMenu}
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400"
                      >
                        Kostenlose Beratung
                      </Link>

                      <div className="border-gray-300 dark:border-gray-600 flex space-x-4 border-t pt-4">
                        <Link
                          href="https://facebook.com"
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white"
                        >
                          <FaFacebookF />
                        </Link>
                        <Link
                          href="https://instagram.com"
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white"
                        >
                          <FaInstagram />
                        </Link>
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white"
                        >
                          <FaTwitter />
                        </Link>
                      </div>
                    </motion.div>
                  </motion.nav>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <nav>
                <ul className="flex space-x-12">
                  {menuData.map((item, index) => (
                    <li key={index} className="menu-item relative">
                      <Link
                        href={item.route}
                        className={`text-2xl font-light text-black transition-all duration-300 hover:text-primary dark:text-white ${
                          pathUrl === item.route
                            ? "rounded-full border-2 border-primary px-2 dark:border-white"
                            : ""
                        }`}
                      >
                        <span className="group relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full dark:bg-white"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right-side icons and CTA button for desktop */}
            <div className="hidden items-center justify-end space-x-4 lg:flex">
              <DarkModeSwitcher />
              <Link
                href="#"
                onClick={closeMenu}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400"
              >
                Kostenlose Beratung
              </Link>

              {session ? (
                <div className="flex items-center space-x-4">
                  <p className="text-black dark:text-white">
                    {session?.user?.name}
                  </p>
                  <button
                    aria-label="SignOut"
                    onClick={() => {
                      signOut();
                      closeMenu();
                    }}
                    className="rounded-full bg-primary px-4 py-2 text-base font-medium text-white shadow-lg hover:bg-opacity-90"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="#"
                  onClick={closeMenu}
                  className="inline-flex items-center rounded-full bg-black px-4 py-2 text-white shadow-lg transition-all duration-300 hover:bg-opacity-90 dark:bg-white dark:text-black"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
