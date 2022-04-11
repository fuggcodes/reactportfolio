import React from "react";
import "./style.css";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <a className="navbar-brand" href="#about">
        David Binyatov
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              href="https://docs.google.com/document/d/1imsLY6FGH0oE3E8wEvOZUCvwL--ZhV8G/edit?usp=sharing&ouid=100280554828320549811&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
