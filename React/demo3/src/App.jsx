import React from "react";
import EventHandling from "./Components/EventHandling";
import ParentComponent from "./Components/ParentComponent";
import EventPropogation from "./Components/EventPropogation";
import State from "./Hooks/State";
import Derived from "./Hooks/Derived";
import LiftStateUp from "./Hooks/LiftStateUp";

const App = () => {
  return (
    <div className="container">
      <LiftStateUp />
      <Derived />
      <State />
      <EventPropogation />
      <EventHandling />
      <ParentComponent />
    </div>
  );
};

export default App;
