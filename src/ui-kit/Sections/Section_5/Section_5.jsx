import React from "react";
import "./Section_5.css";
import SectionWrapper from "../../SectionWrapper/SectionWrapper";
import Header_section_5 from "./Header_section_5/Header_section_5";
import Footer_section_5 from "./Footer_section_5/Footer_section_5";

const Sections_5 = () => {
  return (
    <div className="Section_5">
      <div className="Header_section_5">
        <Header_section_5 />
      </div>
      <div className="Footer_section_5">
        <Footer_section_5 />
      </div>
    </div>
  );
};

export default Sections_5;
