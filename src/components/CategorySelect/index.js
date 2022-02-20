import React from 'react'
import './style.css'

const CategorySelect = ({category}) => {

    return (
        <>
            <h1>{category.categoryname}</h1>
            <select>
                {category.tags.map(tag => <option>{tag}</option> )}
            </select>
        </>
    )
}

export default CategorySelect;