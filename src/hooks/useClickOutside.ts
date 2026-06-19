//*  useOnClickOutside: Detects when a user clicks outside the given DOM node and runs a callback. This hook doesn't return anything; it just listens to outside clicks.

import { useEffect, type RefObject } from "react";

// import { useEffect, type RefObject } from "react";

// export function useOnClickOutside<T extends HTMLElement>(
//   ref: RefObject<T | null>,
//   handler: () => void,
// ) {
//   // check if user has clicked ourside of that ref?

//   useEffect(() => {
//     function handleClick(e: PointerEvent) {
//       const target = e.target;
//       const ele = ref.current;

//       if (ele && target !== ele) {
//         handler();
//       }
//     }
//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, [handler, ref]);
// }

//* 1 : attach a lister on document to allow to detetch the click outside of it
//* 2 : check in handler if event.target == ref.curent means click from the inside
//* 3 : else click from the outside

export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void,
) {
  useEffect(() => {
    function handleClick(e: PointerEvent) {
      const target = e.target;
      const ele = ref.current;
      if (target && ele && target !== ele) {
        handler();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, handler]);
}
