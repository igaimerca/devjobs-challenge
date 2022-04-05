import React from 'react'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import "./Header.scss";

function Header() {
    return (
        <div className="header">
            <h1>devjobs</h1>
            <ToggleSwitch />
        </div>
    )
}

export default Header
