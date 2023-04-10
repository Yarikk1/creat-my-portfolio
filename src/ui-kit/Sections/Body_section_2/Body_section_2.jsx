import React from "react";
import Body_block_1 from "./Body_block_1/Body_block_1";
import Body_block_2 from "./Body_block_2/Body_block_2";
import Body_block_3 from "./Body_block_3/Body_block_3";
import "./Body_section_2.css";

const Body_section_2 = () => {
  return (
    <div className="Body_section_2">
        <div className="Header_bloks">
        <Body_block_1 />
        <Body_block_2 />
        <Body_block_3 />
      </div>
    </div>
  );
};

export default Body_section_2;