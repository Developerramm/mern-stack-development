import React, { useState } from "react";
import MemoCount from "./MemoCount";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="row">
      <h3>React Momo Component </h3>
      <div className="col">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="btn btn-primary"
        >
          Increment{" "}
        </button>
        <span> {count} </span>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="btn btn-primary"
        >
          Decrement{" "}
        </button>
      </div>
      <MemoCount />
    </div>
  );
};

export default ReactMemo;
