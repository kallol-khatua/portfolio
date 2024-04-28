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
    <div className="card ProjectInfoCard yellow-glowing-shadow">
      <img src={src} alt={title + ".png"} />
      <div className="card-body">
        <h3>{title}</h3>
        <h5>
          <span className="tech">Tech:</span>{" "}
          {techStack.map((tech, idx) => (
            <span className="techStack" key={idx}>
              {tech + ", "}
            </span>
          ))}
        </h5>
        <p>{desc}</p>
        <div className="action">
          <button className="yellow-glowing-shadow">
            <a href={siteLink}>Demo</a>
          </button>
          <button className="yellow-glowing-shadow">
            <a href={githubLink}>Code</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoCard;
