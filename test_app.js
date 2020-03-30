//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var weather = data.map(d=>d.WEATHER);
    var accident = data.map(d=>d.PER_TYP);
        console.log(weather)

    var data1 = {
            type: 'bar',
            x: weather,
            y: accident,
            // mode: 'lines+markers',
            transforms: [{
             type: 'aggregate',
             groups: weather,
             aggregations: [
                {target: 'y', func: 'sum', enabled: true},
        ]
      }]
    };

    var traces = [data1]
    Plotly.newPlot("plot", traces);
})