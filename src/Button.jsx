import colorNames from "colornames";
import React, { useState } from "react";
import "./App.css";
function Button() {
  const [colr, setColr] = useState("");
  return (
    <>
      <section className="mamad" style={{ backgroundColor: colr }}>
        ez
      </section>

      <input
        type="text"
        required
        autoFocus
        value={colr}
        onChange={(e) => setColr(e.target.value)}
      />
      <p style={{ backgroundColor: colr }}>kir</p>
      <button onClick={() => setColr("white")}>red misham</button>
    </>
  );
}
export default Button;
