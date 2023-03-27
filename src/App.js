import React from "react";
import "./App.css";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Img from "./Img/Img";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Img />
      <Footer />
    </div>
  );
};

export default App;
