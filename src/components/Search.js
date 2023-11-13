// Search.js
import React, { useState } from 'react';

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value); // Call the callback function with the search term
    };

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
