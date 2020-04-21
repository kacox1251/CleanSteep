// Saved Routes
import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { LogoutBtn } from "../components/Form";
import { Link } from "react-router-dom";
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

  const [savedRoutes, setSavedRoutes] = useState({});
  // const { city, state } = place;

  function loadRoutes() {
    API.getRoute()
      .then(res => {
        setSavedRoutes(res.data);
        createGraph(res.data);
        // console.log("res.data", res.data);
      }).catch(err => console.log(err));
  }

  const markComplete = (route) => {
    const id = route._id;
    const completed = {
        completed: true
    };
    
    API.changeComplete({ id, completed })
    .then((res) => {
      
      // console.log(res)
      console.log("Marked complete");
      
      // refreshes window to create new completed graph
      window.location.reload(false);
    })
    .catch(err => console.log(err));
  }

  

  function handleDelete(id) {
    API.deleteRoute(id)
    .then(res => {
      loadRoutes();
      console.log("Route deleted")
    })
    .catch(err => console.log(err));
  };
  
  function createGraph(data) {
    let routeGrades = [];
    let graphedRoutes;
    const routeInfoDiv = document.getElementById("graphRouteNames");
    let routeOptions = document.getElementById("routeOptions").value;
    document.getElementById("graph").innerHTML = "";

    // console.log("routeOptions", routeOptions);
    // console.log(data);
    if(data === undefined) {
      return;
    } 
    if (routeOptions === "complete") {
      graphedRoutes = data.filter(function(route) {
        document.getElementById("graphTitle").innerHTML = "Completed Routes";
        return route.completed;
      });
    } else {
      graphedRoutes = data.filter(function(route) {
        document.getElementById("graphTitle").innerHTML = "Incomplete Routes";
        return !route.completed;
      });
    }
    // console.log("Array to graph: ", graphedRoutes);

    graphedRoutes.forEach(function(d) { // forEach iterates through an array 
      // console.log(d.routeDifficulty);
      routeGrades[d.routeDifficulty] = (routeGrades[d.routeDifficulty] || 0) + 1; // create new item if it doesn't exist
    });

    // set the dimensions and margins of the graph
    const width = 450;
    const height = 450;
    const margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    let radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'graph'
    let svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // set the color scale
    let color = d3.scaleOrdinal()
      .domain(routeGrades)
      .range(["#114641", "#1D5D4D", "#307456", "#498B5B", "#68A25E", "#8CB85F", "#B4CD5F", "#E2E062"]);

    // Compute the position of each group on the pie:
    let pie = d3.pie()
      .value(function(d) {
          // console.log(d);
          return d.value; });
    let data_ready = pie(d3.entries(routeGrades));

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr("fill", function(d){ return(color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    // The arc generator
    let arc = d3.arc()
    .innerRadius(radius * 0.5)         
    .outerRadius(radius * 0.8);

    // Arc for label positioning
    let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

    // Add the polylines between chart and labels:
    svg
    .selectAll("allPolylines")
    .data(data_ready)
    .enter()
    .append("polyline")
    .attr("stroke", "black")
    .style("fill", "none")
    .attr("stroke-width", 1)
    .attr("points", function(d) {
      const posA = arc.centroid(d); // line insertion in the slice
      const posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
      const posC = outerArc.centroid(d); // Label position = almost the same as posB
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
      // console.log("posA", posA, "posB", posB, "posC", posC);
      return [posA, posB, posC];
    });

    // Add the polylines between chart and labels:
    svg
    .selectAll("allLabels")
    .data(data_ready)
    .enter()
    .append("text")
    .text( function(d) { 
      // console.log("d.data.key: " + d.data.key, " d.data.value: " + d.data.value);
      return d.data.key; 
    })
    .attr("transform", function(d) {
      let pos = outerArc.centroid(d);
      let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
      return "translate(" + pos + ")";
    })
    .style("text-anchor", function(d) {
      let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return (midangle < Math.PI ? "start" : "end");
    });

    // clears prior route info
    routeInfoDiv.innerHTML="";

    //display name and route difficulty
    graphedRoutes.forEach(function(d) { // forEach iterates through an array 
      // console.log(`Route name and difficulty ${d.routeName}, ${d.routeDifficulty}`);
      let pElem = document.createElement("p");
      pElem.innerHTML = `<b>Route Name:</b> ${d.routeName} <b>Route Grade:</b> ${d.routeDifficulty}`;
      routeInfoDiv.append(pElem);
    });

  }

  useEffect(() => {
    loadRoutes()
  }, [])

  // console.log(savedRoutes)
  
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
                    id={route._id}
                    rating={route.routeRating.rating}
                    image={route.routeImage}
                    name={route.routeName}
                    type={route.routeType}
                    difficulty={route.routeDifficulty}
                    pitches={route.routePitch}
                    location={route.routeLocation.location}
                    lat={route.routeLocation.longitude}
                    long={route.routeLocation.latitude}
                    completed={route.routeRating.completed}
                    handleDelete={() => handleDelete(route._id)}
                    markComplete={() => markComplete(route)}
                  />
                ))}
              </div>
            ) : (
              <h3>No Saved Routes</h3>
            )}

            </Col>
            <Col size="md-7">
              <div className="centered">
                <select id="routeOptions" onChange={() => createGraph(savedRoutes)}>
                  <option value="complete">Completed Routes</option>
                  <option value="incomplete">Incomplete Routes</option>
                </select>
                <h1 id="graphTitle">Completed Routes</h1>
                <div id="graph"></div> 
                <div id="graphRouteNames"></div>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default SavedRoutes;
  