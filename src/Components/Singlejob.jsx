import React from 'react';
import { ShoppingCartIcon ,MapPinIcon,CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';


const Singlejob = ({job}) => {
 

    return (
        <div className=' bg-white rounded-md p-4 flex flex-col justify-center align-middle ' > 
          <img src={job.logo} alt="" className='w-32  p-3'  />
          <p className='text-black font-semibold'>{job.title}</p>
          <small>{job.company}</small>
          <div>
           <button className='bg-white text-purple-500 rounded-md border-purple-600 p-2 '> {job.onsite} </button>
            <button className='bg-white text-purple-500 rounded-md border-purple-600 p-2 m-2' > {job.fulltime} </button>
          </div>
          <p className=''> <MapPinIcon className="w-5 text-purple-400 inline-block " /> {job.location}</p>
          <p className=' py-1'><CurrencyDollarIcon className="w-5 text-purple-400 inline-block " />{job.salary}</p><br/>
          <Link to={`details/${job.id}`}><button>View Details</button></Link>
          
          </div>
    );
};

export default Singlejob;