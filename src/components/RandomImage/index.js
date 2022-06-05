import React from "react";
import "./style.css";

const RandomImage = (randomImage) => {
  return (
    <>
      <div>
        <div>{randomImage}</div>
        <button>Fetch image prompt!</button>
      </div>
    </>
  );
};

export default RandomImage;
