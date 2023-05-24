import React from "react";
import Header from "../Header";
import Home from "./Home";
import Content from "./Content";
import Background from "./Background";

function App() {
  return (
    <div className="container">
      <Background />
      <Header />
      <Home />
      <Content />
    </div>
  );
}

export default App;
