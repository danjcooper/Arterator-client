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
      // console.log(response.data);
      // const data = await response.data;
      setRandomImage(response.data);
    };
    getData();
  }, []);

  return <>{<RandomImage key={randomImage.id} props={randomImage} />}</>;
};

export default RandomPrompts;
