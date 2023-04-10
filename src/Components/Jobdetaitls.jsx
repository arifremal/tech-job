import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Jobdetaitls = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <p>{jobs.title}</p>
        </div>
    );
};

export default Jobdetaitls;