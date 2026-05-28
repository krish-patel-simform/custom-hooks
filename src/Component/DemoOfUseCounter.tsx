import { useCounter } from "../hooks/useCounter";

export default function DemoOfUseCounter() {
  const { count, decrement, increment, reset } = useCounter(0);
  return (
    <div>
      <h6>Demo of use Counter</h6>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
