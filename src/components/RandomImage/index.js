import React from "react";
import "./style.css";

const RandomImage = ({ image }) => {
  return (
    <>
      <div className="image">
        <img src={image} />
      </div>
    </>
  );
};

export default RandomImage;
