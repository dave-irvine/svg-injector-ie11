import React from "react";
import ReactDOM from "react-dom";
import ReactSVG from "react-svg";

function App() {
  return (
    <div>
      <ReactSVG src="img/pixelbits.svg" />
    </div>
  );
}

/* uncomment me to pull core-js polyfills in via babel-preset-env + useBuiltIns: usage */
/*
const arr = Array.from("foo");
console.log(arr);
*/

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, document.getElementById("root"));
