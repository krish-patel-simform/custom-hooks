import { useDarkMode } from "../hooks/useDarkMode.ts";
import { withDemo } from "../HOC/withDemo.tsx";
import Button from "../Component/Button/Button.tsx";

function DemoOfUseDarkMode() {
  const { darkMode, toggleTheme } = useDarkMode(true);

  return (
    <>
      <div className="flex flex-col items-center">
        <p>Current mode is : {darkMode ? "dark" : "light"} mode</p>
        <Button mode="Primary" title="Toggle Dark Mode" onClick={toggleTheme} />
      </div>
    </>
  );
}

const WithDemoUseDarkMode = withDemo(DemoOfUseDarkMode);

export default function UseDarkModePage() {
  return <WithDemoUseDarkMode title="Use Dark Mode" />;
}
