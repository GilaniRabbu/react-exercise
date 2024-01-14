import UseEffectFetch from "./component/useEffect/FetchMethod";
import TodoExample from "./component/useState/TodoExample";
import ChangeText from "./component/useRef/ChangeText";

const App = () => {
  return (
    <div>
      <UseEffectFetch />

      <br />

      <ChangeText />

      <br />

      <TodoExample />
    </div>
  );
};

export default App;
