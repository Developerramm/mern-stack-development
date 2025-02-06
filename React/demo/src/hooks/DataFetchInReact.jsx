import React, { useState } from "react";

const DataFetchInReact = () => {
  const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result) => result.json())
    .then((res) => setData(res))
    .catch((error) => console.log(error));
  return (
    <div className="row text-center">
      <h3>Data Fetch in React using API </h3>
      {
        data.length > 0 && data.map((item)=>{
            return <div key={item.id} className="col-md-3 border m-2">
               <h5> {item.title} </h5>
               <p> {item.body} </p>
            </div>
        })
      }
    </div>
  );
};

export default DataFetchInReact;
