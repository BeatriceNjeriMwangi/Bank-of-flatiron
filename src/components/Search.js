import React, {useState} from "react";

function Search(){
    const [search, onSearch] = useState(Search)
    return(
        <div>
            <input 
            type='text'
            placeholder='Search transactions'
            value={search}
            onSearch={(e)=>onSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;