import React, { useState } from "react";

const StateHookPrac1 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  const handleButtonIncrement = () => {
    if (count > 100) return;
    setCount(count + value);
  };
  const handleButtonDecrement = () => {
    if (count === 0) return;
    setCount(count - value);
  };

  const handleButtonReset = () => {
    setCount(0);
  };

  const handleButtonValueSet = (value) => {
    let val = Number.parseInt(value);
    setValue(val);
  };

  return (
    <div className="row">
      <h1>State Hook practice </h1>
      <p> Count Value {count} </p>

      <div className="col">
        <input
          type="number"
          value={value}
          onChange={(e) => handleButtonValueSet(e.target.value)}
          className="form-control mb-2"
        />
        <button onClick={handleButtonIncrement} className="btn btn-primary">
          Increment{" "}
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleButtonDecrement} className="btn btn-primary">
          Decrement
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleButtonReset} className="btn btn-primary">
          Reset
        </button>
      </div>
    </div>
  );
};

export default StateHookPrac1;
