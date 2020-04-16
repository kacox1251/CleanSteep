// Saved Routes

import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Saves from "../components/Saved";
import API from "../utils/API";

function SavedRoutes() {

  // const [place, setPlace] = useState({ city: "", state: "" });
  const [savedRoutes, setSavedRoutes] = useState({});
  // const { city, state } = place;
  function loadRoutes() {
    API.getRoute()
      .then(res => {
        setSavedRoutes(res.data)
      }).catch(err => console.log(err));
  }

  function handleDelete(id) {
    // event.preventDefault();

    API.deleteRoute(id)
    .then(res => {
      loadRoutes();
      console.log("Route deleted")
    })
    .catch(err => console.log(err));
  };
  
  useEffect(() => {
    loadRoutes()
  }, [])

  console.log(savedRoutes)
  
    return (
        <Container fluid>
          <Row>
            <Col size="md-4">
              <Jumbotron>
                <h1>
                  Saved Routes
                </h1>
              </Jumbotron>
            </Col>
            <Col size="md-8">
              <h1>Graphs go here</h1>
            </Col>
            {savedRoutes.length ? (
              <div>
                {savedRoutes.map(route => (
                  <Saves key={route._id}
                    image={route.routeImage}
                    name={route.routeName}
                    type={route.RouteType}
                    difficulty={route.routeDifficulty}
                    pitches={route.routePitch}
                    location={route.routeLocation.location}
                    lat={route.routeLocation.longitude}
                    long={route.routeLocation.latitude}
                    handleDelete={() => handleDelete(route._id)}
                  />
                ))}
              </div>
            ) : (
              <h3>No Saved Routes</h3>
            )}

            {/* <Saves ></Saves> */}
          </Row>
        </Container>
      );
    }
  
  
  export default SavedRoutes;
  