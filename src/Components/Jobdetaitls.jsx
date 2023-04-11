import React from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../utilites/fakeDB";


const Jobdetaitls = () => {
  const jobs = useLoaderData();

  const handleAddtojob =(id)=>{
    console.log(id);
    addToDb(id)
      }
  return (
    <div>
      <p className="text-center text-black font-semibold p-12 text-2xl">
        Job Details
      </p>

      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className=" lg:w-1/2 p-10 ">
          <p className="text-black">
            <span className="text-purple-500">Job Description : </span>{" "}
            {jobs.description}
          </p>{" "}
          <br />
          <p className="text-black">
            {" "}
            <span className="text-purple-500">Job Responsibility:</span>{" "}
            {jobs.responsibility}
          </p>{" "}
          <br />
          <p className="text-black">
            <span className="text-purple-500">Educational Requirements:</span>{" "}
            {jobs.requirements}
          </p>{" "}
          <br />
          <p className="text-black">
            <span className="text-purple-500">Experiences:</span>{" "}
            {jobs.experiences}
          </p>
        </div>
        <div className="  bg-slate-100 lg:p-16 lg:pl-10 lg:w-1/2 font-semibold pt-20">
          <div className="flex flex-col justify-center space-y-2 ">
          <h4 className="text-2xl font-bold">Job Details</h4>
          <p className="text-black">
            <span className="text-purple-500">Salary:</span> {jobs.salary}{" "}
          </p>
          <p className="text-black">
            <span className="text-purple-500">Job Title</span> {jobs.title}{" "}
          </p>
          <h4>Contact Information:</h4>
          <p className="text-black">
            <span className="text-purple-500">Phone :</span> {jobs.phone}{" "}
          </p>
          <p className="text-black">
            <span className="text-purple-500">Email:</span> {jobs.email}{" "}
          </p>
          <p className="text-black">
            <span className="text-purple-500">Address:</span> {jobs.location}{" "}
          </p>
          <button onClick={()=> handleAddtojob(jobs.id)} >Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetaitls;
