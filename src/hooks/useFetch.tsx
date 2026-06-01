import { useEffect, useState } from "react";

type ResponseData = {
  isSuccess: boolean;
  data: null | object;
  error: null | string;
};

function useFetch(
  url: RequestInfo | URL,
  options?: RequestInit,
): [boolean, ResponseData] {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ResponseData>({
    data: null,
    error: null,
    isSuccess: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error("Can not fetch the data");
        }
        const jsonData = await response.json();
        setData({
          data: jsonData,
          isSuccess: true,
          error: null,
        });
      } catch (error: unknown) {
        setData({
          isSuccess: false,
          data: null,
          error: error instanceof Error ? error.message : String(error),
        });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, options]);

  return [loading, data];
}

export { useFetch };
