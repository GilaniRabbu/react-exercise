import IfElse from "./component/IfElse";
import ImmediatelyInvokedFunction from "./component/IIF";
import Logical from "./component/Logical";
import Switch from "./component/Switch";
import Ternary from "./component/Ternary";
import reactLogo from "./assets/images/react.svg";
import "./assets/css/App.css";

function App() {
  return (
    <div>
      <img src={reactLogo} className="logo" alt="React" />
      <IfElse />
      <br />
      <ImmediatelyInvokedFunction />
      <br />
      <Logical />
      <br />
      <Switch />
      <br />
      <Ternary />
    </div>
  );
}

export default App;
