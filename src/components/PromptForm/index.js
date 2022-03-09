import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { CategorySelect } from '..';
const serverURL =
  "https://arterator.herokuapp.com/categories/categorieswithtags";

const PromptForm = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(serverURL);
      setCategoryData(data.data);
    };
    getData();
  }, []);

  return (
    <>
      <div>
        {categoryData ? (
          <form>
            {categoryData.map(i => <CategorySelect category={i}/>)}
          </form>
        ) : (
          <h1>Loading...</h1>
        )}
        <button> get prompt </button>
      </div>
    </>  
  );
};

export default PromptForm;
