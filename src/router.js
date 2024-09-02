import React from "react";
import Home from "./Component/Home";
import Blogs from "./Component/Blogs";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import Resume from "./Component/Resume";
import ATSResume from "./Component/ATSResume";
import { Routes, Route } from "react-router-dom";
import CustomRouter from "./customRouter";
import Loader from "./Component/Loader";
import { createBrowserHistory } from "history";

export default function Router() {
  const history = createBrowserHistory();

  return (
    <>
      <Loader />
      <CustomRouter history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="resume/:name?/:type?" element={<Resume />} />
          <Route path="ats-resume/:name?/:type?" element={<ATSResume />} />
        </Routes>
      </CustomRouter>
    </>
  );
}
