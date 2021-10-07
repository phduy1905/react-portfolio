import React from "react";
import "./PrimaryButton.styles.scss";

export const PrimaryButton = ({ children, url, newtab }) => {
  return (
    <a
      href={url}
      target={`${newtab ? "_blank" : ""}`}
      rel="noreferrer"
      className="btn"
    >
      {children}
    </a>
  );
};
