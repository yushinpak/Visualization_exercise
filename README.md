# Things to do(check list)
1.2 Creating component 'introduction'
(index.html) insert a title
(static_content & app.js) make 'introduction' component and place in main react app(app.js)

1.3 Data loading status
(app.js) handeling loading state
(data_loading.js) data loading, processing and return

1.4 Dynamic Introduction Text Using Loaded Data
(app.js) pass the loaded data as a prop to the 'introducion' component
(static_content.js) receive data and use it. using variable, show in dynamic text

1.5 Using D3, make basic stuff for map
(app.js) remove width and height from the world graticule component
(static_content.js) using D3 library, modify WorldGraticule component

2.1 Rendering Country Boundaries(countries component and path)
(static_content.js) creath 'path' element in 'countries'
(app.js) add the countries element and pass it the world Atlas

2.2 
(app.js) add the Bubbles element and pass it the data
(bubbles.js) data -> make circle

3.1
(app.js) histogram element(width, height)
(bar_chart.js) bar chart rendering

3.2
(bar_chart) advancing bar_chart

4.1
(app.js) add state(brushExtent), pass filtered data to bubbles
(bar_chart) adjust histogram thing

4.2
(bar_chart) memoization for scale, the binned data
(bubbles) memoization for siza scale
(static_content) memoization for sphere and graticules, land and interiors

# visualization_exercise*# What we should know before start *
1.⁠ ⁠study basic concept of React
2.⁠ ⁠grasp basic role of the files 

# What we have to talk about 04.11.25
1. how should we write the code
2. test pull and push once
3. download plugin live server&git pull and push plugin 

# File role - yushin
    • app.js – rendering
    • bar_chart.js – bar chart rendering
    • bubbles.js – bubble map making
    • data_loading.js – data processing
    • static_content.js – basic element of map 
    • index.html – main html
    • style.css – make style 
README.md – word about project