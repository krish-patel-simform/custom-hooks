import { useState } from "react";

export function useShowMore<T>(data: T[], maxCount: number) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentData, setCurrentData] = useState(data);

  function setTag() {
    setIsExpanded((prev) => !prev);
  }

  function setData(newItem: T) {
    setCurrentData((prev) => [...prev, newItem]);
  }

  const tagData = isExpanded ? currentData : currentData.slice(0, maxCount);

  const allTagData = currentData;

  const moreCount = currentData.length - maxCount;

  const totalCount = currentData.length;

  return {
    setData,
    setTag,
    totalCount,
    expanded: isExpanded,
    tagData,
    allTagData,
    moreCount,
  };
}
