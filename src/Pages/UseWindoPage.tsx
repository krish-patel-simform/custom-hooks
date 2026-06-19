import { withDemo } from "../HOC/withDemo";
import { useWindowSize } from "../hooks/useWindowSize";

function DemoOfUseWindow() {
  const { height, width } = useWindowSize();

  return (
    <div>
      <p>Window height : {height}</p>
      <p>Window width : {width}</p>
    </div>
  );
}

const WithDemoUseWindow = withDemo(DemoOfUseWindow);

export default function UseWindoPage() {
  return <WithDemoUseWindow title="Use WindowSize" />;
}
