import Protected from "./Components/Protected";
import Public from "./Components/Public";

import useAuth from "./Hooks/useAuth";

function App() {
  const [isLogin] = useAuth();
  return isLogin ? <Protected /> : <Public />;
}

export default App;