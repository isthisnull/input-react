import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "Reset":
      return { count: (state.count = 0) };
    case "KIRI":
      return { count: state.count + 2 };
    default:
      return state;
  }
};

const ReduceTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Click me</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset Me</button>
      <button onClick={() => dispatch({ type: "KIRI" })}>kiri</button>
    </>
  );
};

export default ReduceTutorial;
