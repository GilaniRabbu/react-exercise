import { useRef } from "react";

const ChangeAttr = () => {
  let myImg = useRef();

  const Change = () => {
    myImg.current.src = "https://placehold.co/600x400?text=Hello+World";
    myImg.current.setAttribute("width", "500px");
    myImg.current.setAttribute("height", "300px");
  };

  return (
    <div>
      <button onClick={Change}>Click</button>
      <br />
      <br />
      <img ref={myImg} src="https://placehold.co/600x400" alt="..." />
    </div>
  );
};

export default ChangeAttr;
