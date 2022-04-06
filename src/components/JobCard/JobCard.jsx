import React from 'react';
import "./JobCard.scss";

function JobCard({ logo, company, logoBackground, position, location }) {
    return (
        <div className="job-card">
            <div style={{ backgroundColor: logoBackground }}  className="flex logo-container">
            <img src={logo} className="company-logo" alt="" />
            </div>
            <div className="details">
                <p>5h ago . Full Time</p>
                <h2>{position}</h2>
                <p>{company}</p>
            </div>
            <h4>{location}</h4>
        </div>
    )
}

export default JobCard
