import { useEffect } from "react";

function useLcoastorage<T>(key: string, initState: T) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(initState));
  }, [key, initState]);
}

export { useLcoastorage };
