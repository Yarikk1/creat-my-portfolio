import React from "react";
import "./Body_section_4.css";
import Col_block_mean from "../Img_section_4/Mean_section_4.png";
import { ReactComponent as QuoteLeft } from "../../Assets/Icons/QuoteLeft.svg";
import { ReactComponent as QuoteRight } from "../../Assets/Icons/QuoteRight.svg";



const Body_section_4 = () => {
  return (
    <div className="Body_section_4">
      <div className="Mean_section_4">
        <img src={Col_block_mean} />
      </div>
      <div className="Right_block_secion_4">
        <div className="QuoteLeft_section_4">
            <QuoteLeft />
        </div>
        <div className="Text_section_4">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
        </div>
        <div className="QuoteRight_section_4">
            <QuoteRight />
        </div>
        <div className="Name_section_4">Jared Warner</div>
        <div className="CEO">CEO Of Zeo</div>
      </div>
    </div>
  );
};

export default Body_section_4;
