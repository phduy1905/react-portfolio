import React from "react";
import "./HamburgerMenu.styles.scss";
import { FaBars } from "react-icons/fa";

export const HamburgerMenu = ({ handleClick }) => {
  return (
    <div
      className="header__bars"
      onClick={() => {
        handleClick();
      }}
    >
      <FaBars className="bars" />
    </div>
  );
};
