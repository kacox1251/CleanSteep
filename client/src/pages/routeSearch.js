// Route Search

import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

function RouteSearch() {
  const [formObject, setFormObject] = useState({});

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value});
    console.log(formObject)
  };

  // When the form is submitted, search the API for routes
  function handleFormSubmit(event) {
    event.preventDefault();
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <form>
            <Input
              onChange={handleInputChange}
              name="Location"
              placeholder="Location"
            />
            <FormBtn
              // disabled={!formObject.location}
              onClick={handleFormSubmit}
            >
            Submit Location
            </FormBtn>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="md-8">
          <Jumbotron>
            <h1>Search Page</h1>
          </Jumbotron>
          <p>Searches go here</p>
        </Col>
        <Col size="md-4">
          <Jumbotron>
            <h1>Saved Routes</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
  
}  

export default RouteSearch;