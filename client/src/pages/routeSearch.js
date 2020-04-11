// Route Search

import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

function RouteSearch() {
    return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Search Page</h1>
              </Jumbotron>
              <form>
                <Input
                  // onChange={handleInputChange}
                />
                <FormBtn
                  // disabled={!(formObject.location)}
                  // onClick={handleFormSubmit}
                >
                  Search Location
                </FormBtn>
              </form>
              <p>Searches go here</p>
            </Col>
            <Col size="md-6">
              <Jumbotron>
                <h1>Saved Routes</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      );
  
}  
export default RouteSearch;
  