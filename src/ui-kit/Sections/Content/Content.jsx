import React from "react";

import "./Content.css";

const Content = () => {
  return (
    <div className="Content">
      <div className="AboutMe">
        <h2 className="Content-hello">—— Hello</h2>
        <span className="Im">I'm </span>
        <span className="Name">Yaroslav Tereshko</span>
        <h3 className="Text-item-1">
          A UX / UI designer, product designer, content creator and creative
          director.
        </h3>
        <h4 className="Text-item-2">
          Of course, there's so much more to me than just a few fancy titles.
          Scroll down and get to know me,
        </h4>
      </div>
      <div className="Img">
        <img src="https://sun9-80.userapi.com/impg/4YWXHsgA-cQ2o1Kk-VjBBUkvrArKEIAKB_rjdw/LuULrEK8jLM.jpg?size=810x1080&quality=95&sign=d3200fac624fd2b814b913fce038f4c8&type=album" />
      </div>
    </div>
  );
};

export default Content;
