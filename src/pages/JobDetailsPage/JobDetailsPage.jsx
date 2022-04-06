import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import JobHeader from "../../components/JobHeader/JobHeader";
import Header from "../../components/Header/Header"

const JobDetailsPage = ({ jobs, currentJob, setCurrentJob }) => {
  const params = useParams();
  const id = Number.parseInt(params.id, 10);

  useEffect(() => {
    setCurrentJob(jobs.find((job) => job.id === id));
  }, [jobs, id, setCurrentJob]);

  return (
    <>
    <Header />
     <JobHeader currentJob={currentJob} />
    </>
  );
};

export default JobDetailsPage;
