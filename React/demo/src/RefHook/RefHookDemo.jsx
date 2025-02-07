import React, { useRef } from "react";

const RefHookDemo = () => {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    console.log(data);
  };
  return (
    <div className="row">
      <h3>useRef Hook in React js </h3>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Name : </label>
          <input
            type="text"
            className="form-control"
            id="name"
            autoCapitalize="on"
            autoComplete="off"
            ref={username}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email : </label>
          <input
            type="email"
            className="form-control"
            id="email"
            autoCapitalize="on"
            autoComplete="off"
            ref={email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">password : </label>
          <input
            type="password"
            className="form-control"
            id="password"
            autoCapitalize="on"
            autoComplete="off"
            ref={password}
          />
        </div>
        <div className="col-auot">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RefHookDemo;
