import React from "react";
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
