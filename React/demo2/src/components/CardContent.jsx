import React from "react";

const CardContent = ({ url, name, rating, genre, cast, description }) => {
  return (
    <div className="card col-md-4" style={{ width: "18rem",margin:".3rem" }}>
      <img src={url} className="card-img-top w-100" alt=""></img>
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
