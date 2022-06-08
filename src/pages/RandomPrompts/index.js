import React, { useEffect, useState } from "react";
import { RandomImage } from "../../components";
import axios from "axios";
import "./style.css";

const imagesURL =
  "https://api.unsplash.com/photos/random?client_id=KlqKTIHfc9rS-ilCMxEZx_0-XF5g8PKXySEU5IiCVOM";

const RandomPrompts = () => {
  const [randomImage, setRandomImage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(imagesURL);
      const data = await response.data;
      console.log(data.urls);
      setRandomImage(data.urls.thumb);
    };
    getData();
  }, []);

  return (
    <>
      <RandomImage image={randomImage} />
    </>
  );
};

export default RandomPrompts;
