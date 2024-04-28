import "./Projects.css";
import ProjectInfoCard from "./ProjectInfoCard";

function Projects() {
  return (
    <div className="Projects">
      <div>
        <h2>These are my Projects</h2>
      </div>
      {/* row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 */}
      <div className="card-container">
        <ProjectInfoCard
          title="Todo Pilot"
          src="https://codewithbiki.netlify.app/static/media/shopeasy.7d9a081d08b506c1505a.png"
          techStack={[
            "React JS",
            "Material UI",
            "Bootstrap",
            "CSS",
            "JavaScript",
            "PWA",
            "LocalStorage",
            "Netlify",
          ]}
          desc="Todo Pilot is a task management application designed to help you organize and store your tasks in a structured manner. By leveraging local storage, this app ensures that your task list is always at your fingertips, offering a reliable and efficient way to manage your to-dos without the need for databases."
          siteLink="https://todopilot.netlify.app/"
          githubLink="https://github.com/kallol-khatua/todo-with-local-storage"
        />
        <ProjectInfoCard
          title="Brief Insight"
          src="https://codewithbiki.netlify.app/static/media/shopeasy.7d9a081d08b506c1505a.png"
          techStack={[
            "React JS",
            "Material UI",
            "Bootstrap",
            "CSS",
            "JavaScript",
            "PWA",
            "OpenWeather API",
            "Netlify",
          ]}
          desc="Brief Insight is an API-based application designed to provide accurate and user-friendly real-time weather information. This app delivers on-demand updates with a sleek and intuitive design, keeping you informed about the latest weather conditions in a seamless and enjoyable way."
          siteLink="https://briefinsight.netlify.app/"
          githubLink="https://github.com/kallol-khatua/weather-info"
        />
        <ProjectInfoCard
          title="Invito"
          src="https://codewithbiki.netlify.app/static/media/shopeasy.7d9a081d08b506c1505a.png"
          techStack={[
            "Node JS",
            "Express JS",
            "MongoDB",
            "Socket IO",
            "Passport JS Authentication",
            "EJS",
            "Bootstrap",
            "CSS",
            "JavaScript",
            "Render",
          ]}
          desc="Invito is a social media platform designed to offer a user-friendly interface. Connect with others through direct messages, create posts, and engage with others' posts. The platform includes a notification system and a user dashboard for easy updates and interactions."
          siteLink="https://invito.onrender.com/"
          githubLink="https://github.com/kallol-khatua/invito"
        />
        <ProjectInfoCard
          title="DebateBox"
          src="https://codewithbiki.netlify.app/static/media/shopeasy.7d9a081d08b506c1505a.png"
          techStack={[
            "Node JS",
            "Express JS",
            "MongoDB",
            "Socket IO",
            "WebRTC",
            "Passport JS Authentication",
            "EJS",
            "Bootstrap",
            "CSS",
            "JavaScript",
            "Render",
          ]}
          desc="DebateBox is a platform designed to facilitate open debate and discussion with a user-friendly interface. You can share your thoughts via text messages, video, or audio. Additionally, you have the option to start your own debate on a topic of your choice, allowing for dynamic and engaging exchanges of ideas."
          siteLink="https://debatebox.onrender.com/"
          githubLink="https://github.com/kallol-khatua/debate-box"
        />
      </div>
    </div>
  );
}

export default Projects;
