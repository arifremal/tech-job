import React from "react";
import {
  ShoppingCartIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Appliedcard = ({ job }) => {
  const { logo, title, company, fulltime, onsite, location, salary, id } = job;
  console.log(job);
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className=" w-32 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-white   p-3"
          src={logo}
          alt="Polaroid camera"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {title}
              </h3>
              <p> {company}</p>
              <button className="bg-white text-purple-500 rounded-md border-purple-600 p-2 ">
                {" "}
                {onsite}{" "}
              </button>
              <button className="bg-white text-purple-500 rounded-md border-purple-600 p-2 m-2">
                {" "}
                {fulltime}{" "}
              </button>

              <p className="  ">
                {" "}
                <MapPinIcon className="w-5 text-purple-400 inline-block " />{" "}
                {location}
              </p>
              <p className=" inline-block py-1">
                <CurrencyDollarIcon className="w-5 text-purple-400 inline-block " />
                {salary}
              </p>
              <br />
            </div>
            <div className="text-right pt-10">
              <Link to={`../details/${id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Appliedcard;
