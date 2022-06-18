import React, { useEffect, useState } from "react";
import { RandomImage } from "../../components";
import axios from "axios";
import "./style.css";

const imagesURL =
  "https://api.unsplash.com/photos/random?client_id=KlqKTIHfc9rS-ilCMxEZx_0-XF5g8PKXySEU5IiCVOM";

const RandomPrompts = () => {
  const [randomImage, setRandomImage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.get(imagesURL);
        setRandomImage(data.urls.thumb);
      } catch (error) {
        setErrorMessage("There was an error getting your random image");
      }
      // const response = await axios.get(imagesURL);
      // const data = await response.data;
      // console.log(data.urls);
      // setRandomImage(data.urls.thumb);
    };
    getData();
  }, []);

  return <>{randomImage && <RandomImage image={randomImage} />}</>;
};

export default RandomPrompts;
