import React from "react";
import Home from "./Component/Home";
import Blogs from "./Component/Blogs";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import Resume from "./Component/Resume";
import RupaliResume from "./Component/Resume/rupali";
import Firojresume from "./Component/Resume/firoj";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Loader from "./Component/Loader";

export default function Router() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "resume",
      element: <Resume path="sajan" />,
    },
    {
      path: "rupali",
      element: <Resume path="rupali" />,
    },
    {
      path: "blogs",
      element: <Blogs />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "resume-download",
      element: <Resume path="sajan" download />,
    },
    {
      path: "rupali-download",
      element: <Resume path="rupali" download />,
    },
    {
      path: "firoj",
      element: <Firojresume download />,
    },
  ]);

  return (
    <>
      <Loader />
      <RouterProvider router={router} />
    </>
  );
}
