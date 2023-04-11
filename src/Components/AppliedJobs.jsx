import React, { useEffect, useState } from "react";
import { getStoredJobs } from "../utilites/fakeDB";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const [job, setJob] = useState([]);

  const jData = useLoaderData();

  useEffect(() => {
    const savedJobData = getStoredJobs();
    let newArr = [];

    for (const id in savedJobData) {
      const foundJob = jData.find((job) => job.id === id);
      if (foundJob) {
        // cartD.push(foundJob)
        newArr.push(foundJob);
      }
    }
    setJob(newArr);
  }, []);

  console.log(job);

  return (
    <div>
      <h1>applied jobs</h1>
    </div>
  );
};

export default AppliedJobs;
