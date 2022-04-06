import React from "react";
import "./SearchInput.scss";

function SearchInput({
  icon,
  placeholder,
  locationInput,
  location,
  onSearchByLocation,
  searchQuery,
  onSearch,
}) {
  return (
    <div className="search-input flex">
      <img src={icon} alt="" />
      <input
        value={locationInput ? location : searchQuery}
        onChange={(e) => locationInput ? onSearchByLocation(e.target.value) : onSearch(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
