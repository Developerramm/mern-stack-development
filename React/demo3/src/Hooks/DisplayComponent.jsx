import React from "react";

const DisplayComponent = ({inputValue}) => {
  return (
    <div>
      <h3>Display Component </h3>
      <h3>The Current input value is : {inputValue} </h3>
    </div>
  );
};

export default DisplayComponent;
