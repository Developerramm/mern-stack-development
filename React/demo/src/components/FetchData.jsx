import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchApiData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((result) => result.json())
      .then((res) => {
        setData(res);
        setLoading(!loading);
      })
      .catch((error) => {
        setLoading(!loading);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  if (loading) {
    return (
      <div>
        <h3 className="text-bg-danger">Loading ....</h3>
      </div>
    );
  }
  console.log(data);
  return (
    <div className=" row">
      <h3>Fetch Api data in React js </h3>
    </div>
  );
};

export default FetchData;
