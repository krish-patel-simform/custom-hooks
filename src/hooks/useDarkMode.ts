import { useState } from "react";

function useDarkMode(init: boolean) {
  const [darkMode, setDarkMode] = useState(init);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  return { darkMode, toggleTheme };
}

export { useDarkMode };
