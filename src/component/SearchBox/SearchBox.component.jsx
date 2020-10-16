import React from 'react'

import './SearchBox.style.css'

export const SearchBox = ( {placeholder, handleChange}) => (
    <input 
    className = "search"
    type ="search" 
    name ="searchField" 
    placeholder = {placeholder}
    onChange = {handleChange}/>
)