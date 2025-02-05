import React from "react";

const ShortCircuit = () => {
  const result1 = null ?? "Ram Kumar";
  const result2 = undefined ?? "Maniyari";
  const result3 = "Ram Kumar " ?? "Your name is false";
  return (
    <div>
      <h3>Welcome to ShortCircuit Evalution </h3>
      <h3> Your result1 is {result1} </h3>
      <h3>Your result2 is {result2} </h3>
      <h3>Your name is {result3} </h3>
    </div>
  );
};

export default ShortCircuit;
