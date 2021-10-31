import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <TodoWrapper />
    </GlobalProvider>
  );
}

export default App;
