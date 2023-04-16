import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Keerthana Mandadi</span>
            from <span className="purple"> Vijayawada, India.</span>
            <br />I am Persuing my undergraduate program in KL University Vijayawada 
            <br />
            <br />
            Apart from Acadamic as part of leadership roles i bear :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Director Of designing (Kognitiv Technology club)
            </li>
            <li className="about-activity">
              <ImPointRight /> Student Peermentor
            </li>
         
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The person below this quote is always amazing"{" "}
          </p>
          <footer className="blockquote-footer">- Keerthana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
