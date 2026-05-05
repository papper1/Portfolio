import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple">ME </span>
            </h1>
            <p className="home-about-body">
              I am Thang Nguyen, a final-year Information Technology
              student at Hanoi University of Civil Engineering.
              <br />
              <br />
              I focus on
              <i>
                <b className="purple">
                  {" "}
                  Flutter mobile development, Firebase integration, and REST API
                  based applications
                </b>
              </i>
              with an emphasis on maintainable code structure.
              <br />
              <br />
              I have built practical projects such as a music streaming app and
              a desktop product processing tool, and I am comfortable with
              <i>
                <b className="purple">
                  {" "}
                  feature-based architecture, Clean Architecture, and Git-based
                  workflows
                </b>
              </i>
              across frontend and backend collaboration.
              <br />
              <br />
              My current goal is to grow as a
              <b className="purple"> Flutter developer </b>
              by contributing to real products and learning from production
              engineering practices.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Nguyen Quang Thang"
                style={{ borderRadius: "20px" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
