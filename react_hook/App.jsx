// useEffect
import UseEffectFetch from "./component/useEffect/FetchMethod";

// useState
import TodoExample from "./component/useState/TodoExample";

// useRef
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
