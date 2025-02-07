import React, { useId } from "react";

const UseId = () => {
  const id = useId();
  return (
    <div className="row">
      <div className="col">
        <h3>Use Id hook in React js </h3>
        <div className="mb-3">
          <label htmlFor={id} className="form-label">
            Name :{" "}
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor={id} className="form-label">
            Email :{" "}
          </label>
          <input type="email" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default UseId;
