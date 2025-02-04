import React, { useState } from "react";

const InputComponet = ({ inputValue, SetInputValue }) => {
  return (
    <div>
      <h3>Input component </h3>
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={(e) => SetInputValue(e.target.value)}
      />
    </div>
  );
};

export default InputComponet;
