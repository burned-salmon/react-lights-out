import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <h1>Lights Out!</h1>
        <p>It's too bright in here! Click a square to toggle it on or off, but this also toggles all squares touching it (not diagonals).</p>
        <p>Turn all the lights off to win!</p>
        <Board />
      </div>
  );
}

export default App;
