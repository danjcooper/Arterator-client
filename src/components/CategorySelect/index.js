import React from 'react'
import './style.css'

const CategorySelect = ({category}) => {

    return (
        <>
            <label>{category.categoryname}</label>
            <select>
                {category.tags.map(tag => <option>{tag}</option> )}
            </select> 
        </>
    )
}

export default CategorySelect;