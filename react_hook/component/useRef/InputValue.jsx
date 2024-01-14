import { useRef } from "react";

const InputValue = () => {
  let firstName = useRef();
  let lastName = useRef();

  const Change = () => {
    let fName = firstName.current.value;
    let lName = lastName.current.value;

    alert(fName + " " + lName);
  };
  return (
    <div>
      <input ref={firstName} type="text" placeholder="First Name" />
      <input ref={lastName} type="text" placeholder="Last Name" />
      <button onClick={Change}>Get Value</button>
    </div>
  );
};

export default InputValue;
