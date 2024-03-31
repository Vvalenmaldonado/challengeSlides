"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";
import Arrow from "../public/assets/arrow.svg";
import Logo from "../public/assets/logo.svg";

export default function HomePage() {
  const [imageUrl, setImageUrl] = useState("/images/home.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setImageUrl("/images/homeMobile.png");
      } else {
        setImageUrl("/images/home.png");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const componentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
    },
  };
  return (
    <section className="sm:py-16 lg:py-20 mx-auto max-w-[1352px] lg:h-full flex flex-col justify-between items-center sm:px-3 relative">
      <div className="flex lg:flex-row sm:flex-col items-center sm:justify-center lg:justify-between w-full  lg:h-full lg:gap-8 lg:px-4 ">
        <div className="lg:w-2/4 lg:text-start sm:text-center min-w-[400] ">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={componentVariants}
            className="sm:text-xs lg:text-sm font-normal"
          >
            A B O U T — P E R S O N A L
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:text-5xl sm:text-3xl pt-2 pb-6 font-normal"
          >
            ¡Hello!{" "}
            <span className="font-[600] text-nowrap">I’m Angela Smith</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={componentVariants}
            className="text-base font-light lg:text-[#141414] sm:text-black"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
            <span className="sm:hidden lg:inline">
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </span>
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={componentVariants}
          >
            <Button
              className="my-8 lg:flex sm:hidden"
              svg={
                <Arrow className={"w-[12px] h-[12px] hover:text-[#ddf247]"} />
              }
            >
              Get started
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="sm:my-6 lg:my-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            className="sm:w-full sm:h-full lg:h-[740px] lg:w-auto object-contain"
            src={imageUrl}
            alt="Logo"
            quality={100}
            width={673}
            height={740}
            sizes="100vw"
            priority
          />
        </motion.div>
        <Button
          className="w-full max-w lg:hidden sm:flex sm:mx-4"
          svg={<Arrow className={"w-[12px] h-[12px] hover:text-[#ddf247]"} />}
        >
          Get started
        </Button>
      </div>

      <Logo
        className={
          "absolute bottom-0 w-[32px] h-[32px]  hover:scale-110 transition-all duration-300 cursor-pointer "
        }
      />
    </section>
  );
}
