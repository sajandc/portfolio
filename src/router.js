import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="blogs" element={<div>Blogs coming soon</div>} />
          <Route path="contact" element={<div>Contact coming soon</div>} />
          <Route path="*" element={<div>No Page coming soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
