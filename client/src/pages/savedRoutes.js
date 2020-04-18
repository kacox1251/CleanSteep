// Saved Routes

import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { LogoutBtn } from "../components/Form";
import { Link } from 'react-router-dom';
import API from "../utils/API";

function SavedRoutes() {

  const handleLogout = (e) => {
    e.preventDefault();
    API.logout()
    .then(() => {
      window.location.assign("/");
    })
    .catch(e => {
      console.log("error!", e);
    });

  }

    return (
        <Container fluid>
          <Row>
            <Col size="md-4">
              <Jumbotron>
                <h1>
                  Saved Routes
                </h1>
                <Link to="/search" >
                  <button type="button" className="btn btn-success">
                    Search Routes
                  </button>
                </Link>
                <LogoutBtn onClick={handleLogout}>
                  Logout
                </LogoutBtn>
              </Jumbotron>
            </Col>
            <Col size="md-8">
              <h1>Graphs go here</h1>
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default SavedRoutes;
  