import React from "react";

const ChildComponent = ({ data }) => {
  return (
    <div>
      <h3>This is child Component</h3>
      <button className="btn btn-outline-danger" onClick={(e) => data(e)}>
        {" "}
        click from child Component{" "}
      </button>
    </div>
  );
};

export default ChildComponent;
