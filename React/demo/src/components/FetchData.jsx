import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  const fetchApiData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((result) => result.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
    
  };

  useEffect(() => {
    fetchApiData();
  }, []);


  if(data === null){
    return <div>
        <h3 className="text-bg-danger">Loading ....</h3>
    </div>
  }
  console.log(data)
  return (
    <div className=" row">
      <h3>Fetch Api data in React js </h3>
    </div>
  );
};

export default FetchData;
