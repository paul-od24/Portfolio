import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Dublin Bikes"
              description=" Display bike stations on a map: Integrated Google Maps into the application and added station markers based on GPS coordinates. Hover for station information: Implemented a feature where users can hover over a marker to view detailed information about a specific bike station, including bike availability and stands. Also included availability trend charts upon clicking a station. 
              Weather information: Scraped hourly weather data from the MET Eireann API and stored it in the RDS database. Created a weather box displaying current weather and incorporated forecast data.
              Prediction Model: Trained a prediction model to forecast bike availability using historical bike availability and weather data stored in the RDS database.
              Host on web server: Utilized Flask, Gunicorn, and Nginx to host the web application on an EC2 instance, making it accessible over the internet.
              "
              ghLink="https://github.com/paul-od24/SWEProject"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Asteroids Game"
              description="Implemented increasing difficulty levels as the game progresses.
              Implemented player ship movements, including rotation clockwise or counterclockwise, firing bullets, applying thrust for motion, and hyperspace for teleportation to a new location.
              Implemented screen wrapping, where objects reappear on the opposite side of the screen when reaching its edge.
              Provided a safe respawn mechanism for the player after being destroyed, either through invincibility for a few seconds or placement in a calculated safe position.
              Implemented a system where players can regain lives by scoring 10,000 points based on the number of points earned for destroying asteroids.
              "
              ghLink="https://github.com/paul-od24/Asteroids_java"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
