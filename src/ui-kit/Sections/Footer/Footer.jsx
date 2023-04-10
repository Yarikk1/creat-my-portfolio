import React from "react";
import "./Footer.css";
import { ReactComponent as Facebook } from "../Assets/facebook.svg";
import { ReactComponent as In } from "../Assets/in.svg";
import { ReactComponent as Twitter } from "../Assets/twitter.svg";
import { ReactComponent as Behance } from "../Assets/behance1.svg";
import { ReactComponent as Dribbble } from "../Assets/dribbble1.svg";
import { ReactComponent as Scroll } from "../Assets/Icons/Scroll.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <Facebook />
      <In />
      <Behance />
      <Twitter />
      <Dribbble />
      <Scroll className="Footer-scroll" />
    </div>
  );
};

export default Footer;
