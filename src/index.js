import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App
      actions={[
        { takeFrom: "player1", amount: 5 }, // now player1 has 15 points (20 - 5 )✅
        { takeFrom: "player2", amount: 10 }, // now player 2 has 10 points ✅
        { takeFrom: "player1", amount: 20 } // now player1 has 0 points (cap the amount) ❌
      ]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
