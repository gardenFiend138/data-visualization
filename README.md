# Snake Venom Analysis

## Background and Overview
I have always been fascinated by reptiles; in addition to keeping and breeding snakes, I have attended international symposiums dedicated to furthering the study of reptiles, and over the past few years have taken an interest in the emerging medical research concerning the use of venom in medicine, particularly in pain management and cancer treatments. While not every species' venom is being researched for use in medicine, the fact remains that there is a justifiably negative stigma regarding venomous animals. Despite the inherent danger presented by these animals, we are just beginning to scratch the surface of the the ways in which their complex toxins may benefit us. At the same time, many of these animals are facing threats due to habitat loss--if we lose these animals, we may never realize the potential their toxins might have for positively impacting modern medicine. 

These data visualizations re represented by a bubble chart, and will correlate:
* LD-50 of venoms (measured in mg/kg; amount of venom required to to be fatal to 50% of test population)
* Venom Yield
* Fang size
* Snake weight
* Snake length


## Functionality and MVP
Users will be able to view a bubble map, with each circle representing an individual species of snake. Due to limitations in datasets available, there will be 23 species represented. While this is a limitation, it will allow me to easily add more detailed information if time permits with my bonus features.

* The common name will be in the center of the circle 
* The circle size will correlate to the LD-50 of the venom 
* The X-axis will correlate to the venom yield (weight of dried venom in mg))
* The Y-axis will correlate to the maximum fang length
* Users will be able to hover over each circle, making the circle expand, and see additional information, including:
  * Scientific name
  * Snake weight
  * Snake length
* Users will be met with a splash page that will give an overview of what data the graph depicts and why it's important

### Bonus features
* Circles will slowly pulsate if the animal's venom is being researched for medical use.
* Incorporate other data from VenomKB database (JSON) to grab an image URL of each animal.

## Wireframes

![Wireframe](https://github.com/gardenFiend138/venom-data-visualization-wireframes/blob/master/VenomDataSplash.jpg)
![Wireframe](https://github.com/gardenFiend138/venom-data-visualization-wireframes/blob/master/VenomDataMainVisualization.jpg)
![Wireframe](https://github.com/gardenFiend138/venom-data-visualization-wireframes/blob/master/VenomDataHoverEffect.jpg)

## Architecture and Technologies

For this data visualization, I will be using:
  * JavaScript for the overall graph structure and logic
  * The D3 library, which will will allow me to parse the csv data and add transitions to the graph interactions 
  * Use HTML SVG elements for rendering the data visualization 
  * NPM live-server as the local server
  
I will be using data taken form snakedatabase.org; the database is not downloadable, so I will save it has HTML and use an HTML to CSV converter so I save the data as a csv file within my project. 

## Implementation Timeline

#### Weekend Prior
* Research database APIs, become familiar with the layout of the data I'll be using
* Research the D3 library, check out docs, watch introduction and overview videos

#### Day 1
* Get D3 setup and running.
* Continue to research and become more familiar with D3.
* Decide how to deal with data once in CSV file format (the HTML to CSV converter left some extraneous information).
* Get basic bar graph to render using LD-50 of venoms.

#### Day 2
* Finish cleaning up data in CSV file (scientific and common names are separated by a new line--split into two separate columns).
* Add LD-50 data to the graph in the form of circles that correlate inversely to the toxicity of the venom (larger circles will have a lower LD-50).
* Render X and Y axis with venom yield and maximum fang length.
* Research D3 transition implementations.

#### Day 3 
* Work on styling the overall layout of the main visualization page.
* Research expanding bubble implementation for hover effect.
* Sort data based on fang length and venom yield.
* Begin styling splash page with background information on the data.

#### Day 4
* Finish splash page styling and information.
* Implement hover effect of circle expanding to reveal more information about the snake.

#### Day 5
* Wrap up loose ends, make sure transitions are smooth and UI is intuitive and responsive.
* If time, work on bonus features, with the first being a pulsating effect on the circle if the animal's venom is being researched for medical use.

