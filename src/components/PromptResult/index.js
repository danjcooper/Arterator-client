import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios";
import './style.css'

const PromptResult = () => {
    const location = useLocation();
    const [prompt, setPrompt] = useState(null);
    const { style, medium, mood, subject } = location.state.formData
    // const colorPalette = location.state.formData['color palette'];
    // TO DO this page breaks when we navigate to it directly
    
    useEffect(() => {
        const getData = async () => {
            const formData = location.state.formData
            console.log(formData)
            const data = await axios.post('https://warm-dolls-fall-151-231-37-214.loca.lt/prompt', formData);
            setPrompt(data.data);
          };
        getData();
    },[])
    

    return (
        <div>
            {prompt ? <h1>{prompt.prompt}</h1> : <h1>Loading</h1>}
        
        </div>
    );

};

export default PromptResult;