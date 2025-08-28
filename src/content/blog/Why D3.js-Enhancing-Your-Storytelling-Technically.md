---
draft: true
title: "How to become a Frontend Master"
snippet: "Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti."
image: {
    src: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?&fit=crop&w=430&h=240",
    alt: "frontend master"
}
publishDate: "2022-11-07 12:00"
category: "Tutorials"
author: "Connor Lopez"
tags: [astro, tailwindcss, frontend]
---

## Prelude 
![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHdocGZubjBhaG1vaGxobTB6c3Jyejg3aXd2djRjcHVwYzF1aThyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3PAL5bChWnak0WJ32x/giphy.gif)

This article was previously published on [my blog](url) on [Date]. I believe in owning my digital real estate before becoming a tenant on everyone else's platforms.

## Introduction

In 2017, at the [Marta hackathon](https://itsmarta.com/marta-hackathon.aspx), I remembered hearing that data became more valuable than oil. I at that time had no clue what to do with this knowledge but it stuck with me. Fast forward to the last 18 months, I took more time in passing to understand numbers/data tells stories and I needed to understand how to use the tools to do so. I learnt how to use Microsoft Excel at an intermediate level over the years, as in many spaces and places, I have been the _tech person_. Excel has long been a powerhouse for displaying data in **all shapes, types, and forms**, from simple tables to complex pivots and charts, Excel makes data accessible for millions ..... it is, however, a proprietary piece of software. Yes, there are other [alternatives](https://www.techrepublic.com/article/free-alternatives-to-microsoft-excel/), but we may run into legal issues if we need to continuously use Excel to tell stories for using data. Here are my thought process in the championship for learning data visualization tools as a software developer operating in the web development space. _P.S: I got greater insight as I covered/completed the freeCodeCamp data visualization course and got the [certificate](https://www.freecodecamp.org/certification/nerajno/data-visualization)._ While Excel excels at static and semi-dynamic visualizations, it can be limiting when:
- Custom, interactive visualizations are required.
- Large and real-time data must be visualized on the web.
- Integration with other online platforms and workflows is needed.

This is where **D3.js** comes into play.

## What is D3.js?

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa212anRjZXJjendnaGNiYjE1aTZoa2E2dmRqczVvY2c4cHNzYmNpaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PrEUkNFD9pN2o/giphy.gif)

