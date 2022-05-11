import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import axios from "axios";
import { CategorySelect } from "..";
// import PromptResult from "../PromptResult";

const serverURL =
  "https://arterator.herokuapp.com/categories/categorieswithtags";

const PromptForm = () => {
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const [button, setButton] = useState()

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(serverURL);
      setCategoryData(data.data);
    };
    getData();
  }, []);
  
  useEffect(() => {
    let output = {};
    categoryData.forEach(i => {
      output[i.categoryname]= i.tags[0]
      console.log(output)
    })
    setFormData(output)
  }, [categoryData]);

  useEffect(() => {
    console.log(formData)

  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData(formData);
    navigate('/promptresult', {
      state: {
        formData
      }
    });
  };
  
  const updateSelection = (e) => {
    console.log(e.target.id)
    setFormData({...formData, [e.target.id]: e.target.value})
        
  }

  return (
    <>
      <div>
        {categoryData ? (
          <form onSubmit={handleSubmit}>
            {categoryData.map((i) => (
              <CategorySelect key={i.categoryid} category={i} onChange={updateSelection}/>
            ))}
            <button > get prompt </button>
          </form>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default PromptForm;
