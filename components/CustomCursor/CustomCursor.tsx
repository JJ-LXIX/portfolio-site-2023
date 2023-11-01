import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMousePosition from "@/utils/hooks/useMousePosition";

type Props = {
  clickable?: boolean;
};

export default function CustomCursor({ clickable }: Props) {
  const mousePosition = useMousePosition();
  const variants1 = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
  };
  const variants2 = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
    },
  };

  return (
    <>
      <motion.div
        variants={variants1}
        animate="default"
        transition={{ duration: 0, type: "tween", ease: "circOut" }}
        className="pointer-events-none fixed  top-0 z-50 h-3 w-3 overflow-hidden rounded-full bg-white mix-blend-difference"
      ></motion.div>
      <AnimatePresence>
        <motion.div
          variants={variants2}
          animate="default"
          exit="default"
          transition={{ duration: 0.2, type: "tween", ease: "circOut" }}
          className={`pointer-events-none fixed  top-0  z-40  
        overflow-hidden h-14 w-14 rounded-full mix-blend-difference bg-white  transition-colors duration-300 
        `}
        ></motion.div>
      </AnimatePresence>
    </>
  );
}
