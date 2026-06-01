import { useState } from "react";

function usePagination<P>(data: P[], itemPerPage: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(data.slice(0, itemPerPage));
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(data.length > itemPerPage);

  function getCurrentItem(index: number) {
    const currentData = data.slice(index, index + itemPerPage);
    setCurrentItem(currentData);
  }

  function nextPage() {
    const newIndex = currentIndex + itemPerPage;
    if (newIndex >= data.length) {
      setCanNext(false);
      return;
    } else {
      setCanNext(true);
      getCurrentItem(newIndex);
      setCurrentIndex(newIndex);
    }
  }

  function prevPage() {
    const newIndex = currentIndex - itemPerPage;
    if (newIndex < 0) {
      setCanPrev(false);
      return;
    } else {
      setCanPrev(true);
      getCurrentItem(newIndex);
      setCurrentIndex(newIndex);
    }
  }

  return { currentItem, prevPage, nextPage, canPrev, canNext };
}

export { usePagination };
