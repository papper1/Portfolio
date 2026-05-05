import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDart,
  SiFastapi,
  SiFlutter,
  SiGithub,
  SiGit,
  SiPostman,
} from "react-icons/si";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Python from "../../Assets/TechIcons/Python.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter fontSize={"24px"} />
        <div className="tech-icons-text">Flutter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart fontSize={"24px"} />
        <div className="tech-icons-text">Dart</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="rest api" />
        <div className="tech-icons-text">REST API</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"24px"} />
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"24px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"24px"} />
        <div className="tech-icons-text">Version Control</div>
      </Col>
    </Row>
  );
}

export default Techstack;
