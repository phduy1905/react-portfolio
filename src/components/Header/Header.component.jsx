import React, { useEffect, useState } from "react";
import "./Header.styles.scss";
import { HamburgerMenu } from "..";
import { navLinks } from "../constant";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export const Header = () => {
  const [active, setActive] = useState(false);
  const { openNav } = useAppContext();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  });

  return (
    <header className={active ? "show-shadow" : ""}>
      <div className="container-fluid">
        <Link to="/" className="logo" target="_top">{`<duy/>`}</Link>
        <ul className="header__menu">
          {navLinks.map(({ id, name, url }) => {
            return (
              <li className="header__item" key={id}>
                <a href={url} className="header__link">
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <HamburgerMenu handleClick={openNav} />
      </div>
    </header>
  );
};
