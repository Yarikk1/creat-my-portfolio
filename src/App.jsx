import React from "react";
import "./App.css";
import "./index.css"
import Sections_1 from "./ui-kit/Sections/Section_1/Sections_1";
import Section_2 from "./ui-kit/Sections/Section_2/Section_2";
import Sections_3 from "./ui-kit/Sections/Section_3/Section_3";
import Sections_4 from "./ui-kit/Sections/Section_4/Section_4";
import Sections_5 from "./ui-kit/Sections/Section_5/Section_5";
import Sections_6 from "./ui-kit/Sections/Section_6/Section_6";
import Sections_7 from "./ui-kit/Sections/Section_7/Section_7";

const App = () => {
  return (
    <div className="container">
      <Sections_1 />
      <Section_2 />
      <Sections_3 />
      <Sections_4 />
      <Sections_5 />
      <Sections_6 />
      <Sections_7 />
    </div>
  );
};

export default App;
