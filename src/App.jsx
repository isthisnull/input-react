import "./App.css";
import React, { useState } from "react";
import Color from "./Color.jsx";
import Input from "./Input.jsx";
import Button from "./Button";

function App() {
  const [meqdar, setMeqdar] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  return (
    <div className="Container">
      {/*       <p>What is the name?</p>
      <input
        placeholder="Eg. MFKs Arts"
        type="text"
        className="nameInput"
        style={{ width: "250px" }}
      />
      <div className="descriptionContainer">
        <p>Description?</p>
        <textarea
          name="textarea1"
          id="desInput"
          className="textareadescript"
          placeholder="Optional"
          style={{ width: "250px", height: "100px" }}
          maxLength={100}
          value={meqdar}
          onChange={(e) => setMeqdar(e.target.value)}
        ></textarea>
        <div className="counter">{meqdar.length}/100</div>
      </div> */}
      {/* <Color colorValue={colorValue} hexValue={hexValue} /> */}
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
      ss
    </div>
  );
}

export default App;
