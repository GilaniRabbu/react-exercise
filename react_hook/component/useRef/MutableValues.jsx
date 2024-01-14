import { useRef } from "react";

const MutableValues = () => {
  let myNumber = useRef(0);

  const Change = () => {
    myNumber.current++;
    console.log(`Clicked ${myNumber.current} Times`);
  };

  return (
    <div>
      <button onClick={() => Change()}>Click For Count</button>
    </div>
  );
};

export default MutableValues;