D3.js (Data-Driven Documents) is a powerful JavaScript library that enables users to create **dynamic, interactive** data visualizations directly in web browsers. Unlike Excel, D3.js manipulates the Document Object Model (DOM) based on data, giving developers total control over how everything is displayed. Other programming languages/frameworks like [Matplotlib](https://matplotlib.org/), [JavaFX](https://openjfx.io/), and [seaborn](https://seaborn.pydata.org/) are also other tools used to do the same thing.

## Uses of D3.js

- Building interactive dashboards for the web.
- Creating custom charts (line, bar, pie, scatter plots, and [more](https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=hero&utm_campaign=try-observable)).
- Generating animated or real-time graphics that react to user input.
- Visualizing complex network data or geospatial information.

## D3.js Basics: Key Terms and Applications

- **Selections**: Pick and modify DOM elements based on data.
- **Bindings**: Attach data to DOM elements for dynamic updates.
- **Scales**: Map data ranges to screen coordinates.
- **Axes**: Automatically generate axes for charts.
- **Transitions**: Animate changes for smooth, interactive graphics.

Typical applications include web-based business dashboards, advanced scientific visualizations, and infographics.

## D3.js Terminology I had to understand

### Common Methods and Functions

##### Selections (`d3.select`, `d3.selectAll`)

- **Purpose**: Select DOM elements to read or modify them.
- `d3.select()` picks the first element matching a selector, while `d3.selectAll()` grabs every matching element.[^1]
- Example:

```js
d3.select("p"); // first <p>
d3.selectAll(".bar"); // all elements with class 'bar'
```

##### Data Binding (`.data()`, Data Join)

- **Purpose**: Attach arrays of data to groups of DOM elements. This is the core of D3's "data-driven" philosophy.
- The `.data()` method binds each datum to an element, while the `.join()`, `.enter()` and `.exit()` workflow manages the creation and removal of elements if the number of elements and data points don't match.
- Example:

```js
d3.selectAll("p").data([1, 2, 3]).text(d => d);
// Attach each number to a <p> and update its text
```

##### Appending and Removing Elements (`.append()`, `.remove()`)

- **Purpose**: Dynamically build visualizations in the DOM—especially SVG elements for graphics.
- `.append()` creates a new child, `.remove()` deletes selected elements.
- Example:

```js
d3.select("svg").append("rect");
d3.select("rect.bar").remove();
```

##### Attribute and Style Manipulation (`.attr()`, `.style()`)

- **Purpose**: Change SVG or DOM element properties (e.g. position, size, color, visibility, etc.).
- `.attr()` is for HTML/SVG attributes, `.style()` for CSS properties.
- Example:

```js
d3.select("rect").attr("width", 100).style("fill", "red");
```

##### Transitions and Animation (`.transition()`)

- **Purpose**: Animate changes for a smoother and more dynamic user experience.
- Use `.transition()` to change values (e.g. position, color) over time—useful for emphasizing changes or animating data updates.
- Example:

```js
d3.select("rect")
  .transition()
  .duration(1000)
  .style("fill", "blue");
```

##### Axis Components and Scales

- **Purpose**: Map data values to pixel or color space. Use `d3.scaleLinear`, `d3.scaleBand`, `d3.scaleTime` and more for mapping domains to ranges.
- Axes visually represent scales, aiding interpretation. `d3.axisBottom(scale)`, `d3.axisLeft(scale)`, etc. render tick marks and labels.
- Example:

```js
let scale = d3.scaleLinear().domain([0,100]).range([0,400]);
let axis = d3.axisBottom(scale);
svg.append("g").call(axis);
```

##### Event Handling (`.on()`)

- **Purpose**: Allow charts and graphics to respond to user input, like clicks or mouse movements.
- The `.on()` method attaches event listeners to interactive elements, useful for tooltips, filtering, highlighting, zoom, and more.
- Example:

```js
d3.selectAll("rect.bar").on("mouseover", function(event, d) {
  // display tooltip or change style
});
```

## Data and Layout

##### SVG and Canvas

- **Purpose**: SVG is used almost exclusively for scalable, flexible graphics in D3. SVG supports basic shapes, groupings, and reactivity.
- Canvas is less common for D3, but is used for very large or complex real-time data sets that require performance over interactivity.

##### Margin Convention

- **Purpose**: To structure graphics so axes, labels, and legends do not overlap the chart area. The convention is to define `margin`, then calculate the `width` and `height` of the main chart.
- Example:

```js
const margin = {top: 20, right: 30, bottom: 50, left: 60};
const width = 500 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;
```

##### Axes and Scales

- **Purpose**: Transform raw data values (e.g. numbers, categories, dates) to the pixel positions or colors in a visualization.[^1]
- `linear` for continuous values, `band` for categories, and `time` for dates.

##### Domain and Range

- **Purpose**: `domain` specifies the input data set's minimum and maximum values; `range` specifies where those numbers should be mapped (pixels, colors).
- Example:

```js
const scale = d3.scaleLinear()
  .domain([minDataValue, maxDataValue])
  .range([0, chartWidth]);
```

##### Multiple Views

- **Purpose**: Build complex dashboards with coordinated charts (e.g. brushing, linking, detail-on-demand), allowing users to interact across plots.

##### Map and Geospatial Layout

- **Purpose**: Display geospatial data such as maps. D3 handles projections and features using `d3.geoPath()` and various projection methods, along with external GeoJSON data.

## Visual Elements

##### Rects (Bar/Column Charts)

- **Purpose**: Primary visual for bar and column charts; each `rect` is mapped to one data item.
- Example:

```js
svg.selectAll("rect")
  .data(data)
  .join("rect")
  .attr("x", d => x_scale(d.name))
  .attr("y", d => y_scale(d.value))
  .attr("width", x_scale.bandwidth())
  .attr("height", d => chartHeight - y_scale(d.value));
```

##### Circles (Scatter Plots)

- **Purpose**: Used for scatter plots and bubble charts to represent data distribution and relationships.
- Example:

```js
svg.selectAll("circle")
  .data(data)
  .join("circle")
  .attr("cx", d => x_scale(d.x))
  .attr("cy", d => y_scale(d.y))
  .attr("r", d => r_scale(d.size));
```

##### Paths (Line Charts, Area Charts, Custom Shapes)

- **Purpose**: Used in line charts, area charts, and for complex shapes by connecting points or tracing geospatial data.
- Example:

```js
let lineGenerator = d3.line()
  .x(d => x_scale(d.x))
  .y(d => y_scale(d.y));
svg.append("path")
  .attr("d", lineGenerator(data));
```

##### Color Legends and Styling

- **Purpose**: Use color and legends to encode quantities and categories, helping users quickly interpret patterns.
- D3's scale functions can map data to colors, which are then described with legends.

##### Labels, Tooltips, Titles

- **Purpose**: Enhance accessibility and understanding by adding context, detailed info, and explanations directly onto charts or on interaction.
- Tooltips often use `.on('mouseover')` and `.on('mouseout')` to display data dynamically.

---

All these methods and concepts are key for building robust, interactive, and professional data visualizations using D3.js, from simple charts to advanced dashboards and geospatial maps.

## Why Understanding JavaScript Fundamentals is Important

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWI4dm8wcmlmbjNyY2EzMzUyejUxOXBmc24yOW1pNTlwaTRrb2l4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/88IW2J3A1pkBoJwqur/giphy.gif)

