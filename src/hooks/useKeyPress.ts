//* use the keydown event that trigger the vent for the all keybard key
// * while keypress is trigger only for letter and aphabets

import { useEffect, useState } from "react";

export function useKeyPress(key: string) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    console.log("Useeffect is called");
    function handlekeyPressed(e: KeyboardEvent) {
      console.log(e);
      if (e.key === key) setIsPressed(true);
      else setIsPressed(false);
    }

    window.addEventListener("keydown", handlekeyPressed);

    return () => {
      window.removeEventListener("keydown", handlekeyPressed);
    };
  }, [key]);

  return { isPressed };
}
