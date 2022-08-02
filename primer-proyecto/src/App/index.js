import React from "react";
import "./index.css";
import { TodoProvider } from "../TodoContext/index.js";
import { AppUI } from "../App/AppUI"

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
