import React, { useContext } from "react";
import { BioContext } from ".";

const Child = () => {
  const { data, name, age } = useContext(BioContext);
  console.log(data);
  console.log(name, age);
  return (
    <div>
      <h3>Child Component </h3>
    </div>
  );
};

export default Child;
