import React from 'react';
import { ShoppingCartIcon ,MapPinIcon,CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Singlejob = ({job}) => {
    return (
        <div className=' bg-white rounded-md p-3 ' > 
          <img src={job.logo} alt="" className='w-32 h-24 p-3'  />
          <p className='text-black font-semibold'>{job.title}</p>
          <small>{job.company}</small>
          <div>
           <button className='bg-white text-purple-500 rounded-md border-purple-600 p-2 '> {job.onsite} </button>
            <button className='bg-white text-purple-500 rounded-md border-purple-600 p-2 m-2' > {job.fulltime} </button>
          </div>
          <p className='inline-block'> <MapPinIcon className="w-5 text-purple-400 inline-block " /> {job.location}</p>
          <p className='inline-block m-3'><CurrencyDollarIcon className="w-5 text-purple-400 inline-block " />{job.salary}</p><br/>
          <button>View Details</button>
          </div>
    );
};

export default Singlejob;