import React from "react";
import "./Body_block_1.css";
import { ReactComponent as Arrow } from "../../Assets/Icons/Arrow.svg";

const Body_block_1 = () => {
  return (
    <div className="Body_block_1">
      <div className="Body_block_1_info">
        <h1 className="Block_1_1">Ui & UX Design</h1>
        <h2 className="Block_2_1">
          User interface design, user experience design, user research.
        </h2>
      </div>
      <div className="Body_block_1_footer">
        <h4 id="Block_3_1">Read more</h4>
        <h1 className="Body_arrow_block_1">
          <Arrow />
        </h1>
      </div>
    </div>
  );
};

export default Body_block_1;
