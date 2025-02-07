import React, { useContext } from "react";
import Parent from "./Parent";
import { BioContext } from ".";

const ContextApiDemo = () => {
  const { name } = useContext(BioContext);
  return (
    <div>
      <h3>context Api </h3>
      <h3>Name in parent component {name} </h3>
      <Parent />
    </div>
  );
};

export default ContextApiDemo;
