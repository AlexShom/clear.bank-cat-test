import React from "react";
import "./App.css";
import Graph from "./components/Graph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ClearBank - Cat API</h1>
        <h4 style={{ marginTop: "0px" }}>Created by Alexander Shomalistos</h4>
      </header>
      <Graph />
    </div>
  );
}

export default App;
