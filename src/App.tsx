import React from "react";
import { Counter } from "./features/counter/Counter";
import LaunchesDataGrid from "./features/spacex-launches/LaunchesDataGrid";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Home>
      <LaunchesDataGrid />
    </Home>
  );
}

export default App;
