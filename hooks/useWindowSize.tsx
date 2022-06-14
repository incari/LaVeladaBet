import { useEffect, useState } from "react";

type windowSize = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: 700,
    height: 393,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        const width = window.innerWidth > 768 ? 768 : window.innerWidth;
        setWindowSize({
          width,
          height: (width * 9) / 16,
        });
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};
