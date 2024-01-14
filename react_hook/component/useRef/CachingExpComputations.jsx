import { useRef } from "react";

const CachingExpensiveComputations = () => {
  let APIData = useRef();
  let myTag = useRef();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/quotes/26");
    APIData.current = await response.json();
  };

  const showData = () => {
    myTag.current.innerHTML = JSON.stringify(APIData.current);
  };

  return (
    <div>
      <p ref={myTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default CachingExpensiveComputations;
