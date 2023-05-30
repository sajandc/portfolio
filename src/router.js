import React from "react";
import Home from "./Component/Home";
import Blogs from "./Component/Blogs";
import About from "./Component/About";
import Contact from "./Component/Contact";
import {
  BrowserRouter,
  Routes,
  Route,
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
      path: "blogs",
      element: <Blogs />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return (
    <RouterProvider router={router} />
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
