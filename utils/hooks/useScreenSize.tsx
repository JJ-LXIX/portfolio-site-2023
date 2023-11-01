import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

export const useScreenSize = () => {
  const [laptopPlus, setLaptopPlus] = useState(false);

  function handleResize() {
    if (window.innerWidth >= 1024) {
      setLaptopPlus(true);
    } else {
      setLaptopPlus(false);
    }
  }

  const throttledHandleResize = throttle(handleResize, 500);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  return laptopPlus;
};
