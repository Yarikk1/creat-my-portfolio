import React from "react";
import { ReactComponent as Lupa } from "../Assets/Icons/Lupa.svg";
import { ReactComponent as Menu } from "../Assets/Icons/Menu.svg";


import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-name">Tereshko Yaroslav.</h1>
      <button className="Lupa">
      <Lupa />
      </button>
      <input className="Input"></input>
      <div className="Menu">
      <Menu />
      </div>
    </div>
  );
};

export default Header;
