import React from "react";
import seriesData from "../api/seriesData.json";
const NetFlixCard = () => {
  console.log(seriesData);
  return (
    <div className="col-md-4">
      {seriesData.map((item, index) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={item.img_url} className="card-img-top" alt=""></img>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p>
                {" "}
                Rating <b> {item.rating} </b>{" "}
              </p>
              <p className="card-text"> Genre : {item.genre} </p>
              <p className="card-text"> Cast : {item.cast} </p>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NetFlixCard;
