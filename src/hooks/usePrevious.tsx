/* eslint-disable react-hooks/refs */
import { useEffect, useRef } from "react";

function usePrevious(state: unknown) {
  const prevStateRef = useRef(state);

  useEffect(() => {
    prevStateRef.current = state;
  }, [state]);

  return prevStateRef.current;
}

export { usePrevious };
