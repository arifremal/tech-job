import React from "react";
import Assigmentchart from "./Assigmentchart";

const Statistics = () => {
  return (
    <div>
      <h1 className="text-center text-2xl p-2 text-black font-bold">
        {" "}
        Arif Remal's  <strong className="text-purple-900">Assigments marks</strong>
      </h1>
      <Assigmentchart></Assigmentchart>
    </div>
  );
};

export default Statistics;