**D3.js is built on JavaScript.** To unlock its full potential, you need to understand:
- DOM manipulation and events.
- Functions, objects, and arrays.
- Asynchronous data loading (e.g., with fetch or d3.csv).

A solid JavaScript foundation makes learning and troubleshooting D3.js much easier. I wrote an article that speaks to [this](https://developingdvlpr.com/blog/11-javascript-fundamentals-for-vue-developers/). 

## My Favorite Use Cases

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDJiZmZnaWVqa3Q2a3Zrb2g3d2lkY2hoM3VoZzY3NDNtczUxMHZwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DnLopzACtbu4z3YZ5l/giphy.gif)

- Creating interactive population maps that update in real time.
- Visualizing financial data with animated line and bar charts.
- Custom network graphs to show relationships between data points.
- [Covid Data Tracker](https://covidactnow.org/?s=50083753)
- [Georgia COVID-19 Dashboard](https://ga-covid19.ondemand.sas.com/) 

## My Learning Notes & Applied Learning

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHk2bHdkM3EyYnZ5N241a2Fvb2R1cjA2N3YydDQxMG0zZ2xnbzhuMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/40d1Z4ZkY9Ysg/giphy.gif)

- Start with simple bar or line charts before advancing to complex graphics.
- Never underestimate the value of commenting your code or down right making notes as comments.
- Experiment with small data sets to understand selections, bindings, and transitions to get firmer grasp of applying concepts. 
- Read the D3.js documentation frequently – it's deep but comprehensive.
- Here is what I did ~ A basic application of D3.js [figure out how to write this]

## Resources to Learn D3.js

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTFieGYza3dvejhuMTZ4YjE5M2dlNm9pYjBuNHFybmZsZ2w2cWRnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YeGCDGYMicJdGDfsas/giphy.gif)

- **Official Docs**: d3js.org
- **Tutorials**: ObservableHQ (hands-on examples)
- **Books**: "Interactive Data Visualization for the Web" by Scott Murray
- **Online Courses**: FreeCodeCamp, Udemy, Coursera, and YouTube series

These resources cover everything from the basics to advanced techniques for data-driven visualizations.

## Other Recommendations

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHA0eWRqZncza29taGU3MHJub21saW1tamlsY2RlN3R1bnNjN2pmdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bbshzgyFQDqPHXBo4c/giphy.gif)

- Practice with real and simple data to build confidence.
- Explore [open-source D3.js projects](https://github.com/wbkd/awesome-d3) for inspiration and ideas.
- Join online communities (like Stack Overflow, Bluesky communities, Discord and Reddit) for support and fresh ideas.

## Call to Action

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDk5ZjV4bnVoaHB2d2x6cXE1M2ZmaHNoZXJ5cXQxOTBybWY0dTlvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NsBAHgohHByp2/giphy.gif)

Ready to move beyond static charts? Dive into D3.js with a hands-on project. Pick a data set, start simple, and let your creativity bring the numbers to life. Let data tell its story with interactivity and impact and who knows it may pay off in ways beyond what you think. 

## References

- "What is D3.js?", d3js.org  
- "Best Resources to Learn D3.js", FreeCodeCamp
- "D3.js Cheat sheet"
- https://github.com/wbkd/awesome-d3?tab=readme-ov-file
- My javascript basics file