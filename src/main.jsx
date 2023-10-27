import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Test from "./test.jsx";
import Color from "./Color.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import ReduceTutorial from "./Reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/*     <Button /> */}
    <ReduceTutorial />
  </React.StrictMode>
);
