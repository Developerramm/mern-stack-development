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

  const fetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
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
