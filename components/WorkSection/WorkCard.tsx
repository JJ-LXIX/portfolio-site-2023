import React, { Dispatch, SetStateAction, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Props = {
  work: {
    title: string;
    description: string;
    image1: StaticImageData;
    techStack: string[];
    classes: string;
    link: string;
    githubLink: string;
  };
  index: number;
};

export default function WorkCard({ work, index }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.3 }}
      viewport={{ once: true }}
      key={work.title}
      className={work.classes}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 z-20"
          >
            {/* Title */}
            <Link href={work.link} target="_blank" rel="noopener noreferrer">
              <div className="cursor-pointer py-2 px-4 rounded-2xl text-white absolute left-5 top-5 text-3xl font-semibold">
                {work.title}
              </div>
            </Link>
            {/* Arrow */}
            <Link href={work.link} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <div className="arrow"></div>
              </div>
            </Link>
            {/*Tech Stack */}
            <div className="absolute bottom-5 left-2 3xl:left-5 flex space-x-2">
              {work.techStack.map((tech) => (
                <div
                  key={tech}
                  className="border-2 py-2 px-2 3xl:px-4 border-white rounded-2xl text-white flex items-center justify-center"
                >
                  {tech}
                </div>
              ))}
            </div>
            {/* Github Link */}
            <Link
              href={work.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute  py-2 px-4 cursor-pointer text-lg font-semibold bg-black border-2 border-white animate-pulse text-white right-5 top-5 hover:scale-110 active:scale-95 transition duration-300">
                Github
              </div>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Image
        className="object-cover"
        fill
        src={work.image1}
        alt={work.description}
        sizes={
          index % 2 === 0 || index === 2
            ? "90vw"
            : "(max-width: 768px) 90vw, (max-width: 1024px) 90vw, 50vw"
        }
      />
    </motion.div>
  );
}
