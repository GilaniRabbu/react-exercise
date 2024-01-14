import { useState } from "react";

const ManageForm = () => {
  let [FormObj, SetFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const InputOnChange = (property, value) => {
    SetFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(FormObj);
    alert(JSON.stringify(FormObj));
  };

  return (
    <div className="container">
      <form onSubmit={FormSubmit}>
        <input
          onChange={(e) => {
            InputOnChange("fName", e.target.value);
          }}
          value={FormObj.fName}
          placeholder="First Name"
        />
        <br />
        <input
          onChange={(e) => {
            InputOnChange("lName", e.target.value);
          }}
          value={FormObj.lName}
          placeholder="Last Name"
        />
        <br />
        <select
          onChange={(e) => {
            InputOnChange("city", e.target.value);
          }}
          value={FormObj.city}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
        </select>
        <br />
        <input
          onChange={() => {
            InputOnChange("gender", "Male");
          }}
          checked={FormObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <br />
        <input
          onChange={() => {
            InputOnChange("gender", "Female");
          }}
          checked={FormObj.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ManageForm;
