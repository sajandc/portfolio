import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Blogs from "./Component/Blogs";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div>No Page coming soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}
