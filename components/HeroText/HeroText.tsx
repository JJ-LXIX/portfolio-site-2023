import { useRef } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  useTransform,
} from "framer-motion";
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
    <motion.div className="absolute inset-0  z-20" ref={ref}>
      <motion.h1
        style={{ y }}
        className="3xl:text-[13rem] text-white flex flex-col 3xl:ml-5"
      >
        Frontend
        <span className="3xl:-mt-28">Web Dev.</span>
      </motion.h1>
      <motion.h2
        style={{ y: y2 }}
        className="3xl:text-[10rem] text-white absolute flex flex-col right-10 bottom-10"
      >
        Jagrath <span className="3xl:-mt-16 self-end">Shetty</span>
      </motion.h2>

      {/* CTA Button */}
      <div className="absolute 3xl:left-10 3xl:bottom-40 flex 3xl:space-x-5 border-white text-white 3xl:text-3xl">
        <Link
          href="https://github.com/JJ-LXIX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="3xl:w-[13rem] 3xl:h-[6rem] border-2   hover:scale-105 active:scale-95 transition duration-300 bg-black hover:bg-white hover:text-black">
            Github
          </button>
        </Link>
        <button className="3xl:w-[13rem] 3xl:h-[6rem] border-2   hover:scale-105 active:scale-95 transition duration-300 bg-black hover:bg-white hover:text-black">
          Contact
        </button>
      </div>
    </motion.div>
  );
}
