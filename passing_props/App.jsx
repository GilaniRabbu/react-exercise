import Props from "./component/Props";
import Object from "./component/Object";
import Function from "./component/Function";
import "./assets/css/App.css";

const App = () => {
  const BtnClick = () => {
    alert("Boom 🎉✨");
  };

  const ItemObj = {
    name: "Hakim",
    age: 28,
    city: "Dhaka",
  };

  return (
    <div>
      <Props title="Learn React Props" />
      <br />
      <Object item={ItemObj} />
      <br />
      <Function Click={BtnClick} />
    </div>
  );
};

export default App;
