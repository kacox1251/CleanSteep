// Login Page

import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { LoginInput, InputFormBtn } from "../components/Form";
import API from "../utils/API";
import "../styles/Header.css";

function Signup() {

  const [userInput, setUserInput] = useState({});

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserInput({...userInput, [name]: value});
    // console.log(userInput);
  };
  
  // When the form is submitted, search the API for routes
  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log("email: " + userInput.email);
    // console.log("password: " + userInput.password);
    if (userInput.email && userInput.password) {
      API.register(userInput)
        .then(res => {
          // console.log('res', res)
          alert('You are now registered! Please login')
          window.location.assign('/login')
        })
        .catch(e => {
          console.log("error!", e);
        });
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="pageTitle">Sign Up</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        <form>
            <LoginInput
              onChange={handleInputChange}
              name="email"
              placeholder="email"
              type="email"
            />
            <LoginInput
              onChange={handleInputChange}
              name="password"
              placeholder="password"
              type="password"
            />
            <InputFormBtn
              onClick={handleFormSubmit}
            >
            Sign Up
            </InputFormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
