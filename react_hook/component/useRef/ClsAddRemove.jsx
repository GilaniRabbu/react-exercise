import { useRef } from "react";

const ClsAddRemove = () => {
  let myHeadLine = useRef();

  const Change = () => {
    myHeadLine.current.classList.add("text-primary");
    myHeadLine.current.classList.remove("text-success");
  };

  return (
    <div>
      <h1 className="text-success" ref={myHeadLine}>
        Click button to change color
      </h1>
      <button onClick={Change}>Change ClassList</button>
    </div>
  );
};

export default ClsAddRemove;
