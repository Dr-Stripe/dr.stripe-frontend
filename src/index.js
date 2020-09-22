import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Docter from "./Doctor";
import Patient from "./Patient";
import * as serviceWorker from "./serviceWorker";

function Greeting() {
  const [isDoctor, setIsDoctor] = useState("main");
  if (isDoctor === "Doctor") {
    return <Doctor />;
  } else if (isDoctor === "Patient") {
    return <Patient />;
  } else {
    return <App setIsDoctor={setIsDoctor} />;
  }
}

ReactDOM.render(
  <Greeting isDoctor={"main"} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
