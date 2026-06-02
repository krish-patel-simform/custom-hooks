import { useState } from "react";

function usePagination<P>(data: P[], itemPerPage: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(data.slice(0, itemPerPage));
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(data.length > itemPerPage);

  function getCurrentItem(index: number) {
    console.log(index);
    // handle canPrevious
    if (index + itemPerPage - 1 >= data.length) {
      setCanNext(false);
      // return;
    } else {
      setCanNext(true);
    }

    if (index <= 0) {
      setCanPrev(false);
    } else if (!canPrev) {
      setCanPrev(true);
    }

    const currentData = data.slice(index, index + itemPerPage);
    setCurrentItem(currentData);
    setCurrentIndex(index);
  }

  function nextPage() {
    const newIndex = currentIndex + itemPerPage;
    getCurrentItem(newIndex);
  }

  function prevPage() {
    const newIndex = currentIndex - itemPerPage;
    getCurrentItem(newIndex);
  }

  return { currentItem, prevPage, nextPage, canPrev, canNext };
}

export { usePagination };
