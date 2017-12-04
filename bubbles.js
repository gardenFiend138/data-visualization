(function() {
  let width = 500,
    height = 500;
    
  let svg = d3.select('#chart')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('transform', 'translate(0,0)')
    
    d3.queue()
      .defer(d3.csv, 'venomLD50.csv')
      .await(ready)
      
    function ready (error, datapoints) {
      let circles = svg.selectAll('.Scientific Name Common Name')
      .data(datapoints)
      .enter().append('circle')
      .attr('class', 'Scientific Name Common Name')
      .attr('r', 10)
      .attr('fill', 'blue')
    }
})();