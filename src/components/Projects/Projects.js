import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import capitify from "../../Assets/Projects/capitify.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ozonbridge from "../../Assets/Projects/ozonbridge.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Practical applications I built while focusing on Flutter, Firebase,
          and data processing workflows.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capitify}
              isBlog={false}
              title="Capitify"
              description="Spotify-inspired Flutter music streaming application built with feature-based architecture and Provider. Includes Firebase Authentication, Cloud Firestore, audio playback controls, caching, mini player, onboarding flow, and persistent session recovery."
              ghLink="https://github.com/papper1/Capitify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ozonbridge}
              isBlog={false}
              title="OzonBridge"
              description="Flutter desktop interface connected to a Python FastAPI backend for product crawling, AI-assisted normalization, Russian translation, template-based Ozon mapping, and XLSX export. Includes dashboards for monitoring jobs and reviewing local output files."
              ghLink="https://github.com/papper1/OzonBridge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio Website"
              description="Personal portfolio built on React to present my profile, technical skills, selected projects, and resume in a simple multi-page format ready for deployment on Vercel."
              ghLink="https://github.com/papper1/Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
