import { useEffect, useState } from "react";

const FetchMethod = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    // fetch("https://dummyjson.com/quotes/25")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));

    (async () => {
      let response = await fetch("https://dummyjson.com/quotes/25");
      let result = await response.json();
      setData(result);
    })();
  }, []);

  return <div>{JSON.stringify(Data)}</div>;
};

export default FetchMethod;
