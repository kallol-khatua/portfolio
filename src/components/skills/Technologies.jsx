import "./Technologies.css";
import TechnologyInfoCard from "./TechnologyInfoCard";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import bootstrap from "../../assets/bootstrap.png";
import socketio from "../../assets/socketio.png";
import webrtc from "../../assets/webrtc.png";

function Technologies() {
  return (
    <div className="Technologies">
      <div>
        <h2>These are the technologies I&apos;ve worked with</h2>
      </div>
      <div className="card-container">
        {/* 
  box-shadow: 0px 3px 5px white; */}
        <TechnologyInfoCard
          technology="CSS"
          src={css}
          alt="css.png"
          shadowColor="#0277BD"
          // shadowColor="blue"
        />
        <TechnologyInfoCard
          technology="HTML"
          src={html}
          alt="html.png"
          shadowColor="#E44D26"
        />
        <TechnologyInfoCard
          technology="JavaScript"
          src={javascript}
          alt="javascript.png"
          shadowColor="#FFD600"
        />
        <TechnologyInfoCard
          technology="Bootstrap"
          src={bootstrap}
          alt="bootstrap.png"
          shadowColor="#7509F6"
        />
        <TechnologyInfoCard
          technology="React JS"
          src={react}
          alt="react.png"
          shadowColor="#00D8FF"
        />
        <TechnologyInfoCard
          technology="Node JS"
          src={node}
          alt="node.png"
          shadowColor="#8CC84B"
        />
        <TechnologyInfoCard
          technology="Express JS"
          src={express}
          alt="express.png"
          shadowColor="#828282"
        />
        <TechnologyInfoCard
          technology="Mongo DB"
          src={mongodb}
          alt="mongodb.png"
          shadowColor="#499D4A"
        />
        <TechnologyInfoCard
          technology="Socket.IO"
          src={socketio}
          alt="socketio.png"
          shadowColor="#FFFFFF"
        />
        <TechnologyInfoCard
          technology="WebRTC"
          src={webrtc}
          alt="webrtc.png"
          shadowColor="#FC0006"
        />
      </div>
    </div>
  );
}

export default Technologies;
