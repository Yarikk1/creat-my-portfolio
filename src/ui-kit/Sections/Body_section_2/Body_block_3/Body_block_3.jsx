import React from "react";
import "./Body_block_3.css";
import { ReactComponent as Arrow } from "../../Assets/Icons/Arrow.svg";

const Body_block_3 = () => {
  return (
    <div className="Body_block_3">
      <div className="Body_block_3_info">
        <h1 className="Block_1_3">Web Development</h1>
        <h2 className="Block_2_3">
          User interface design, user experience design, user research.
        </h2>
      </div>
      <div className="Body_block_3_footer">
        <h4 id="Block_3_3">Read more</h4>
        <h1 className="Body_arrow_block_3">
          <Arrow />
        </h1>
      </div>
    </div>
  );
};

export default Body_block_3;
