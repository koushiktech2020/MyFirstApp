import React, { useReducer } from "react";
const primaryState = 0;
const reducer = (state, value) => {
  switch (value) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
  }
};

function Reducer() {
  const [count, lag] = useReducer(reducer, primaryState);
  return (
    <div>
      <div>Count-{count}</div>
      <button onClick={() => lag("increment")}>Increment</button>
      <button onClick={() => lag("decrement")}>Decrement</button>
    </div>
  );
}

export default Reducer;
