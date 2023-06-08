import React from "react";
import Home from "./Component/Home";
import Blogs from "./Component/Blogs";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects"
import Resume from "./Component/Resume";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
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
      element: <Resume />,
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
  ]);

  return (
    <>
      <Loader />
      <RouterProvider router={router} />
    </>

    // <BrowserRouter>
    // <Loader/>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/blogs" element={<Blogs />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="*" element={<div>No Page coming soon</div>} />
    //   </Routes>
    // </BrowserRouter>
  );
}
