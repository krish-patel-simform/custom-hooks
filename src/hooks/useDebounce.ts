import { useEffect, useRef, useState } from "react";

function useDbounce<P>(state: P, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(state);
  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDebouncedValue({ ...state });
    }, delay);
  }, [state, delay]);
  return debouncedValue;
}

export { useDbounce };
