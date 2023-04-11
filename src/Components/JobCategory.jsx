import React, { useEffect, useState } from 'react';

const JobCategory = () => {

    const [jobs, setJobs] =useState([])
    useEffect (()=>{
        fetch('cattegory.json')
      .then(res => res.json())
      .then(data => setJobs(data))

    },[])
    return (
        <div>
           <div className='text-center'>
           <h1 className='text-purple-400 font-bold py-3'> Browse By Category</h1>
           <p className='text-black'>Find  job opportunities from startups, Fortune 500, and other well-known organizations. </p>
           </div  >

           <div className='grid gap-6  lg:grid-cols-4 sm:grid-cols-1 p-10'>
            {
                jobs.map(job => <div className='bg-purple-100 p-14 rounded-md text-black '>
                    <img className='w-10' src={job.img} alt="" />
                    <p className='font-bold'>{job.Department}</p>
                    <p>{job.available}</p>
                </div>  )
            }
           </div>
        </div>
    );
};

export default JobCategory;