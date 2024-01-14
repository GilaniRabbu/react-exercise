import { useState } from "react";

const MethodCounter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click Add</button>
      <button onClick={() => setNumber(number - 1)}>Click Minus</button>
    </div>
  );
};

export default MethodCounter;
