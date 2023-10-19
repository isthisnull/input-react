import colorNames from "colornames";
import React, { useState } from "react";
function Button() {
  const [colr, setColr] = useState("");
  return (
    <>
      <p style={{ backgroundColor: colr }}>kir</p>
      <button onClick={() => setColr("Blue")}>red misham</button>
    </>
  );
}
export default Button;
