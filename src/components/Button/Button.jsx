import React from 'react'
import "./Button.scss";

function Button({text}) {
    return (
        <button className="btn">
            {text}
        </button>
    )
}

export default Button
