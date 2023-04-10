import React from "react";
import "./App.css";
import "./index.css"
import Sections_1 from "./ui-kit/Sections/Section_1/Sections_1";
import Section_2 from "./ui-kit/Sections/Section_2/Section_2";
import Sections_3 from "./ui-kit/Sections/Section_3/Section_3";

const App = () => {
  return (
    <div className="container">
      <Sections_1 />
      <Section_2 />
      <Sections_3 />
    </div>
  );
};

export default App;
