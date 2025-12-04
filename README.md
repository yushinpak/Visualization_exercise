# the first week
1.⁠ ⁠Data Loading and Preprocessing (TODO 1.3)
	•	The coordinates (Location Coordinates) were converted into a number array (d.coords) and reversed to match the [Longitude, Latitude] order.
	•	The casualty count (Total Dead and Missing) was explicitly converted to a Number type using the unary plus operator (+).
	•	The loading check if (!worldAtlas || !data) ensures the visualization does not render until both datasets are fully loaded.

⸻

2.⁠ ⁠Introduction Component (Introduction) Completion (TODO 1.2 & 1.4)
	•	The data array was passed as a prop (data={data}) to enable the component to calculate dynamic data metrics.
	•	Total casualties (totalCasualties) were calculated using the reduce method on the data array.
	•	The final output uses a dynamic string (e.g., '... ' + totalCasualties + ' people') to display the calculated metric.
	•	The component structure follows the requirement from TODO 1.2, using:
	•	<div className="introTitle">Description<br/></div>
	•	<div className="intro">{introText}</div>

⸻

3.⁠ ⁠World Map Background (WorldGraticule) Implementation Complete (TODO 1.5)
	•	D3 tools (projection, path, graticule) were defined globally to handle geographic data transformations.
	•	The path generator was linked to the projection (d3.geoPath(projection)) to convert GeoJSON into SVG paths.
	•	The Sphere was drawn using:
<path className="sphere" d={path({ type: 'Sphere' })} />
	•	The Graticules (grid lines) were drawn using:
<path className="graticule" d={path(graticule())} />
	•	The placeholder <rect> was removed, and the <g> element received the styling class worldGraticule.

# the second week
We will draw the country boundaries and the bubbles representing the number of dead and missing migrants

Task 1 - Countries
0) Add countries component and pass worldAtlas(app.js)
1) The outline of the land masses which will be filled in according to the styling information at the top of the file(static_content.js)
2) The interiors which will be drawn to indicate borders between two countries(static_content.js)

Task 2 - Bubbles
A scatter point with dots scaled according to the number of missing and dead migrants.
-> The location will be given by the coordinates of the incident

0) Add bubbles component(index.html)
0) Define projection first and use bubbles component(pass projection and data) (app.js)

The bubble will be implemented in the bubbles component. (bubbles.js)
1) size scale: tell us how to map the number from the data set to the radius of the circle
-> the area of the circle should be propotional to the number from the dataset
2) pass the coordinates through the projection before adding them as the coordinates of the circle


+) What is projection?
A projection is a mathematical transformation function used by D3.js to convert three-dimensional, spherical geographic coordinates (latitude and longitude) into two-dimensional pixel coordinates that can be drawn on a flat surface, like an SVG canvas on a computer screen.

- Input: Geographic Coordinates, typically [Longitude, Latitude].
- Output: Screen Coordinates, [x, y] pixels.

This transformation is essential because drawing a round Earth on a flat screen inherently introduces distortion (in area, distance, or shape). D3 provides various projection methods (Mercator, Orthographic, etc.) to choose how this distortion is managed.

You can find further information here: https://www.geeksforgeeks.org/javascript/d3-js-geomercator-function/

+) Difference of d3.scaleLinear and d3.scaleSqrt
The primary difference between d3.scaleLinear and d3.scaleSqrt lies in the mathematical relationship between the input data value (domain) and the output size (range).

- scalrLinear: Proportional (y∝x). A straight-line relationship where the output is directly proportional to the input.
- scaleSqrt: Square Root Proportional (y∝ x ). The output is proportional to the square root of the input.
=> why scaleSqrt is the better option: 
If used for a circle's radius (r), the area (A∝r2 ) grows disproportionately to the data value. If the data value doubles, the radius doubles, but the area quadruples, visually exaggerating the difference. Using d3.scaleLinear would lead to a perceptually misleading chart where large bubbles appear far more significant than their data values warrant.

+) 