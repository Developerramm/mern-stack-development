import React from "react";

const EventPropogation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };
  const handleParentClick = () => {
    console.log("Parent clicked ");
  };
  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropogation;
    console.log("child clicked");
  };
  return (
    <div>
      <h4>Event Propogation in React js </h4>
      <div onClick={handleGrandParent}>
        <div onClick={handleParentClick}>
          <div onClick={handleChildClick}>child div</div>
        </div>
      </div>
    </div>
  );
};

export default EventPropogation;
