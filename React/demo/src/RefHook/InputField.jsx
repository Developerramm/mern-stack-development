import React, { forwardRef, useId } from "react";

const InputField = forwardRef((props, ref) => {
  const id = useId();
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {" "}
        {props.label}{" "}
      </label>
      <input type="text" className="form-control" ref={ref} />
    </div>
  );
});

export default InputField;
