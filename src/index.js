import React from "react";
import ReactDom from "react-dom";
const App = function() {
  return <div>Hi there! </div>;
};

ReactDom.render(<App />, document.querySelector(".root"));
