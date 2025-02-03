import React from "react";

const CardContent = ({ url, name, rating, genre, cast, description }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={url} className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>
          {" "}
          Rating <b> {rating} </b>{" "}
        </p>
        <p className="card-text"> Genre : {genre} </p>
        <p className="card-text"> Cast : {cast} </p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CardContent;
