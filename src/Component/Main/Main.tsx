import "./main.style.css";

import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="main-container">
      {/* <UseCounterPage />
      <UseClipboardPage /> */}
      <Outlet />
      {/* <Input type="text" name="Demo" /> */}
    </div>
  );
}
