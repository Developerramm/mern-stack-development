import React, { useState } from "react";

const Derived = () => {
  //   const users = [];
  //   console.log(users);

  const [user, setUsers] = useState([
    { name: "Ram Kumar", age: 30 },
    { name: "Sarita Kumari", age: 34 },
    { name: "Mamta Kumari", age: 34 },
    { name: "Monu Kumar", age: 40 },
  ]);
  return (
    <div>
      <h3>User List </h3>
      <ul>
        {user.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              {item.name} {item.age}
              {" Year olds"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Derived;
