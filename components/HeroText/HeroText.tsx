"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function HeroText({}: Props) {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollY, [0, 1100], ["0%", "80%"]);
  const y2 = useTransform(scrollY, [0, 1100], ["0", "-200%"]);
  return (
    <div className="absolute inset-0 z-20 overflow-x-hidden" ref={ref}>
      <motion.h1
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left text-[5rem] md:text-[9rem] lg:text-[10rem] 2xl:text-[12rem] 3xl:text-[13rem] md:ml-5  text-white flex flex-col"
      >
        Frontend
        <span className="-mt-10 md:-mt-20 xl:-mt-24 3xl:-mt-28">Web Dev</span>
      </motion.h1>
      <motion.h2
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" w-full md:w-auto text-center md:text-right text-[5rem] md:text-[9rem] lg:text-[10rem] 3xl:text-[10rem] text-white absolute flex flex-col md:right-10 bottom-7 lg:bottom-10"
      >
        Jagrath <span className="-mt-8 md:-mt-14 lg:-mt-16">Shetty</span>
      </motion.h2>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute px-10 lg:left-10 w-full md:w-auto bottom-64 md:bottom-[26rem] lg:bottom-56 3xl:left-10 3xl:bottom-40 flex justify-around space-x-5 lg:space-x-5 3xl:space-x-5 border-white text-white text-lg md:text-3xl lg:text-2xl 3xl:text-3xl"
      >
        <Link
          href="https://github.com/JJ-LXIX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-[7rem] h-[3rem] md:w-[14rem] md:h-[6rem] lg:w-[10rem] lg:h-[5rem] 2xl:w-[12rem] 2xl:h-[6rem] 3xl:w-[13rem] 3xl:h-[6rem] border-2   hover:scale-105 active:scale-95 transition duration-300 bg-black hover:bg-white hover:text-black">
            Github
          </button>
        </Link>

        <button
          onClick={() =>
            (window.location.href = "mailto:jagrathshettylxix@gmail.com")
          }
          className="w-[7rem] h-[3rem]  md:w-[14rem] md:h-[6rem] lg:w-[10rem] lg:h-[5rem] 2xl:w-[12rem] 2xl:h-[6rem] 3xl:w-[13rem] 3xl:h-[6rem] border-2   hover:scale-105 active:scale-95 transition duration-300 bg-black hover:bg-white hover:text-black"
        >
          Contact
        </button>
      </motion.div>
    </div>
  );
}
