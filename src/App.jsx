import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import SearchBar from "./components/SeachBar/SearchBar";
import jobs from "./data.js";

function App() {
  const [fullTimeContract, setFullTimeContract] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(
    fullTimeContract ? jobs.filter((job) => job.contract === "Full Time") : jobs
  );

  useEffect(() => {
    if (searchQuery || searchByLocation) {
      setFilteredJobs(
        fullTimeContract
          ? jobs.filter(
              (job) =>
                job.position
                  .toLowerCase()
                  .includes(searchQuery?.toLowerCase()) &&
                job.location
                  .toLowerCase()
                  .includes(searchByLocation?.toLowerCase()) &&
                job.contract === "Full Time"
            )
          : jobs.filter(
              (job) =>
                job.position
                  .toLowerCase()
                  .includes(searchQuery?.toLowerCase()) &&
                job.location
                  .toLowerCase()
                  .includes(searchByLocation?.toLowerCase())
            )
      );
    } else {
      setFilteredJobs(
        fullTimeContract
          ? jobs.filter((job) => job.contract === "Full Time")
          : jobs
      );
    }
  }, [searchQuery, searchByLocation, fullTimeContract]);

  useEffect(() => {
    document.documentElement.className = "theme-light";
  }, []);

  return (
    <div>
      <div className="top-bar-section">
        <Header />
        <SearchBar
          location={searchByLocation}
          onSearchByLocation={(location) => setSearchByLocation(location)}
          searchQuery={searchQuery}
          onSearch={(query) => setSearchQuery(query)}
          fullTimeContract={fullTimeContract}
          onChangeContract={(fullTimeContract) =>
            setFullTimeContract(fullTimeContract)
          }
        />
        <div className="jobs flex">
          {filteredJobs &&
            filteredJobs.map((job) => (
              <JobCard key={job.id} currentJob={job} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
