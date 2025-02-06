import React, { useState } from "react";

const FormDemo = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name : </label>
            <input
              value={user.name}
              name="name"
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email : </label>
            <input
              onChange={handleInputChange}
              name="email"
              value={user.email}
              type="email"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password : </label>
            <input
              value={user.password}
              type="password"
              className="form-control"
              autoComplete="off"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone : </label>
            <input
              type="number"
              className="form-control"
              maxLength={10}
              minLength={10}
              autoComplete="off"
              value={user.phone}
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDemo;
