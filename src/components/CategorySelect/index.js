import React, { useState } from 'react'
import './style.css'

const CategorySelect = ({category}) => {
   const [ option, setOption ] = useState(category.tag)


    return (
        <>
            <label>{category.categoryname}</label>
            <select id={category.categoryname} onChange={(e) => setOption(e.target.value)}>
                {category.tags.map((tag, index) => <option key={index}>{tag}</option> )}
            </select> 
        </>
    )
}

export default CategorySelect;