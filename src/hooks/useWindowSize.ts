import { useEffect, useState } from "react";
import { useDbounce } from "./useDebounce";

type WindoSizeState = {
  height: number;
  width: number;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindoSizeState>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const debouncedValue = useDbounce(windowSize, 1000);
  // const throttleValue = useThrottle(windowSize, 1000);

  useEffect(() => {
    function getWindowSize() {
      console.log("Event trigger");
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", getWindowSize);

    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, []);
  return debouncedValue;
}

export { useWindowSize };
