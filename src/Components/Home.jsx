import React, { useEffect, useState } from "react";

import Singlejob from "./Singlejob";
import JobCategory from "./JobCategory";
import { data } from "autoprefixer";

const Home = () => {
  // const jobs = useLoaderData();
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setDisplayedJobs(data.slice(0, 4));
      });
  }, []);
  const handle = () => {
    setDisplayedJobs(jobs);
  };

  console.log(jobs);
  return (
    <section>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Find Your <br />
              Dream Job
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Find the best talent for your full-time, part-time, contract,
              internship, or freelance jobs in any location.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <button>Get Started</button>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img src="/img.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <JobCategory></JobCategory>
      </div>
      <div className="text-center">
        <h1 className="text-black text-3xl font-bold ">Latest Jobs</h1>
        <p className="py-2 text-black">
          The job marketplace and community that connects and matches companies
          with remote professionals
        </p>
      </div>
      <div className="grid gap-6  lg:grid-cols-2 sm:grid-cols-1 px-20 py-10">
        {/* {jobs.map((job) => (
          <Singlejob key={job.id} job={job}></Singlejob>
        ))} */}
        {displayedJobs.map((job) => (
          <Singlejob key={job.id} job={job}></Singlejob>
        ))}
      </div>
      <div className="text-center">
        <button className="mx-auto" onClick={handle}>
          Show All Jobs
        </button>
      </div>
    </section>
  );
};

export default Home;
