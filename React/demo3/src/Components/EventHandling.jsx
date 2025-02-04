import React from "react";

const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log("button click ");
  };
  return (
    <div>
      <h3>Event handling </h3>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Click me{" "}
      </button>
      <button
        className="btn btn-success"
        onClick={() => handleButtonClick(event)}
      >
        click
      </button>
    </div>
  );
};

export default EventHandling;
