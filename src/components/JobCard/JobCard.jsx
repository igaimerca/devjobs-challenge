import React from 'react';
import "./JobCard.scss";

function JobCard({ currentJob }) {
    return (
        <div className="job-card">
            <div style={{ backgroundColor: currentJob.logoBackground }} className="flex logo-container">
                <img src={currentJob.logo} className="company-logo" alt="" />
            </div>
            <div className="details">
                <p>5h ago . {currentJob.contract}</p>
                <h2>{currentJob.position}</h2>
                <p>{currentJob.company}</p>
            </div>
            <h4>{currentJob.location}</h4>
        </div>
    )
}

export default JobCard
