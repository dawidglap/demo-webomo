"use client";

import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@/types/menu";
import { onScroll } from "@/utils/scrollActive";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeSwitcher from "@/components/Header/DarkModeSwitcher";
import GlobalSearchModal from "@/components/GlobalSearch";

const menuData: Menu[] = [
  {
    label: "Leistungen",
    route: "/features",
  },
  {
    label: "Designs",
    route: "/#about",
  },
  {
    label: "Preise",
    route: "/price",
  },
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
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <header
        className={`navbar left-0 top-0 z-50 w-full border-stroke bg-white dark:border-stroke-dark dark:bg-black ${
          sticky
            ? "fixed border-b bg-opacity-95 backdrop-blur-sm dark:bg-opacity-95"
            : "absolute"
        }`}
      >
        <div className="container relative mx-auto max-w-[1400px] px-4">
          <div className="flex items-center justify-between">
            <div className="block w-1/4 py-4 lg:py-0">
              <Link href="/" className="block max-w-[145px] sm:max-w-[180px]">
                <span className="text-[30px] font-bold text-[#181C30] dark:text-white">
                  Webomo
                </span>
              </Link>
            </div>

            <button
              onClick={navbarToggleHandler}
              className={`${
                navbarOpen ? "hidden" : "flex"
              } navbarOpen absolute right-4 top-1/2 z-50 h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden`}
              aria-label="navbarOpen"
              name="navbarOpen"
            >
              <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
              <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
              <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
            </button>

            <button
              onClick={closeMenu}
              className={`${
                navbarOpen ? "flex" : "hidden"
              } navbarClose absolute right-4  top-1/2 z-50 h-10 w-10 -translate-y-1/2 flex-col items-center justify-center font-bold lg:hidden`}
              name="navbarClose"
              aria-label="navbarClose"
            >
              <span className="block h-[2px] w-7 rotate-45 bg-black dark:bg-white"></span>
              <span className="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white"></span>
            </button>

            <div
              className={`${
                navbarOpen ? "flex" : "hidden"
              } fixed inset-0 z-40 flex flex-col items-center justify-center bg-white bg-opacity-95 text-center dark:bg-black dark:bg-opacity-95 lg:relative lg:flex lg:flex-row lg:space-x-8 lg:bg-transparent lg:bg-opacity-100 lg:backdrop-blur-none`}
            >
              <nav className="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-12 lg:space-y-0">
                <ul className=" flex flex-col items-center space-y-6 lg:flex-row lg:space-x-12 lg:space-y-0 xl:space-x-14">
                  {menuData.map((item, index) => (
                    <li key={index} className="menu-item me-8">
                      <Link
                        href={item.route}
                        onClick={closeMenu} // Close menu on link click
                        className="text-base font-light text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}

                  {/* Kostenlose Beratung Button */}
                  <li className="lg:ml-4">
                    <Link
                      href="#"
                      onClick={closeMenu} // Close menu on button click
                      className="me-8 inline-flex h-[60px] items-center rounded-2xl bg-indigo-600 px-[30px] text-white hover:bg-opacity-90 dark:bg-indigo-500 dark:text-white dark:hover:bg-opacity-90 md:hidden"
                    >
                      Kostenlose Beratung
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden items-center justify-end space-x-4 lg:flex">
              <DarkModeSwitcher />
              <Link
                href="#"
                onClick={closeMenu} // Close menu on link click
                className="inline-flex items-center rounded-2xl bg-indigo-600 px-4 py-2 text-white hover:bg-opacity-90 dark:bg-indigo-500 dark:text-white dark:hover:bg-opacity-90"
              >
                Kostenlose Beratung
              </Link>

              {session ? (
                <div className="flex items-center">
                  <p className="mx-3 text-black dark:text-white">
                    {session?.user?.name}
                  </p>
                  <button
                    aria-label="SignOut"
                    onClick={() => {
                      signOut();
                      closeMenu();
                    }}
                    className="rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-opacity-90"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="#"
                  onClick={closeMenu} // Close menu on link click
                  className="inline-flex items-center rounded-2xl bg-black px-4 py-2 text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
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
