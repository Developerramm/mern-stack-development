import { createContext } from "react";

// step 1
export const BioContext = createContext();

// step 2
export const BioProvier = ({ children }) => {
  const data = [
    { name: "Ram Kumar", age: 30 },
    { name: "Sarita Kumari", age: 40 },
    { name: "Barkha Kumari", age: 33 },
  ];
  const age = 40;
  const name = "Ram Kumar maniyari";
  return (
    <BioContext.Provider value={{ data, name, age }}>
      {children}
    </BioContext.Provider>
  );
};
