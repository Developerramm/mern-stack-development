import React from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const data = [
    { name: "Ram Kumar", age: 30 },
    { name: "Sarita Kumari", age: 40 },
    { name: "Barkha Kumari", age: 33 },
  ];
  console.log("Parent Component");
  return (
    <div>
      <h3>Parent Component </h3>
      <ChildComp data={data} />
    </div>
  );
};

export default ParentComp;
