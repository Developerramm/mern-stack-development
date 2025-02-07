import React from "react";

const GrandChild = ({ data }) => {
  console.log("grand Child component");
  return (
    <div className="row">
      <h3>Grand Child Component </h3>
      {data.map((item, index) => {
        return (
          <div className="col-md-4 border m-2" key={index}>
            <h3>Name : {item.name}</h3>
            <h4> Age : {item.age} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default GrandChild;
