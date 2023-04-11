import React from "react";
import Lottie from "lottie-react";
import reader from "../assets/76035-job-interview.json";

import { Link, useLoaderData } from "react-router-dom";
import Singlejob from "./Singlejob";
import JobCategory from "./JobCategory";

const Home = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  return (
    <section>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              One Step Closer To <br /> Your Dream Job
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <button>Get Started</button>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>

      <div>
        <JobCategory></JobCategory>
      </div>
      <div className="text-center">
        <h1 className="text-black text-3xl font-bold ">Featured Jobs</h1>
        <p className="py-2 text-black">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-6  lg:grid-cols-2 sm:grid-cols-1 px-20 py-10">
        {/* {jobs.map((job) => (
          <Singlejob key={job.id} job={job}></Singlejob>
        ))} */}
        {
          jobs.map((job)=><Singlejob
          
          key={job.id}
          job={job}
          ></Singlejob> )
        }
      </div>
    </section>
  );
};

export default Home;
