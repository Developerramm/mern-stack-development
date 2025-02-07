import React from "react";
import GrandChild from "./GrandChild";

const ChildComp = ({ data }) => {
  console.log("child component");
  return (
    <div>
      <h3>child Component </h3>
      <GrandChild data={data} />
    </div>
  );
};

export default ChildComp;
