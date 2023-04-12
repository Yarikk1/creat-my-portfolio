import React from "react";
import "./Body_section_7.css";

const Body_section_7 = () => {
  return (
    <div className="Body_section_7">
      <div className="Left_block_section_7">
        <div className="Left_text_section_7">
          Let’s make somthing new, different and more meaningful or make thing
          more visual or conceptual? Just say hello!
        </div>
        <div className="Info_footer_section_7">
          <div className="Info_left_section_7">— +123 569 789</div>
          <div className="Info_left_section_7">— youremail@gmail.com</div>
          <div className="Info_left_section_7">
            — 28 Green Tower, Street name, New York City, USA
          </div>
        </div>
      </div>
      <div className="Right_block_section_7">
        <div className="Input_body_section_7">
          <input className="Input_text_section_7" placeholder={"Your Name"} />
          <input
            className="Input_text_section_7"
            placeholder="Your email Address"
          />
          <input
            className="Input_text_section_7"
            placeholder="Your budget (Optional)"
          />
          <input
            className="Input_text_section_7"
            placeholder="Your project description"
          />
          <button className="Button_section_7">SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Body_section_7;
