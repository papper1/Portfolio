import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Thang Nguyen</span> from{" "}
            <span className="purple">Hoang Mai, Hanoi, Vietnam</span>.
            <br />
            I am currently a{" "}
            <span className="purple">Flutter Developer Intern candidate</span>{" "}
            and a final-year IT student.
            <br />I study{" "}
            <span className="purple">Information Technology</span> at{" "}
            <span className="purple">
              Hanoi University of Civil Engineering
            </span>
            .
            <br />
            My background includes Flutter, Firebase, REST APIs, FastAPI-based
            backend collaboration, and application architecture focused on
            scalability.
            <br />
            <br />
            Areas I am actively building in:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Flutter mobile and desktop application
              development
            </li>
            <li className="about-activity">
              <ImPointRight /> Firebase authentication and Cloud Firestore
              integration
            </li>
            <li className="about-activity">
              <ImPointRight /> Clean Architecture and maintainable codebases
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build useful software, keep the code clean, and improve with every
            release."
          </p>
          <footer className="blockquote-footer">Thang Nguyen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
