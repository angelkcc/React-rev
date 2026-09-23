import { useEffect, useState } from "react";

const useFetch = (url) => {
  //data
  const [data, setData] = useState([]);
  //loading
  const [isLoading, setIsLoading] = useState(false);
  //error
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;