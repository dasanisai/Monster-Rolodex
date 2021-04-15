import React from 'react'
import './searchBox.styles.css'

function searchBox({placeholder,handleChange}) {
    return (
        
            <input className='search' type='search'
                placeholder={placeholder}
                onChange={handleChange}>
            </input>
    
    
    )
}

export default searchBox
