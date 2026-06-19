import { useState } from "react";

function usePagination<P>(data: P[], itemPerPage: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(data.length > itemPerPage);

  const currentItem = data.slice(currentIndex, currentIndex + itemPerPage);

  function nextPage() {
    const newIndex = currentIndex + itemPerPage;
    if (newIndex < data.length) {
      setCurrentIndex(newIndex);
      if (newIndex + itemPerPage - 1 == data.length) setCanNext(false);
      else setCanNext(true);
    } else {
      setCanNext(false);
    }
    setCanPrev(true);
  }

  function prevPage() {
    const newIndex = currentIndex - itemPerPage;

    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
      if (newIndex === 0) setCanPrev(false);
      else setCanPrev(true);
    } else {
      setCanPrev(false);
    }
    setCanNext(true);
  }

  return { currentItem, prevPage, nextPage, canPrev, canNext };
}

export { usePagination };
