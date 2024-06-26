"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMedia } from "react-use";
import { Button } from "~/components/button";
import Arrow from "../public/assets/Arrow.svg";
import Logo from "../public/assets/logo.svg";

export default function HomePage() {
  const isMobile = useMedia("(max-width: 1024px", false);
  const imageUrl = isMobile ? "/images/homeMobile.png" : "/images/home.png";

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
    <section className="sm:pt-16 lg:py-20 mx-auto max-w-[675px] lg:max-w-[1352px] h-full flex flex-col justify-between items-center sm:px-[11px] relative">
      <div className=" flex lg:flex-row sm:flex-col items-center sm:justify-center lg:justify-between w-full h-full lg:gap-8 lg:px-4">
        <div className="lg:w-2/4 lg:text-start sm:text-center min-w-min lg:basis-[593px]">
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
            className="text-base font-light lg:text-[#141414] sm:text-black line-clamp-2 lg:line-clamp-none"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={componentVariants}
          >
            <Button
              className="my-8 lg:flex sm:hidden"
              svg={<Arrow className={"w-[12px] h-[12px] hover:text-accent"} />}
            >
              Get started
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="sm:my-6 lg:my-0 sm:w-full lg:w-auto relative self-stretch flex-1 lg:basis-[673px]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            className="sm:w-full sm:h-full lg:h-[740px] lg:w-auto object-contain"
            src={imageUrl}
            alt="Logo"
            quality={100}
            fill
            sizes="35vw"
            priority
          />
        </motion.div>
        <Button
          className="sm:max-h-[54px] w-full max-w-[369px] lg:hidden sm:flex sm:mx-4"
          svg={<Arrow className={"w-[12px] h-[12px] hover:text-accent"} />}
        >
          Get started
        </Button>
      </div>
      <Link
        aria-label="scroll to another section"
        className="flex items-center justify-center mx-auto mt-[11px] mb-6 lg:mb-0 lg:mt-0 relative lg:absolute lg:bottom-[20px] sm:bottom-0 w-[30px] h-[30px] lg:w-10 lg:h-10 cursor-pointer  z-10 "
        href={"/"}
      >
        <Logo className="sm:w-[27px] sm:h-[27px] lg:w-[32px] lg:h-[32px] " />
      </Link>
    </section>
  );
}
