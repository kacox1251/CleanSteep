import * as d3 from "d3";
export function Graph(props) {

}

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

    // set the color scale, add more colors when you get the chance
    var color = d3.scaleOrdinal()
      .domain(routeGrades)
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

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

  }