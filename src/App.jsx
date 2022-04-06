import { useEffect } from 'react'
import Header from './components/Header/Header';
import JobCard from './components/JobCard/JobCard';
import SearchBar from './components/SeachBar/SearchBar';
import jobs from "./data.js";

function App() {
    useEffect(() => {
        document.documentElement.className = "theme-light";
    }, [])
    
    return (
        <div>
            <div className="top-bar-section">
                <Header />
                <SearchBar />
                <div className="jobs flex">
                    {jobs && jobs.map(job => (
                        <JobCard key={job.id} logo={job.logo} company={job.company} logoBackground={job.logoBackground} position={job.position} location={job.location} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
