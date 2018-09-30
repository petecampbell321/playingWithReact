import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Card from "./components/Card/Card";

let check = true;
let message;
const chance = Math.random() < 0.5;

if (check === true) {
  message = <h2>Check is TRUE</h2>;
} else {
  message = <h2>Check is FALSE</h2>;
}

function App() {
  return (
    <div className="App">
      <h1>React Testing</h1>
      {message}
      <Card />
      <Card />
      <Card />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
