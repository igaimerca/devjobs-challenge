import React from 'react';
import "./JobCard.scss";

function JobCard() {
    return (
        <div className="job-card">
            <img src="/assets/logos/scoot.svg" className="company-logo" alt="" />
            <div className="details">
                <p>5h ago . Full Time</p>
                <h2>Senior Software Engineer</h2>
                <p>Scoot</p>
            </div>
            <h4>United kingdom</h4>
        </div>
    )
}

export default JobCard
