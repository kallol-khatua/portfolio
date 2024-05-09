/* eslint-disable no-unused-vars */
import React from "react";
import "./Link.css";

function Link() {
  return (
    <div className="Link">
      <h2>Connect at</h2>
      <div className="links">
        <a
          href="https://github.com/kallol-khatua"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kallolkhatua2005/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <h3 id="design">Designed &amp; Developed By Kallol Khatua</h3>
      <h3 id="with">With</h3>
      <div className="love-icon">
        <a>
          <i className="fa-solid fa-heart"></i>
        </a>
      </div>
    </div>
  );
}

export default Link;
