import { useEffect, useRef, useState } from "react";

function useIdel(timeout: number) {
  const [isIdel, setIsIdel] = useState(false);

  function userAlive() {
    console.log("Event detected");
    setIsIdel(false);
  }
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    function runTimer() {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setIsIdel(false);
      setInterval(() => setIsIdel(true), timeout);
    }

    window.addEventListener("keydown", userAlive);
    window.addEventListener("mousemove", userAlive);
    window.addEventListener("scroll", userAlive);

    runTimer();

    return () => {
      window.removeEventListener("mousemove", userAlive);
      window.removeEventListener("keydown", userAlive);
      window.removeEventListener("scroll", userAlive);
    };
  }, [timeout]);

  return isIdel;
}

export { useIdel };
