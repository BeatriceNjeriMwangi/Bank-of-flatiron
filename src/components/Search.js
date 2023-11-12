import React, {useState} from "react";
//importing react

function Search(){
    //initializing state
    const [search, setSearch] = useState()
    return(//render component
        <div>
            <input 
            type='text'
            placeholder='Search transactions'
            value={search}
            onSearch={(e)=>setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;//exports search component