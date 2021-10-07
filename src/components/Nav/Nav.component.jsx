import React from "react";
import "./Nav.styles.scss";
import { navLinks } from "../constant";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";

export const Nav = () => {
  const { isNavOpen, closeNav } = useAppContext();
  return (
    <nav className={`nav ${isNavOpen ? "show-nav" : ""}`} id="nav">
      <FaTimes className="nav__icon" onClick={closeNav} />
      <ul className="nav__list">
        {navLinks.map(({ id, name, url }) => {
          return (
            <li className="nav__item" key={id} onClick={closeNav}>
              <a href={url} className="nav__link">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
