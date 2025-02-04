import React, { useState } from "react";

const State = () => {
  let value = 0;
  const handleButtonClick = () => {
    value = value + 1;
    console.log(value);
  };

  //   console.log(useState())
  const [count, setCount] = useState(0);

  const handleButtonIncrement = () => {
    setCount(() => count + 1);
  };
  const handleButtonDecrement = () => {
    setCount(() => count - 1);
  };

  return (
    <div>
      <h3>React js State management </h3>
      <h3> {value} </h3>
      <button onClick={handleButtonClick}>Increment </button>
      <br />
      <br />
      <br />
      <button
        className="btn btn-outline-danger"
        onClick={handleButtonDecrement}
      >
        Decrement{" "}
      </button>
      &nbsp;&nbsp;
      <span> {count} </span>
      &nbsp;&nbsp;
      <button
        className="btn btn-outline-primary"
        onClick={handleButtonIncrement}
      >
        Increment{" "}
      </button>
    </div>
  );
};

export default State;
