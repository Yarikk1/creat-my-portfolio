import React from "react";
import "./Footer_section_7.css";
import { ReactComponent as Facebook } from "../../Assets/facebook.svg";
import { ReactComponent as In } from "../../Assets/in.svg";
import { ReactComponent as Twitter } from "../../Assets/twitter.svg";
import { ReactComponent as Behance } from "../../Assets/behance1.svg";
import { ReactComponent as Dribbble } from "../../Assets/dribbble1.svg";

const Footer_section_7 = () => {
  return (
    <div className="Footer_section_7">
        <div className="Text_footer_section_7">© 2020 Ozart Portfolio Template</div>
        <div className="Png__footer_section_7">
        <Facebook />
        <In />
        <Behance />
        <Twitter />
        <Dribbble />
        </div>
    </div>
  );
};

export default Footer_section_7;
