"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  work: {
    title: string;
    description: string;
    mobileImage: StaticImageData;
    techStack: string[];
    classes: string;
    link: string;
    githubLink: string;
  };
  index: number;
};

export default function WorkCardMobile({ work, index }: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <div
      key={index}
      className="h-[100vh] flex items-center  justify-center sticky top-0"
    >
      <div
        ref={container}
        style={{ top: "-5%" }}
        className={`h-[75vh] w-[90%] rounded-3xl relative overflow-hidden mt-10  border-2 border-zinc-800`}
      >
        <div className="h-full w-full relative rounded-3xl overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/0 to-black/80 z-20"></div>
          <h3 className="absolute left-5 text-3xl top-6 z-30 text-white font-semibold">
            {work.title}
          </h3>
          {index === 2 ? (
            <h4 className="absolute left-5 text-lg top-28 z-30 text-white font-semibold">
              (Please visit through screens larger than 1350px wide)
            </h4>
          ) : null}
          <motion.div
            className="h-full w-full absolute inset-0"
            style={{ scale }}
          >
            <Image
              src={work.mobileImage}
              alt={work.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 90vw, 33vw"
            />
          </motion.div>

          {/* Link Buttons */}
          <Link href={work.link} target="_blank" rel="noopener noreferrer">
            <button className="z-50 w-24 h-12 md:w-48 md:h-20 bg-white text-lg font-semibold absolute left-10 bottom-10 active:scale-90 transition duration-300">
              Visit Site
            </button>
          </Link>
          <Link
            href={work.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="z-50 w-24 h-12 md:w-48 md:h-20 bg-black border-2 border-white text-white text-lg font-semibold absolute right-10 bottom-10 active:scale-90 transition duration-300">
              Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
