import React from "react";
import ReactDOM from "react-dom";
import { Transactions } from "./containers/transactions/Transactions";

function App() {
  return (
      <div className="App">
        <h1>Transactions</h1>
        <Transactions/>
      </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
