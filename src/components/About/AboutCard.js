import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Paul O'Donovan </span>
            from <span className="purple"> Cork, Ireland.</span>
            <br /> I am a graduate student pursuing an MSc
            in Computer Science at University College Dublin.
            I am a dedicated frontend developer who thrives on the creative process, 
            leveraging React and JavaScript to bring ideas to life. 
            With a fervent commitment to staying at the forefront of technology, 
            I am eager to contribute to cutting-edge projects, 
            collaborating with like-minded individuals to build innovative and impactful digital experiences.
            <br />
            Additionally, I have previous experience working in accountancy and banking.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hackathons (Took part in Microsoft Hackathon recently)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports (Especially Tennis!!)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Paul O'Donovan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
