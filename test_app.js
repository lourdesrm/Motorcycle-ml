//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var weather = data.map(d=>d.WEATHER);
    var accident = data.map(d=>d.PER_TYP);
        console.log(weather)

    var trace = {
        x: weather,
        y: accident,
        type: "bar",
        transforms: {
            type: 'aggregate',
            groups: weather,
            aggregations: 
              {target: 'y', func: 'sum', enabled: true},
            
          }
    };

    var data = [trace];
    var layout = {
        title: "Test 1"
    };
    Plotly.newPlot("plot", data, layout);
})