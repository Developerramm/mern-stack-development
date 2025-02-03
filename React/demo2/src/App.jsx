import React from "react";


const App = () => {
  let person = {
    name : "Ram Kumar",
    program : "JavaScript",
    isProgrammer : true,
  }

  const village = ()=>{
    return "Maniyari ";
  }


  return (
    <div className="container">
      <h4>Dynamic Value in JSX </h4>
      <h1>Name : {person.name} </h1>
      <h3>Language : {person.program} </h3>
      <h3>Is programmer : {person.isProgrammer ? "Yes" : "No"} </h3>
      <p>Your village is :  {village()} </p>
    </div>
  );
};

export default App;
