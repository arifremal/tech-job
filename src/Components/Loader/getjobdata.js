import { getStoredJobs } from "../../utilites/fakeDB";



export  const jobAndAppliedData = async () => {
  const jobData = await fetch("/jobs.json");
  const applyJob = await jobData.json();
  const savedJobData = getStoredJobs();

  let cartArray = [];

  for (const id in savedJobData) {
    const foundJob = applyJob.find((job) => job.id === id);
    if (foundJob) {
      // cartD.push(foundJob)
      cartArray.push(foundJob);
    }
  }
  return {cartArray , applyJob}
};
