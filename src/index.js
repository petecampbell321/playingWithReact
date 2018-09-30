import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let check = true;
let message;

if (check == true){
  message = <h2>Check is TRUE</h2>
} else {
  message = <h2>Check is FALSE</h2>
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick=''>SWAP</button>
      {message}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
