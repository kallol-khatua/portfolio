import "./Projects.css";
import ProjectInfoCard from "./ProjectInfoCard";

function Projects() {
  return (
    <div className="Projects">
      <div>
        <h2>My Projects</h2>
      </div>
      <div className="card-container row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
        <ProjectInfoCard
          title="Brief Insight"
          src="https://codewithbiki.netlify.app/static/media/shopeasy.7d9a081d08b506c1505a.png"
          techStack={[
            "React JS",
            "Material UI",
            "Bootstrap",
            "PWA",
            "OpenWeather API",
            "Netlify",
          ]}
          desc="Brief Insight is an API-based application designed to provide accurate and user-friendly real-time weather information. This app delivers on-demand updates with a sleek and intuitive design, keeping you informed about the latest weather conditions in a seamless and enjoyable way."
          siteLink="https://briefinsight.netlify.app/"
          githubLink="ssa"
        />
        <ProjectInfoCard
          title="aajasa"
          src="https://codewithbiki.netlify.app/static/media/shopeasy.7d9a081d08b506c1505a.png"
          techStack={["as", "asa"]}
          desc="dsdsds sdsd"
          siteLink="ssd"
          githubLink="ssa"
        />
        <ProjectInfoCard
          title="aajasa"
          src="https://codewithbiki.netlify.app/static/media/shopeasy.7d9a081d08b506c1505a.png"
          techStack={["as", "asa"]}
          desc="dsdsds sdsd"
          siteLink="ssd"
          githubLink="ssa"
        />
        <ProjectInfoCard
          title="aajasa"
          src="https://codewithbiki.netlify.app/static/media/shopeasy.7d9a081d08b506c1505a.png"
          techStack={["as", "asa"]}
          desc="dsdsds sdsd"
          siteLink="ssd"
          githubLink="ssa"
        />
      </div>
    </div>
  );
}

export default Projects;
