import React, { useContext } from "react";
import Parent from "./Parent";
import { BioContext, useBioContext } from ".";

const ContextApiDemo = () => {
  const { name } = useBioContext();
  return (
    <div>
      <h3>context Api </h3>
      <h3>Name in parent component {name} </h3>
      <Parent />
    </div>
  );
};

export default ContextApiDemo;
