# Venom Analysis: LD50, Invenomation Effects, & Uses in Medicine

## Background and Overview
I have always been fascinated by reptiles; in addition to keeping and breeding snakes, I have attended international symposiums dedicated to furthering the study of reptiles, and over the past few years have taken an interest in the emerging medical research concerning the use of venom in medicine, particularly in pain management and cancer treatments. 

These data visualizations re represented by a bubble chart, and will correlate:
* LD-50 of venoms
* Uses in Medicine 
* Classification of venom type 
  * Mytotoxin
  * Neurotoxin
  * Hemotoxin
  * Necrotoxin
  * Cytotoxin
* Effects of Envenomation 
* Bites/ deaths per year 
* Proteins Present 


## Functionality and MVP
Users will be able to view a bubble map, with each circle representing an individual venomous species. 
* The circle size will correlate to the LD-50 of the venom 
* The color of each circle will be determined by the classification of the venom type. 
* Users will be able to hover over each circle, and it will expand to reveal more information about each species, including: scientific and common names, the effects of envenomation, and bites/ deaths per year. 
* If the venom is being researched for medical use, the circle will ___________ .
* Users will also be able to filter through the data based on type of animal (snake, lizard, insect, arachnid, others) with the click of a button above the graph

## Wireframes

![Wireframe](https://github.com/gardenFiend138/venom-data-visualization-wireframes/blob/master/venom-data-wireframes.jpg)

## Architecture and Technologies

For this data visualization, I will be using:
  * JavaScript for the overall graph structure and logic
  * The D3 library, which will will allow me to add transitions to the graph interactions 
  * HTML5 Canvas for rendering 
  * Webpack for bundling
  
I will be using data from the VenomKB API, and will be receiving data as JSON, but will also rely on data from various other sources which do not have APIs. For these sources, I will make a CSV file and manually transport the required data. 


## Implementation Timeline

#### Weekend Prior
* Research database APIs, become familiar with the layout of the data I'll be using
* Research the D3 library, check out docs, watch introduction and overview videos

#### Day 1
* Get D3 setup and running
* Continue to research and become more familiar with D3
* Get basic backend written and running
* Decide how to parse data receive from API, and how to deal with data that needs to be input manually (uses in medicine, venom classification)
* Make API requests to VenomKB
* Style basic layout

#### Day 2
* Use json returned to make basic bubble graph rendering each species by scientific name 
* Add LD-50 data to the graph (circle size)
* Finish styling for basic layout

#### Day 3 
* Add venom type to the graph (color)
* Add uses in medicine 
* Work on styling

#### Day 4
* Add buttons at top of canvas to filter based on type of animal 
* Finish styling
* Finish adding Effects of envenomation, bites/ deaths per year, and proteins

#### Day 5
* Wrap up loose ends, make sure transitions are smooth and UI is intuitive and responsive

