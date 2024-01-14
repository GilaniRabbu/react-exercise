import { useRef } from "react";

const ChangeText = () => {
  let myHeadLine = useRef();

  const Change = () => {
    myHeadLine.current.innerHTML = "<ul><li>Item 1</li><li>Item 2</li></ul>";

    // Without current object
    // myHeadLine.innerHTML = "<ul><li>A</li><li>B</li></ul>";
  };

  return (
    <div>
      {/* Without current object */}
      {/* <h1 ref={(h1) => (myHeadLine = h1)}>This is h1 tag</h1> */}

      <h1 ref={myHeadLine}>This is h1 tag</h1>
      <button onClick={Change}>Change Text</button>
    </div>
  );
};

export default ChangeText;
