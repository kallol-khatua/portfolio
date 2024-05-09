import "./Home.css";
import resume from "../../assets/KALLOL_KHATUA_RESUME.pdf";
import background from "../../assets/basee.svg";
import profile from "../../assets/avatar.svg";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import EmailIcon from "@mui/icons-material/Email";

function Home() {
  return (
    <div className="Home">
      <img src={profile} alt="background" />
      <h3>Kallol Khatua</h3>
      <h3>Full-Stack Developer</h3>
      <div>
        <a id="hire" href="mailto:kallolkhatua2005@gmail.com">
          <span>Hire Me <EmailIcon/></span>
        </a>
        <a id="resumeDownload" download href={resume} type="button">
            Download CV <CloudDownloadIcon />
        </a>
      </div>
      <img id="background" src={background} alt="background" />
    </div>
  );
}

export default Home;
