import { withDemo } from "../HOC/withDemo";
import { useIdel } from "../hooks/useIdel";

function DemoOfUseIdel() {
  const isIdel = useIdel(1000);
  return (
    <div>{isIdel ? <p>User is idel 😴</p> : <p>User is active 🟢</p>}</div>
  );
}

const WithDemoUseIdel = withDemo(DemoOfUseIdel);

export default function USeIdelPage() {
  return <WithDemoUseIdel title="Use Idel" />;
}
