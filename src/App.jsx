import Protected from "./Components/Protected";
import Public from "./Components/Public";

import useAuth from "./Hooks/useAuth";

function App() {
  const [isLogin, token] = useAuth();
  return isLogin ? <Protected token={token} /> : <Public />;
}

export default App;