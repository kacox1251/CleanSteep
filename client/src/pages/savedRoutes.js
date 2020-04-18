// Saved Routes

import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { LogoutBtn } from "../components/Form";
import { Link } from 'react-router-dom';
import Saves from "../components/Saved";
import API from "../utils/API";
import * as d3 from "d3";
import "../styles/SavedRoutes.css";

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

  // const [place, setPlace] = useState({ city: "", state: "" });
  const [savedRoutes, setSavedRoutes] = useState({});
  // const { city, state } = place;
  function loadRoutes() {
    API.getRoute()
      .then(res => {
        setSavedRoutes(res.data);
        createGraph(res.data);
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

  function createGraph(data) {
    let routeGrades = [];

    data.forEach(function(d) { // forEach iterates through an array 
      console.log(d.routeDifficulty);
      routeGrades[d.routeDifficulty] = (routeGrades[d.routeDifficulty] || 0) + 1; // create new item if it doesn't exist
    });

    // set the dimensions and margins of the graph
    var width = 450;
    var height = 450;
    var margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'graph'
    var svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(routeGrades)
      .range(["#114641", "#1D5D4D", "#307456", "#498B5B", "#68A25E", "#8CB85F", "#B4CD5F", "#E2E062"])

    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .value(function(d) {
          console.log(d);
          return d.value; })
    var data_ready = pie(d3.entries(routeGrades))

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)

    // The arc generator
    var arc = d3.arc()
    .innerRadius(radius * 0.5)         
    .outerRadius(radius * 0.8)

    // Arc for label positioning
    var outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)

    // Add the polylines between chart and labels:
    svg
    .selectAll('allPolylines')
    .data(data_ready)
    .enter()
    .append('polyline')
    .attr("stroke", "black")
    .style("fill", "none")
    .attr("stroke-width", 1)
    .attr('points', function(d) {
      var posA = arc.centroid(d); // line insertion in the slice
      var posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
      var posC = outerArc.centroid(d); // Label position = almost the same as posB
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
      console.log("posA", posA, "posB", posB, "posC", posC);
      return [posA, posB, posC]
    });

    // Add the polylines between chart and labels:
    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
    .text( function(d) { console.log(d.data.key) ; return d.data.key } )
    .attr('transform', function(d) {
      var pos = outerArc.centroid(d);
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
      return 'translate(' + pos + ')';
    })
    .style('text-anchor', function(d) {
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      return (midangle < Math.PI ? 'start' : 'end')
    })

  }

  useEffect(() => {
    loadRoutes()
  }, [])

  console.log(savedRoutes)
  
    return (
        <Container fluid>
          <Row>
            <Col size="md-5">
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
            </Col>
            <Col size="md-7">
              <div className="centered">
                <h1>Completed Routes</h1>
                <p>will need to filter for complete when setup</p>
                <div id="graph"></div>
              </div>
            </Col>

            {/* <Saves ></Saves> */}
          </Row>
        </Container>
      );
    }
  
  
  export default SavedRoutes;
  