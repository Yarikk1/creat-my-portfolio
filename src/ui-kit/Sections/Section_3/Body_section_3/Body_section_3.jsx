import React from "react";
import "./Body_section_3";
import Col_block_mean from "../IMG_section_3/Col-block-mean.png";
import Col_block_eshtetic from "../IMG_section_3/Col-block-eshtetic.png";
import Col_block_cod from "../IMG_section_3/Col-block-cod.png";
import Col_block_milk from "../IMG_section_3/Col-block-milk.png";
import Col_block_sheme from "../IMG_section_3/Col-block-sheme.png";
import Col_block_book from "../IMG_section_3/Col-block-book.png";

const Body_section_3 = () => {
  return (
    <div className="Body_section_3">
      <div className="Body_mean">
        <img src={Col_block_mean}></img>
      </div>
      <div className="Body_eshtetic">
        <img src={Col_block_eshtetic}></img>
      </div>
      <div className="Body_cod">
        <img src={Col_block_cod}></img>
      </div>
      <div className="Body_milk">
        <img src={Col_block_milk}></img>
      </div>
      <div className="Body_sheme">
        <img src={Col_block_sheme}></img>
      </div>
      <div className="Body_book">
        <img src={Col_block_book}></img>
      </div>
    </div>
  );
};

export default Body_section_3;
