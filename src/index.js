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

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, document.getElementById("root"));
