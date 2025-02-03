import React from "react";
import Card from "./components/Card";
import { DemoCard } from "./components/DemoCard";

const App = () => {
  return (
    <div className="container">
      <DemoCard />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;
