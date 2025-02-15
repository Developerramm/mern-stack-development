import React from "react";
import seriesData from "../api/seriesData.json";
import CardContent from "./CardContent";
const NetFlixCard = () => {
  return (
    <div className="row" style={{margin : "3rem"}}>
      {seriesData.map((item, index) => {
        return (
          <CardContent
            key={index}
            url={item.img_url}
            name={item.name}
            rating={item.rating}
            genre={item.genre}
            cast={item.cast}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default NetFlixCard;
