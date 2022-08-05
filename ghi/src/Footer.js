import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="main-footer">
      <Container>
        <Row>
          <Col>
            <h4>About our company</h4>
            <li>Nomad Nerds</li>
          </Col>
          <Col>
            <SocialIcon url="https://linkedin.com/" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://twitter.com" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://facebook.com" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://instagram.com" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://user@gmail.com" style={{ height: 35, width: 35 }} />
          </Col>
        </Row>
        <hr />
        <Row>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Nomad Nerds | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
