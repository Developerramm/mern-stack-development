import React from "react";
import NetFlixCard from "./components/NetFlixCard";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <ProfileCard
          name = "Ram Kumar"
          age = {25}
          greeting = {
            <div>
              <strong>Hello How are you ?</strong>
            </div>
          }
        >

        <p>contact me to my mobile number</p>
        <p>address is noida </p>

        </ProfileCard>
        <NetFlixCard />
      </div>
    </div>
  );
};

export default App;
