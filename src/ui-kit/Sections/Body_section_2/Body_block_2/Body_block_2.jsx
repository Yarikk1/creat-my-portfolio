import React from "react";
import "./Body_block_2.css";
import { ReactComponent as Arrow } from "../../Assets/Icons/Arrow.svg";

const Body_block_2 = () => {
  return (
    <div className="Body_block_2">
      <div className="Body_block_2_info">
        <h1 className="Block_1_2">Graphic Design</h1>
        <h2 className="Block_2_2">
          User interface design, user experience design, user research.
        </h2>
      </div>
      <div className="Body_block_2_footer">
        <h4 id="Block_3_2">Read more</h4>
        <h1 className="Body_arrow_block_2">
          <Arrow />
        </h1>
      </div>
    </div>
  );
};

export default Body_block_2;
