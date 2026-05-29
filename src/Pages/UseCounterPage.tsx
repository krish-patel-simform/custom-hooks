import Button from "../Component/Button/Button";
import { withDemo } from "../HOC/withDemo";
import { useCounter } from "../hooks/useCounter";

function DemoOfUseCounter() {
  const { count, decrement, increment, reset } = useCounter(0);
  return (
    <div className="flex flex-col items-center">
      <section>
        <p>Count : {count}</p>
      </section>

      <section className="flex gap-4">
        <Button title="Increment" mode="Primary" onClick={increment} />
        <Button title="Decrement" mode="Primary" onClick={decrement} />
        <Button title="Reset" mode="Secondary" onClick={reset} />
      </section>
    </div>
  );
}

const WithDemoUseCounter = withDemo(DemoOfUseCounter);

export default function UseCounterPage() {
  return <WithDemoUseCounter title="Use Counter Hook" />;
}
