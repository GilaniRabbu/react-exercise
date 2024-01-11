import "./assets/css/App.css";
import ChangeAttr from "./component/ChangeAttr";
import ChangeText from "./component/ChangeText";
import ClsAddRemove from "./component/ClsAddRemove";
import InputValue from "./component/InputValue";
import MutableValues from "./component/MutableValues";
import CachingExpensiveComputations from "./component/CachingExpComputations";

const App = () => {
  return (
    <div>
      <ChangeAttr />

      <br />

      <ChangeText />

      <br />

      <ClsAddRemove />

      <br />

      <InputValue />

      <br />

      <MutableValues />

      <br />

      <CachingExpensiveComputations />
    </div>
  );
};

export default App;
