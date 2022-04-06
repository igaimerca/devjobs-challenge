import React, { useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import SearchInput from "../SearchInput/SearchInput";
import "./SearchBar.scss";

function SearchBar({ location, onSearchByLocation, searchQuery, onSearch, fullTimeContract, onChangeContract }) {
  return (
    <div className="search-bar">
      <SearchInput
        searchQuery={searchQuery}
        onSearch={onSearch}
        icon="/assets/desktop/icon-search.svg"
        placeholder="Filter by title, companies, expertise…"
      />
      <SearchInput
        location={location}
        onSearchByLocation={onSearchByLocation}
        locationInput={true}
        icon="/assets/desktop/icon-location.svg"
        placeholder="Filter by location…"
      />
      <div className="submit-search flex">
        <div className="check flex">
          <span
            className={`${fullTimeContract && "active"} checkbox`}
            onClick={() => onChangeContract(!fullTimeContract)}
          ></span>
          <b>Full Time Only</b>
        </div>
        <SearchButton />
      </div>
    </div>
  );
}

export default SearchBar;
