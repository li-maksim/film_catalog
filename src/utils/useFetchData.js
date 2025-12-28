import { useState, useEffect } from "react";

const API_KEY = "df81e74d-9485-422f-9797-131607f6670d";

const useFetchData = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorDetails = await response.text();
          throw new Error(
            `${response.status} ${response.statusText}: ${errorDetails}`
          );
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
