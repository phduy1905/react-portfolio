import React from "react";
import "./Footer.styles.scss";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <a href="mailto:phduy1905@gmail.com" className="footer__mail">
        phduy1905@gmail.com
      </a>
      <div className="footer__socials-container">
        <a href="https://github.com/phduy1905" target="_blank" rel="noreferrer">
          <FaGithub className="footer__socials-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/duy-pham-77bbb6121/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="footer__socials-icon" />
        </a>
        <a
          href="https://www.facebook.com/phduy1905/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare className="footer__socials-icon" />
        </a>
        <a
          href="https://www.instagram.com/phduyy_/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="footer__socials-icon" />
        </a>
      </div>
    </footer>
  );
};
