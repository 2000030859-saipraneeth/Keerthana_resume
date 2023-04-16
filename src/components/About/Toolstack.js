import React from "react";
import { Col, Row } from "react-bootstrap";
import {FaAws} from "react-icons/fa";
import {VscAzure} from "react-icons/vsc";

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiPycharm,
  SiGooglecolab,
  SiGooglecloud
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
      </Col>
     
    </Row>
  );
}

export default Toolstack;
