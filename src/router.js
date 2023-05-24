import React from "react";
import Root from "./Component/Root";
import Blogs from "./Component/Blogs";
import Contacts from "./Component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="*" element={<div>No Page coming soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}
