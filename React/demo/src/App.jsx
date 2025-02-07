import React from "react";
import ParentComp from "./components/ParentComp";
import ContextApiDemo from "./contextApi/ContextApiDemo";
import { BioProvier } from "./contextApi";

const App = () => {
  return (
    <div className="container">
      <h1>React App </h1>
      <BioProvier>
        <ContextApiDemo />
      </BioProvier>
    </div>
  );
};

export default App;
