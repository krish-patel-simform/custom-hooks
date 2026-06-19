import { withDemo } from "../HOC/withDemo";
import { useKeyPress } from "../hooks/useKeyPress";

function DemOfUSeKeyPress() {
  const { isPressed } = useKeyPress("Escape");
  return (
    <div>
      <p>{isPressed ? "Escape is Pressed" : "Escape is not Pressed"}</p>
    </div>
  );
}

const WithDemoUseKeyPress = withDemo(DemOfUSeKeyPress);

export default function UseKeyPress() {
  return <WithDemoUseKeyPress title="Use KeyPressed" />;
}
