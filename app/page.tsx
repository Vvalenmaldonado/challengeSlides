"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "~/components/button";
import Arrow from "../public/assets/arrow.svg";
import Logo from "../public/assets/logo.svg";

export default function HomePage() {

  const imageVariants = {
    hidden: { opacity: 0.5, x: '1000px',},
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.8}},
  };
  const componentVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut", delay:0.5}},
  };
  return (
    <section className=" mx-auto max-w-[1300px] flex flex-col justify-between items-center sm:px-5 overflow-hidden">
      <div className="flex lg:flex-row sm:flex-col items-center justify-between w-full gap-8 lg:px-4 ">
      <div className="lg:w-2/4 lg:text-start sm:text-center">
        <motion.span 
              initial="hidden" 
              animate="visible" 
              variants={componentVariants} 
        className="text-sm font-[300] leading-[24px] text-black">A B O U T — P E R S O N A L</motion.span>
        <motion.h1
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3, ease: "easeInOut"}}
         className="text-5xl font-[600]  text-black pt-2 pb-6"><span className="font-[400]">¡Hello!</span> I’m Angela Smith</motion.h1>
        <motion.p
               initial="hidden" 
               animate="visible" 
               variants={componentVariants} 
          className="text-[16px] font-[300] leading-[24px] text-[#141414]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
           ut aliquip ex ea commodo consequat.</motion.p>
           <motion.div
       initial="hidden" 
       animate="visible" 
       variants={componentVariants} >
           <Button className="my-8 lg:flex sm:hidden" svg={<Arrow className={"w-[12px] h-[12px] hover:text-[#ddf247]"}/>}>
            Get started 
           </Button>
           </motion.div>
      </div>
      <motion.div
        className="lg:w-[52%] sm:w-[80%]"
        initial="hidden" 
        animate="visible" 
        variants={imageVariants} 
      >
      <Image className="w-full"  src="/images/home.png" alt="Logo" quality={100} width={450} height={450} sizes="100%" />
      </motion.div>
      </div>
      <Button className="sm:mt-[24px] sm:mb-[14px] w-full max-w lg:hidden sm:flex sm:mx-4" svg={<Arrow className={"w-[12px] h-[12px] hover:text-[#ddf247]"}/>}>
            Get started 
      </Button>
      <Logo className={"w-[32px] h-[32px] lg:mt-5  hover:scale-110 transition-all duration-300 cursor-pointer "} />
    </section>
  );
}
