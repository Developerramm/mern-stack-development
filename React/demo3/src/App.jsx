import React from "react";
import EventHandling from "./Components/EventHandling";
import ParentComponent from "./Components/ParentComponent";
import EventPropogation from "./Components/EventPropogation";
import State from "./Hooks/State";

const App = () => {
  return (
    <div className="container">
      <State />
      {/* <EventPropogation />
      <EventHandling />
      <ParentComponent /> */}
    </div>
  );
};

export default App;
