import "./Contact.css";
import Email from "./Email";
import Link from "./Link";

function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Me</h2>
      <Email/>
      <Link/>
      {/* <div className="links"></div> */}
    </div>
  );
}

export default Contact;
