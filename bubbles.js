// --------------------------------------------------
// Completed_TODO 2.2
// --------------------------------------------------

// Completed_TODO 2.2: define a function that accesses the number of dead and missing migrants from the data set called sizeValue
const sizeValue = d => d["Total Dead and Missing"];
// defines the maximum radius of a bubble
const maxRadius = 15;

const Bubbles = ({ 
    data, projection
}) => {
    
    // TODO 4.2: Memoization for size scale
    // Completed_TODO 2.2: the area covered by a bubble should be scaled proportional to the sizeValue. define a sizeScale using d3.scaleSqrt or d3.scaleLinear (think about which one is a better fit)

    const maxDataValue = d3.max(data, sizeValue); // this is the line for set domain. we need to fine the maximum value. 

        // Completed_TODO 2.2: set the domain to the scale using the .domain function. the domain should start at zero and end at the maximum of the data (use sizeValue)
        // Completed_TODO 2.2: set the range to the scale using the .range function. the range should start at zero and end at maxRadius
    const sizeScale = d3.scaleSqrt().domain([0, maxDataValue]).range([0, maxRadius])

    // Completed_TODO 2.2: return the bubbles svg definition
    return (
        // Completed_TODO 2.2 wrap everything that follows in a group element with className bubbleMarks
            // Completed_TODO 2.2: enter a JS scope
                // Completed_TODO 2.2: map the data to get each row and index
                    // Completed)TODO 2.2: use the projection to get the x and y coordinates from the coords
                    // Completed_TODO 2.2: return a circle with the key being the index, x and y the extracted coordinates and the radius passed through the sizeScale
        // Completed_TODO 2.2: delete the following line(div)
        <g className="bubbleMakers">
            {data.map((d, index) => {
                const [x, y] = projection(d.coords); // Role: Converts geographic coordinates to screen coordinates.
                return (
                    <circle
                        className="bubble"
                        key={index}
                        cx={x}
                        cy={y}
                        r={sizeScale(sizeValue(d))} // calculated radius size
                    />
                );
            })}
        </g>
    );
};