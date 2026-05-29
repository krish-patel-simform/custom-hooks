import { withDemo } from "../HOC/withDemo";
import { useOnlineStatus } from "../hooks/useOnelineStatus";

function DemoOfUseOnlineStatus() {
  const online = useOnlineStatus(false);
  return (
    <div>
      <p>User current status : {String(online)}</p>
    </div>
  );
}

const WithDemoUseOnlineStatus = withDemo(DemoOfUseOnlineStatus);

export default function UseOnlineStatusPage() {
  return <WithDemoUseOnlineStatus title="use Online Status" />;
}
