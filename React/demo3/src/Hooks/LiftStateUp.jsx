import React, { useState } from "react";
import InputComponet from "./InputComponet";
import DisplayComponent from "./DisplayComponent";

const LiftStateUp = () => {
  const [inputValue, SetInputValue] = useState("");
  return (
    <div>
      <h1>Lift State from child to parent </h1>
      <InputComponet inputValue={inputValue} SetInputValue={SetInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

export default LiftStateUp;
