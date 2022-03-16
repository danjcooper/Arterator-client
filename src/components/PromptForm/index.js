import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { CategorySelect } from "..";
const serverURL =
  "https://arterator.herokuapp.com/categories/categorieswithtags";

const PromptForm = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(serverURL);
      setCategoryData(data.data);
    };
    getData();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.medium.value);
    // console.log(e.target)
    // make form data object
    // save form data object
    const newformData = {
      style: null,
      medium: null,
      mood: null,
      subject: null,
      colorpalette: null,
    };
    setFormData(newformData);
  };

  return (
    <>
      <div>
        {categoryData ? (
          <form onSubmit={onSubmit}>
            {categoryData.map((i) => (
              <CategorySelect key={i.categoryid} category={i}/>
            ))}
            <button> get prompt </button>
          </form>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default PromptForm;
