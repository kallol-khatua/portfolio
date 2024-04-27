/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./ProjectInfoCard.css";

function ProjectInfoCard({
  title,
  src,
  techStack,
  desc,
  siteLink,
  githubLink,
}) {
  return (
    <>
      <div className="card ProjectInfoCard"  style={{width: "25rem"}}>
        <img src={src} alt={title + ".png"} />
        <div className="card-body">
          <h3>{title}</h3>
          <h5>Tech: {techStack.map((tech, idx) => <span key={idx}>{tech + ", "}</span>)}</h5>
          <p>{desc}</p>
          <div className="action">
            <button>
              <a href={siteLink}>Demo</a>
            </button>
            <button>
              <a href={githubLink}>Code</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectInfoCard;
