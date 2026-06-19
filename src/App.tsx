import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import UseCounterPage from "./Pages/UseCounterPage";
import UseClipboardPage from "./Pages/UseClipboardPage";
import UseDarkModePage from "./Pages/UseDarkModePage";
import UseOnlineStatusPage from "./Pages/UseOnlineStatusPage";
import UseFetchPage from "./Pages/UseFetchPage";
import UsePreviousPage from "./Pages/UsePreviousPage";
import UsePaginationPage from "./Pages/UsePaginationPage";
import UseFormPage from "./Pages/UseFormPage";
import UseWindoPage from "./Pages/UseWindoPage";
import USeIdelPage from "./Pages/USeIdelPage";
import UseKeyPress from "./Pages/UseKeyPress";
import UseOnClickOutside from "./Pages/UseOnClickOutside";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />}>
        <Route path="useCounter" element={<UseCounterPage />} />
        <Route path="useClipboard" element={<UseClipboardPage />} />
        <Route path="useDarkMode" element={<UseDarkModePage />} />
        <Route path="useOnlineStatus" element={<UseOnlineStatusPage />} />
        <Route path="useFetch" element={<UseFetchPage />} />
        <Route path="usePrevious" element={<UsePreviousPage />} />
        <Route path="usePagination" element={<UsePaginationPage />} />
        <Route path="useForm" element={<UseFormPage />} />
        <Route path="useWindowSize" element={<UseWindoPage />} />
        <Route path="useIdel" element={<USeIdelPage />} />
        <Route path="useKeyPressed" element={<UseKeyPress />} />
        <Route path="useOnClickOutside" element={<UseOnClickOutside />} />
        <Route path="*" Component={() => <h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
