import { useEffect, useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState<string>("");

  useEffect(() => {
    async function handleCopyEvent() {
      const copiedData = await navigator.clipboard.readText();
      if (copiedData) {
        setCopied(copiedData);
      }
    }
    document.addEventListener("copy", handleCopyEvent);

    return () => {
      document.removeEventListener("copy", handleCopyEvent);
    };
  }, []);

  // need to implment the when some copy that also appear in the copied

  function copy(text: string) {
    // attach to clipboard and set the Copy
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(text);
      })
      .catch(() => {
        setCopied((prev) => prev);
      });
  }

  return { copied, copy };
}
