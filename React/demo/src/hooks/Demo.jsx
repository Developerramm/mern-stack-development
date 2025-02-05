import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Now we study hooks </h3>
      <button
        className="btn btn-outline-success"
        onClick={() => setCount(count + 1)}
      >
        Increment{" "}
      </button>
      <span> {count} </span>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        Decrement{" "}
      </button>
    </div>
  );
};

export default Demo;
