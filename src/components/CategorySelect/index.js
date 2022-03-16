import React from 'react'
import './style.css'

const CategorySelect = ({category}) => {

    return (
        <>
            <label>{category.categoryname}</label>
            <select id={category.categoryname}>
                {category.tags.map((tag, index) => <option key={index}>{tag}</option> )}
            </select> 
        </>
    )
}

export default CategorySelect;