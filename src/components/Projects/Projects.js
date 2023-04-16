import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Bank from "../../Assets/Projects/Banking.jpg";
import Event from "../../Assets/Projects/event.jpg";
import Smart from "../../Assets/Projects/smart.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Event}
              isBlog={false}
              title="Event Management System"
              description="Online web application that helps
              users can book the event organizers to make their event more
              successfull.
              •Acquired Skills: React JS, Node JS, MongoDB, Express JS,
              Git
              •Role: Frontend Develope"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bank}
              isBlog={false}
              title="Banking And Finance System"
              description="Online financial management
              application that helps users manage their savings and gives
              recommendations based on their savings.
              •Acquired Skills: - Django, SQL, Flask, Chart JS, HTML, CSS,
              JS
              •Role: Team Lead, Frontend Developer"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Smart}
              isBlog={false}
              title="SMART CITY"
              description="A Java Full Stack based Web Application to store all
              the essential databases of a Smart City like Government places, IT
              Sector, Entertainment , Tourism, Education, Health and Security
              •Acquired Skills: Spring Boot, HTML, CSS, JSP, Spring MVC
              •Role: Team Lead, Full Stack Developer"
                      
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
