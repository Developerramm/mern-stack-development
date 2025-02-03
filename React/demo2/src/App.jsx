import React from "react";
const App = () => {
  let person = {
    name: "Ram Kumar",
    program: "JavaScript",
    isProgrammer: true,
  };

  const village = () => {
    return "Maniyari ";
  };

  let age = 18;

  return (
    <div className="container">
      <h4>Dynamic Value in JSX </h4>
      <h1>Name : {person.name} </h1>
      <h3>Language : {person.program} </h3>
      <h3>Is programmer : {person.isProgrammer ? "Yes" : "No"} </h3>
      <p>Your village is : {village()} </p>
      <h3> {age >= 18 && "You can vote here "} </h3>
      <h3> {age > 20 && "You can marry"} </h3>
      <h3> {age > 21 || "Wait for marry "} </h3>
    </div>
  );
};

export default App;
