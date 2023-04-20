import React from "react";
import logo from "../images/logo.svg";
import { links, social } from "../data";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h2>VISIT CHRIS</h2>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {links.map((link) => {
            return (
              <li>
                <a
                  href={link.href}
                  rel="noreferrer"
                  key={link.id}
                  className="nav-link"
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {social.map((med) => {
            return (
              <li>
                <a
                  href={med.href}
                  rel="noreferrer"
                  target="_blank"
                  className="nav-icon"
                  key={med.id}
                >
                  <i className={med.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
