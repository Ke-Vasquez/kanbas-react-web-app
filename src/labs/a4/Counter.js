import React, { useState } from "react";
function Counter() {
  const [count, setCounter] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCounter(count + 1)}>
        Up
      </button>
      <button
        onClick={() => setCounter(count - 1)}>
        Down
      </button>
    </div>
  );
}
export default Counter;