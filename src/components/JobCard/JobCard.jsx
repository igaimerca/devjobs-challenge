import React from 'react';
import "./JobCard.scss";
import { useNavigate } from "react-router-dom";

function JobCard({ currentJob }) {
    const navigate = useNavigate();
    return (
        <div className="job-card" onClick={() => navigate(`job/${currentJob.id}`)}>
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
