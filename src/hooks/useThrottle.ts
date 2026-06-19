import { useEffect, useRef, useState } from "react";

function useThrottle<P>(state: P, delay: number) {
  const [throttleValue, setThrottleValue] = useState(state);

  // eslint-disable-next-line react-hooks/purity
  const lastexecutedRef = useRef(Date.now());

  useEffect(() => {
    const timerId = setTimeout(
      () => {
        const now = Date.now();

        if (now - lastexecutedRef.current >= delay) {
          executeThrottle();
          lastexecutedRef.current = now;
        }
      },
      delay - (Date.now() - lastexecutedRef.current),
    );

    function executeThrottle() {
      setThrottleValue(state);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [state, delay]);

  return throttleValue;
}

export { useThrottle };
