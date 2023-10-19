import React from "react";
import "./App.css";

const Color = ({ colorValue, hexValue }) => {
  return (
    <section className="square" style={{ backgroundColor: { colorValue } }}>
      <p>{colorValue ? colorValue : "empty"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Color.defualtProps = {
  colorValue: "empty",
};

export default Color;
