import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { StoreProvider, createStore } from "easy-peasy";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Todos />
      <AddTodo />
    </div>
  );
}

export default App;
