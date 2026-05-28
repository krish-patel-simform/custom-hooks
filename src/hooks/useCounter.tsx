import { useState } from "react";

function useCounter(initValue = 0, step = 1) {
  if (!(typeof initValue === "number" || typeof step === "number"))
    throw new Error("useCounter must have argument in number type");

  const [count, setCount] = useState(initValue);

  function increment() {
    setCount((prev) => prev + step);
  }

  function decrement() {
    setCount((prev) => prev - step);
  }

  function reset() {
    setCount(initValue);
  }
  return { count, increment, decrement, reset };
}

export { useCounter };
