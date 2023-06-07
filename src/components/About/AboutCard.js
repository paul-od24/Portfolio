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
            <br />
            Additionally, I have previous experience working in accountancy and banking.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports (Especially Tennis!!)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing with my dog Joey!
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
