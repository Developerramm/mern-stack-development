import React, { useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h3>Use Call back hook in react js </h3>
      <button className="btn btn-primary" onClick={increment}>
        Increment{" "}
      </button>
      <span> {count} </span>
      <button className="btn btn-primary" onClick={decrement}>
        decrement
      </button>
    </div>
  );
};

export default UseCallback;
