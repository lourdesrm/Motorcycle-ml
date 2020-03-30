// Part 1

// // in Plotly, trace refers to an object that contains 1) data to be plotted, and 2) specifications for plotting.
// var trace1 = {
//     x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//   };
  
//   // our trace is enclosed within an Array because you will later see that we can have multiple traces for a plot.
//   var data = [trace1];
  
//   // layout is optional, but contains chart title, axis information, and any other custom layout behavior
//   var layout = {
//     title: "'Bar' Chart"
//   };
  
//   // the first argument below ("plot") refers to the id of the div where the play will be displayed
//   // the second argument refers to our trace
//   // the third argument is optional. It refers to the chart's layout details.
//   Plotly.newPlot("plot", data, layout);



//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    var weather = data.WEATHER;
    var injury = data.PERSONS;
    console.log(injury)

    var trace = {
        x: injury,
        y: weather,
        type: "bar",
        transforms: {
            type: 'aggregate',
            groups: weather,
            aggregations: 
              {target: 'y', func: 'count', enabled: true},
            
          }
    };

    var data = [trace];
    var layout = {
        title: "Test 1"
    };
    Plotly.newPlot("plot", data, layout);
})