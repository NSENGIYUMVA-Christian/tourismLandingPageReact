import React from "react";
import { links, social } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {social.map((soc) => {
          return (
            <li key={soc.id}>
              <a
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={soc.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
