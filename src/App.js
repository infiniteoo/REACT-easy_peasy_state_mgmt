import React from "react";
import Todos from "./components/Todos";

import model from "./model";
import AddTodo from "./components/AddTodo";
import { StoreProvider, createStore } from "easy-peasy";
import "./App.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="container">
        <Todos />
        <AddTodo />
      </div>
    </StoreProvider>
  );
}

export default App;
