// Route Search

import React, { useState, useEffect } from "react";

import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

function RouteSearch() {
    const [place, setPlace] = useState({ city: "", state: "" });
    const { city, state } = place;

    const handleInputChange = event => {
        // # name => name of state to update || value => what to update it to
        const { name, value } = event.target;
        setPlace({
            ...place,
            [name]: value
        });
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getMountainRoutes(city, state)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        setPlace({
          ...place,
          city: "",
          state: ""
        })
    }

    return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Search Page</h1>
              </Jumbotron>
              <form>
                <Input
                  city={city}
                  state={state}  
                  handleInputChange={handleInputChange}
                />
                <FormBtn
                  // disabled={!(formObject.location)}
                  handleFormSubmit={handleFormSubmit}
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