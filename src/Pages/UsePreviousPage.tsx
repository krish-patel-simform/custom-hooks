import { useState } from "react";
import { withDemo } from "../HOC/withDemo";
import { usePrevious } from "../hooks/usePrevious";
import Button from "../Component/Button/Button";

function DemoOfUsePrevious() {
  const [state, setState] = useState(0);
  const prevState = usePrevious(state);

  function handleIncrease() {
    setState((prev) => prev + 1);
  }

  return (
    <>
      <div>
        <p>Current State : {state}</p>
        <p>Previous State : {prevState as string}</p>
        <Button mode="Primary" title="Increase" onClick={handleIncrease} />
      </div>
    </>
  );
}

const WithDemoUsePrevious = withDemo(DemoOfUsePrevious);

export default function UsePreviousPage() {
  return <WithDemoUsePrevious title="Use Previous" />;
}
