import React from "react";
import { Counter } from "./features/counter/Counter";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Home>
      <Counter />
    </Home>
  );
}

export default App;
