import React from "react";
import "./Header_section_3.css";
import { ReactComponent as Line_section_3 } from "../../Assets/Icons/Line-section-3.svg";

const Header_section_3 = () => {
  return (
    <div className="Header_section_3">
      <div className="title_section_3">
        <h>Portfolio</h>
      </div>
      <div className="subtitle_section_3">
        <div className="All_subtitle_section_3">All</div>
        <div>
          <Line_section_3 />
        </div>
        <div className="UU_subtitle_section_3">UI & UX</div>
        <div>
          <Line_section_3 />
        </div>
        <div className="GD_subtitle_section_3">Graphic Design</div>
        <div>
          <Line_section_3 />
        </div>
        <div className="WD_subtitle_section_3">Web Dewlopment</div>
      </div>
    </div>
  );
};

export default Header_section_3;
