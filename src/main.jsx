import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import AppliedJobs from "./Components/AppliedJobs";
import Jobdetaitls from "./Components/Jobdetaitls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: "details/:id",
        element: <Jobdetaitls></Jobdetaitls>,
        // loader : ({params}) => fetch(`/jobs.json/details/${params._id}`)
        loader:({params})=> fetch('/jobs.json')
        .then (res => res.json())
        .then (data => {
          const selettedJob = data.find( job => job.id === params._id);
          return selettedJob
          
        })

        
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
