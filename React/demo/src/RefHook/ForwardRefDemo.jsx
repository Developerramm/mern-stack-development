import React, { useRef } from "react";
import InputField from "./InputField";

const ForwardRefDemo = () => {
  const useremail = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(useremail.current.value,password.current.value)
  };
  return (
    <div className="row">
      <h3>Forward Ref hook in React js </h3>
      <form onSubmit={handleFormSubmit}>
        <InputField label="useremail" ref={useremail} />
        <InputField label="password" ref={password} />

        <div className="col-auto">
          <button className="btn btn-primary" type="submit">
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForwardRefDemo;
