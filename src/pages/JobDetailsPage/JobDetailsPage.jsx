import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDetailsPage = ({ jobs, currentJob, setCurrentJob }) => {
  const params = useParams();
  const id = Number.parseInt(params.id, 10);

  useEffect(() => {
    setCurrentJob(jobs.find((job) => job.id === id));
  }, [jobs, id, setCurrentJob]);

  console.log(currentJob);

  return (
    <>
      {currentJob.company}
    </>
  );
};

export default JobDetailsPage;
