import React, { useEffect, useState } from "react";
import { getStoredJobs } from "../utilites/fakeDB";
import { useLoaderData } from "react-router-dom";
import Appliedcard from "./Appliedcard";

const AppliedJobs = () => {
  const { cartArray } = useLoaderData();

  return (
    <div className=" flex min-h-screen items-start justify-center text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold" > {cartArray.length ? 'Applied Job':'Not Applied Yet'}</h2>


    <ul className=" flex flex-col divide-y divide-purple-300">
        {cartArray.map(job => <Appliedcard key={job.id}
        
        job={job}
        >

        </Appliedcard> )}
    </ul>

      </div>
    </div>
  );
};

export default AppliedJobs;
