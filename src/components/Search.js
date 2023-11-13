//import react and usestate
import React, { useState } from 'react';

function Search({ onSearch }) {//function for searchbar
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {//handles change when search happens
        const value = e.target.value;
        setSearchTerm(value);
        //callback function
        onSearch(value); 
    };
//search elements
    return (
        <div>
            <input
                type="text"
                placeholder="Search by description"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;
//export search component