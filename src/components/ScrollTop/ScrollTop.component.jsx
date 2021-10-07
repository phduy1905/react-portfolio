import React from "react";
import { FaChevronUp } from "react-icons/fa";
import "./ScrollTop.styles.scss";

export const ScrollTop = ({ show }) => {
  return (
    <div
      className="scroll-top"
      id="scroll-top"
      style={{ bottom: show ? "5rem" : "-5rem" }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FaChevronUp />
    </div>
  );
};
