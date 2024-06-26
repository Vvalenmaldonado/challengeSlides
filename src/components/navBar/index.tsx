"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Menu from "../../../public/assets/menu.svg";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  const menuVariants = {
    open: {
      display: "flex",
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      transitionEnd: {
        display: "none",
      },
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <nav
      ref={menuRef}
      className="fixed z-10 w-full flex flex-row items-center justify-end sm:pt-6  lg:py-6 lg:px-11 sm:px-6"
    >
      <motion.ul
        initial="closed"
        animate={openMenu ? "open" : "closed"}
        variants={menuVariants}
        className="gap-2 ml-2"
      >
        {["ABOUT", "PROJECTS", "CONTACT"].map((item, index) => (
          <motion.li
            key={item}
            initial="closed"
            animate={openMenu ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                transition: { delay: 0.15 * (3 - index) },
              },
              closed: { opacity: 0 },
            }}
          >
            <Link href={`/${item.toLowerCase()}`}>
              <span className="flex flex-row items-center group sm:text-[12px] lg:text-sm">
                {item}
                <span className="group-hover:text-accent ml-1 ">•</span>
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <button
        aria-label="open burger menu"
        className="group"
        onClick={handleOpenMenu}
      >
        <Menu
          className={`sm:w-[30px] sm:h-[30px] lg:w-10 lg:h-10 group-hover:text-accent ${
            openMenu ? "text-accent" : ""
          }`}
        />
      </button>
    </nav>
  );
};

export default NavBar;
