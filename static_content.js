// const Introduction = ({your variable name here}) => {...}
const Introduction = ({data}) => {
    // counting total dead&missing
       const totalCasualties = data 
        ? data.reduce((sum, d) => sum + d['Total Dead and Missing'], 0) 
        : 0;
        
    const introText = 'This visualization is based on the Missing Migrants data for 2019. The total reported \'dead and missing migrants\' across all incidents is ' + totalCasualties + 'people';

    // This returns the html elements which should be created by this component. A react fragment is required because
    // multiple elements are used.
    return (
        <>        
            <div className="introTitle">
                Description
                <br/>
            </div>
            <div className="intro">
                {introText}
            </div>
        </>
        )
};


// World Sphere and Graticule
const projection = d3.geoNaturalEarth1();
const path = d3.geoPath(projection);
const graticule =d3.geoGraticule();


const WorldGraticule = () => (
    // TODO 4.2: Memoization for sphere and graticules
    <g className="worldGraticule">
            <path className="sphere" d={path({ type: 'Sphere' })} />
            <path className="graticule" d={path(graticule())} />
    </g>
);

// --------------------------------------------------
// Completed_TODO 2.1 -> BUT ONE QUESTION LEFT
// --------------------------------------------------

// the data we work on is composed of land and interiors (use destructuring)
const Countries = ({ 
    worldAtlas: {land, interiors}, 
}) => 
(
    // Completed_TODO 2.1: delete the following line
    // TODO 4.2: Memoization for land and interiors

    // Completed_TODO 2.1: create a react fragment 
    // Completed_TODO 2.1: create a group with class name countries for styling that wraps the following JS scope
    // Completed_TODO 2.1: enter a JS scope inside the group element (everything that follows will be in curly braces)
    // Completed_TODO 2.1: map the land features to path elements that draw the land masses (styling will make sure the paths are filled with the correct color)
    // Completed_TODO 2.1: inside the fragment enter another JS scope 
    // Completed_TODO: 2.1: draw another path for the interiors 
    <>
        <g className="countries" >
            {
            land.features.map((feature, index) => (
                <path key={index} d={path(feature)}/>
            ))
            }
        </g>
        <path d={path(interiors)}/>
    </>
);
