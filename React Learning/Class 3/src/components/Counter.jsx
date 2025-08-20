import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else if (count < 0) {
      setCount(count);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <div>Counter</div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
