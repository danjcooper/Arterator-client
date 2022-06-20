import React from "react";
import "./style.css";

const RandomWord = ({ word }) => {
  return (
    <>
      <div className="random-word" style={{ color: "light blue" }}>
        <h1>{word}</h1>
      </div>
    </>
  );
};

export default RandomWord;
