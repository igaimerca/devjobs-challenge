import React from 'react'
import "./Button.scss";

function SearchButton({text}) {
    return (
        <button className="btn">
            {text}
        </button>
    )
}

export default SearchButton
