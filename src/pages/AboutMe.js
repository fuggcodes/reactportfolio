import React from "react";
import "../styles/AboutMe.css";
import Picture from "../images/img_1683.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutMe() {
  return (
    <section className="home-area" id="about">
      <Container fluid>
        <Row>
          <Col sm={12} lg={4}>
            <div id="profile">
              <Image
                id="my-pic"
                className="avatar avatar-circle"
                src={Picture}
              />
              <div className="portrait-title">
                <h2>David Binyatov</h2>
                <h3>Full Stack Web Developer</h3>
                <h3>
                  <a
                    href="https://www.rutgers.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Rutgers University</span>
                  </a>
                </h3>
              </div>
              <ul
                className="network-icon d-flex auto-mx justify-content-center"
                aria-hidden="true"
                id="social-pages-btn"
              >
                <li className="list-inline-item icon">
                  <a
                    href="mailto:davidbphotography101@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i class="fas fa-envelope"></i>
                  </a>
                </li>
                <li className="list-inline-item icon">
                  <a
                    href="https://github.com/fuggcodes"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item icon">
                  <a
                    href="https://www.linkedin.com/in/david-binyatov-3a7b35236"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div id="biography">
              <h1 id="header-title">Biography</h1>
              <p>
                My name is David Binyatov and I am currently enrolled in
                Rutgers University Full Stack Web Development Bootcamp where I
                will be graduating, April of 2022.
              </p>
              <p>
                I am a noble programmer that is not only willing to learn the ins
                 and outs of programming but also become a great project maanager 
                 that will lead and guide the greatest programmers. 
              </p>
            </div>
            <Row>
              <Col md={8}>
                <div id="education-section">
                  <h3>Education</h3>
                  <ul className="ul-edu fa-ul">
                    <li>
                      <i class="fas fa-graduation-cap"></i>
                      <div className="descriptions">
                        <p className="course">
                          Rutgers University - New Brunswick: Mason School of Arts and Sciences, Class of 2018.
                        </p>
                      </div>
                    </li>

                    <li>
                      <i class="fas fa-graduation-cap"></i>
                      <div className="descriptions">
                        <p className="course">
                          Full Stack Web Development Certificate{" "}
                        </p>
                        <p className="institution">Rutgers University</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <section id="skills-class" className="home-section">
        <Container className="container">
          <Row className="featurette">
            <Col md={12} className="section-heading">
              <h1>Skills</h1>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-js-square"></i>
              </div>
              <h3>JavaScript</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-react"></i>
              </div>
              <h3>React</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-html5"></i>
              </div>
              <h3>HTML5</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-css3-alt"></i>
              </div>
              <h3>CSS3</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fab fa-node-js"></i>
              </div>
              <h3>Node.js</h3>
            </Col>
            <Col sm={4}>
              <div className="featurette-icon">
                <i class="fas fa-database"></i>
              </div>
              <h3>Databases</h3>
              <p>MySQL, MongoDB</p>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default AboutMe;
