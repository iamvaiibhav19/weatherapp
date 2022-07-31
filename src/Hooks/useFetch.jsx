import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [data, fetchData];
};

export default useFetch;
