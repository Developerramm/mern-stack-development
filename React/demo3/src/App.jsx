import React from "react";
import EventHandling from "./Components/EventHandling";
import ParentComponent from "./Components/ParentComponent";
import EventPropogation from "./Components/EventPropogation";

const App = () => {
  return (
    <div className="container">
      <EventPropogation />
      <EventHandling />
      <ParentComponent />
    </div>
  );
};

export default App;
