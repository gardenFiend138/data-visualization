const margin = {top: 25,right: 100,bottom: 25, left: 100}
const outerWidth = 500;
const outerHeight = 250;
const innerWidth =  outerWidth - margin.right - margin.left;
const innerHeight = outerHeight - margin.top - margin.bottom - 20;
const padding = margin;


// dimensions of the svg viewport
let svg = d3.select('.graphs').append('svg')
  .attr('class', 'bubbles')
  .attr('width', outerWidth)
  .attr('height', outerHeight)
  .style('padding', padding.right + padding.top)

let g = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

// const resetGElements = () => {
//   svg.append('g')
//     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
// }

// using d3 scales allows us to keep our svg viewport within the browser window and scales our data to fit within the space
// can be done manually with vanilla javascript, but it's not difficult math and is time consuming for a project with such a short timeline
// the domain is set directly form the minimum and maximum values of the data
// this is handlign the math behind normalizing the data for scaling purposes
const xScale = d3.scale
  .linear()
  .domain([0, 14])
  .range([0, outerWidth]);

const yScale = d3.scale
  .linear()
  .domain([1, 1200])
  .range([outerHeight, 0]); // invert values so it reads like a normal graph


// with the radius, we invert the range so we have an inverse relationship between the ld50 of the venom and the radius of the circle
const rScale = d3.scale
  .sqrt()
  .domain([.01, 1.0])
  .range([50, 1]);

const xAxis = d3.svg
  .axis()
  .orient('bottom')
  .scale(xScale);

const yAxis = d3.svg
  .axis()
  .orient('left')
  .scale(yScale);

  const yAxisExtend = d3.svg
  .axis()
  .orient('left')


const xAxisGroup = g.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(0' + ',' + 300 + ')');

const yAxisGroup = g.append('g').attr('class', 'axis');

// work on getting this visible to extend the y-axis
const yAxisExtendGroup = g.append('g').attr('class', 'axis')
  .attr('transform', 'translate(' + 20 + ', 0)');

const graph = {
  nodes: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
};

const tooltip = svg.append('g')
  .attr('class', 'tooltip')
  .style('display', null);

const circle = g.selectAll()
  .data(graph.nodes)
  .enter()
  .append('circle');

function render(data) {
  // using extent here to calculate min and max of the dataset
  // not needed due to defining the x, y, and r scales above
  // xScale.domain(d3.extent(data, function(d) { return d.fangsMM; }));
  // yScale.domain(d3.extent(data, function(d) { return d.venomYieldDryMG; }));
  // rScale.domain(d3.extent(data, function(d) { return d.ld50IV; }));
// console.log(data)
// xAxisGroup.call(xAxis);
// yAxisGroup.call(yAxis);

const circles = svg.selectAll('circle');

const ld50Radius = function(d) { return rScale(d.ld50IV); };

// console.log(data);

svg.selectAll('circle')
  // .attr('cx', function(d) { return xScale(d.fangsMM); })
  // .attr('cy', function(d) { return yScale(d.venomYieldDryMG); })
  .data(data)
  .attr('r', ld50Radius)
  .classed('node', true)
  .style('fill', 'blue')
  .style('opacity', .4)
  .style('stroke', 'black')
  .style('stroke-width', .3)
  .on('mouseover', function() {
    tooltip.style('display', 'block' );

  })
  .on('mouseout', function() { tooltip.style('display', 'none' );})
  .on('mousemove', function(d) {
    let xPos = d3.mouse(this)[0] - 15;
    let yPos = d3.mouse(this)[1] - 15;
    tooltip.attr('transform', 'translate(' + xPos + ',' + yPos + ')');
    tooltip.select('text')
      .text(d.commonName + ': ' + d.species )
  });



  tooltip.append('text')
    .data(data)
    .attr('cx', 15)
    .attr('cy', 15)
    .style('font-size', '12px');



  const shrinkCircles = () => {
    circles.attr('r', 5);
  };

  const growCircles = () => {
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);
    circles.attr('r', ld50Radius)
      .attr('cx', function(d) { return xScale(d.fangsMM); })
      .attr('cy', function(d) { return yScale(d.venomYieldDryMG); });
  };

  // const circleData = () => {
  //   circles.attr('r', ld50Radius)
  // }

  const graphIt = (data) => {
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);
    plotCircles();
  };

  const plotCircles = () => {
    circles
      .attr('cx', function(d) { return xScale(d.fangsMM); })
      .attr('cy', function(d) { return yScale(d.venomYieldDryMG); })
      .attr('r', 5);
  };

 const force = d3.layout.force()
           .nodes(data)
           .charge(-150)
           .friction(.9)
           .alpha(.5)
           .size([innerHeight * 2, innerWidth / 2])
           .on('tick', ticked);

 function ticked() {
   circles
       .attr('cx', d => d.x)
       .attr('cy', d => d.y)
       .attr('r', ld50Radius);
 }

 function forceGraph() {
   $(".axis").html("");
   circles.call(force.drag());
   force.start();
 }

 circles.call(force.drag());
 force.start();

 document.getElementById('graph')
         .addEventListener('click', graphIt, shrinkCircles);
 document.getElementById('converge').addEventListener('click', growCircles);
 document.getElementById('force-graph').addEventListener('click', forceGraph);

//not needed in this visualization, since I'm using static data,
// but putting in here so that I remember to use it when pulling from
// web APIs in the future
// circles.exit().remove();
}

// set measurements as numbers instead of strings
function type(d) {
  d.lengthCM = Number(d.lengthCM);
  d.weightG = Number(d.weightG);
  d.fangsMM = Number(d.fangsMM);
  d.venomYieldDryMG = Number(d.venomYieldDryMG);
  d.ld50IV = Number(d.ld50IV);
  d.species = d.species;

  return d;
}

d3.csv('venomData.csv', type, render);
