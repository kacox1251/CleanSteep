// Route Search

import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
//import { Input, FormBtn } from "../components/Form";

function RouteSearch() {
    return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Search Page</h1>
              </Jumbotron>
                <p>Searches go here</p>
              {/* <form>
                <Input
                  onChange={handleInputChange}
                  name="Location"
                  placeholder="Location"
                />
                <FormBtn
                  disabled={!(formObject.location)}
                  onClick={handleFormSubmit}
                >
                  Submit Location
                </FormBtn>
              </form> */}
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
  