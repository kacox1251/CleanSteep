// Route Search

import React, { useState, useEffect } from "react";

import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, LogoutBtn } from "../components/Form";
import { Link } from 'react-router-dom';
import Searches from "../components/Searched";
import API from "../utils/API";


function RouteSearch() {
    const [place, setPlace] = useState({ city: "", state: "" });
    const [routes, setRoutes] = useState({});
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
            .then(res => {
              setRoutes(res.data)
            })
            .catch(err => console.log(err));
        setPlace({
          ...place,
          city: "",
          state: ""
        })
    }

    const handleAddRoute = key => {
      const filtered = routes.filter(a => {
        return a.id === key
      })

      API.saveRoute({
        routeID: filtered[0].id,
        routeName: filtered[0].name,
        routeLocation: {
          lat: filtered[0].latitude,
          long: filtered[0].longitude
        },
        routeDifficulty: filtered[0].rating,
      })
      .then(res => {
        // res.json(res)
        console.log("Route saved")
      })
      .catch(err => console.log(err));
    }

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
            <Col size="md-6">
              <Jumbotron>
                <h1>Search Page</h1>
                <Link to="/routes" >
                  <button type="button" className="btn btn-success">
                    Saved Routes
                  </button>
                </Link>
                <LogoutBtn onClick={handleLogout}>
                  Logout
                </LogoutBtn>
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
              {routes.length ? (
              <div>
                {routes.map(route => (
                  <Searches key={route.id}
                    image={route.imgSmall}
                    name={route.name}
                    type={route.type}
                    rating={route.rating}
                    pitches={route.pitches}
                    location={route.location}
                    lat={route.longitude}
                    long={route.latitude}
                    handleAddRoute={() => handleAddRoute(route.id)}
                  />
                ))}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
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