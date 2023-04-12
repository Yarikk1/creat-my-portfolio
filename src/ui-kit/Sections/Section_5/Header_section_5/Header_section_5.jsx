import React from "react";
import "./Header_section_5.css";
import { ReactComponent as Facebook_section_5 } from "../../Assets/facebook_section_5.svg";
import { ReactComponent as In_section_5 } from "../../Assets/in_section_5.svg";
import { ReactComponent as Behance_section_5 } from "../../Assets/behance_section_5.svg";
import { ReactComponent as Twitter_section_5 } from "../../Assets/twitter_section_5.svg";
import { ReactComponent as Dribbble_section_5 } from "../../Assets/dribbble_section_5.svg";

const Header_section_5 = () => {
  return (
    <div>
      <div className="Hello_section_5">H e l l o</div>
      <div className="Get_section_5">Get in touch</div>
      <div className="Just_section_5">Just Say Hello!</div>
      <div className="Button_contact_section_5">
        <button className="Contact_section_5">Contact</button>
      </div>
      <div className="Svg_section_5">
        <div className="Facebook_section_5">
        <Facebook_section_5 />
        </div>
        <In_section_5 />
        <Behance_section_5 />
        <Twitter_section_5 />
        <Dribbble_section_5 />
      </div>
    </div>
  );
};

export default Header_section_5;
