import { useReducer, useRef } from "react";

type State<T> = {
  data: T | null;
  error: string | undefined;
  loading: boolean;
};

const initState = {
  data: null,
  error: undefined,
  loading: false,
};

type Actions<T> =
  | { type: "SUCCESS"; payload: { data: T } }
  | { type: "FAIL"; payload: { error: string } }
  | { type: "PENGING"; payload: { loading: boolean } };

function fetchReducer<T>(state: State<T>, action: Actions<T>): State<T> {
  switch (action.type) {
    case "FAIL": {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case "PENGING": {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case "SUCCESS": {
      return {
        data: action.payload.data,
        error: undefined,
        loading: false,
      };
    }
    default:
      return state;
  }
}

export function useFetch<T>(url: RequestInfo, options?: RequestInit) {
  const [fetchState, dispatchFetchState] = useReducer(
    fetchReducer<T>,
    initState,
  );

  const controllerRef = useRef<null | AbortController>(null);

  async function execute() {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    console.log("new Request is sent");
    try {
      const response = await fetch(url, {
        ...options,
        signal: controllerRef.current?.signal,
      });

      if (!response.ok)
        throw new Error("Fail to fatch response is not success");

      const jsonRes = (await response.json()) as T;

      dispatchFetchState({ type: "SUCCESS", payload: { data: jsonRes } });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        console.log("Request Aborted");
        return;
      }

      if (error instanceof Error) {
        dispatchFetchState({ type: "FAIL", payload: { error: error.message } });
      }
    }
  }

  return { ...fetchState, execute };
}
