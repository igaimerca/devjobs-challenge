import React, { useState } from 'react'
import SearchButton from '../SearchButton/SearchButton'
import SearchInput from '../SearchInput/SearchInput'
import "./SearchBar.scss";

function SearchBar() {
    const [checked, setChecked] = useState(true);
    return (
        <div className="search-bar">
            <SearchInput icon="/assets/desktop/icon-search.svg" placeholder="Filter by title, companies, expertise…" />
            <SearchInput icon="/assets/desktop/icon-location.svg" placeholder="Filter by location…" />
            <div className="submit-search flex">
                <div className="check flex">
                <span className={`${checked && 'active'} checkbox`} onClick={() => setChecked(!checked)}></span>
                <b>Full Time Only</b>
                </div>
                <SearchButton />
            </div>
        </div>
    )
}

export default SearchBar
