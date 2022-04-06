import React from 'react'
import "./SearchInput.scss";

function SearchInput({icon, placeholder}) {
    return (
        <div className="search-input flex">
            <img src={icon} alt="" />
            <input type="text" placeholder="Filter by title, companies, expertise…" />
        </div>
    )
}

export default SearchInput
