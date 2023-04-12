import React from "react";
import "./Body_section_6.css";
import Adidas from "./Img_section_6/Adidas.png";
import Bird from "./Img_section_6/Bird.png";
import Bottle from "./Img_section_6/Bottle.png";
import { ReactComponent as Arrow_section_6 } from "../../Assets/Icons/Arrow_section_6.svg";

const Body_section_6 = () => {
  return (
    <div className="All_block_section_6">
      <div className="Block_1_section_6">
        <div className="Img_1_section_6">
          <img src={Adidas}></img>
        </div>
        <div className="Subblock_1_section_6">
          <div className="Info_1_section_6">
            <div>26 comments</div>
            <div>17 likes</div>
            <div>By Adams</div>
          </div>
          <div className="Subblock_text_section_6">
            Design is not just color it speaks visually...
          </div>
          <div className="Subblock_footer_section_6">
            <div className="Subblock_1_footer_section_6">Read More</div>
            <div className="Png_footer_section_6">
              <Arrow_section_6 />
            </div>
          </div>
        </div>
      </div>
      <div className="Block_1_section_6">
        <div className="Img_1_section_6">
          <img src={Bird}></img>
        </div>
        <div className="Subblock_1_section_6">
          <div className="Info_1_section_6">
            <div>26 comments</div>
            <div>17 likes</div>
            <div>By Adams</div>
          </div>
          <div className="Subblock_text_section_6">
            Design is not just color it speaks visually...
          </div>
          <div className="Subblock_footer_section_6">
            <div className="Subblock_1_footer_section_6">Read More</div>
            <div className="Png_footer_section_6">
              <Arrow_section_6 />
            </div>
          </div>
        </div>
      </div>
      <div className="Block_1_section_6">
        <div className="Img_1_section_6">
          <img src={Bottle}></img>
        </div>
        <div className="Subblock_1_section_6">
          <div className="Info_1_section_6">
            <div>26 comments</div>
            <div>17 likes</div>
            <div>By Adams</div>
          </div>
          <div className="Subblock_text_section_6">
            Design is not just color it speaks visually...
          </div>
          <div className="Subblock_footer_section_6">
            <div className="Subblock_1_footer_section_6">Read More</div>
            <div className="Png_footer_section_6">
              <Arrow_section_6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body_section_6;
