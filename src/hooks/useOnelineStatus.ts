import { useEffect, useState } from "react";

function useOnlineStatus(initStatus: boolean = navigator.onLine) {
  const [online, setOnline] = useState(initStatus);

  useEffect(() => {
    function handleOnline() {
      setOnline(true);
    }

    function handleOffline() {
      setOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
}

export { useOnlineStatus };
