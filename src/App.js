import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Content from "./Component/Content";
import Background from "./Component/Background";

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
