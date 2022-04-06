import React, { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
import jobs from "./data.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [currentJob, setCurrentJob] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/job/:id"
          element={
            <JobDetailsPage
              jobs={jobs}
              currentJob={currentJob}
              setCurrentJob={setCurrentJob}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
