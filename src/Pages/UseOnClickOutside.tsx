import { useRef } from "react";
import { withDemo } from "../HOC/withDemo";
import { useOnClickOutside } from "../hooks/useClickOutside";

function DemoOfOnClickOutside() {
  const ref = useRef<HTMLDivElement | null>(null);

  function onClickOutside() {
    alert("you clicked outside of the div");
  }

  useOnClickOutside(ref, onClickOutside);

  return (
    <div
      ref={ref}
      style={{ height: "300px", width: "300px", border: "1px solid black" }}
    ></div>
  );
}

const WithDemoUseClickOutside = withDemo(DemoOfOnClickOutside);

export default function UseOnClickOutside() {
  return <WithDemoUseClickOutside title="Use onClickOutside" />;
}
