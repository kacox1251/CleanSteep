// Login Page

import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Login</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
