// Saved Routes

import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function SavedRoutes() {

    return (
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>
                  Routes
                </h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h1>Saved Routes Here</h1>
            </Col>
            <Col size="md-6">
              <h1>Graphs go here</h1>
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default SavedRoutes;
  