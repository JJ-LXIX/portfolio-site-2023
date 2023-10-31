import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [laptopPlus, setLaptopPlus] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setLaptopPlus(true);
    } else {
      setLaptopPlus(false);
    }
  }, []);

  return laptopPlus;
};
