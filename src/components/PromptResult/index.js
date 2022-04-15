import React from 'react'
import { useLocation } from 'react-router-dom';
import './style.css'

const PromptResult = () => {
    const location = useLocation();
    const style = location.state.formData.style;
    const medium = location.state.formData.medium;
    const mood = location.state.formData.mood;
    const subject = location.state.formData.subject;
    const colorPalette = location.state.formData['color palette'];
    


    return (
        <div>
            <p>Your piece of art should include the following:</p>
            <p>{style}</p>            
            <p>{medium}</p>            
            <p>{mood}</p>            
            <p>{subject}</p>            
            <p>{colorPalette}</p>            
            
        </div>
    );

};

export default PromptResult;