//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_helmet.json'
d3.json(path).then(function(data){
    
    var helmetUse = data.map(d=>d.REST_USE);
    var accident = data.map(d=>d.PER_TYP);
        console.log(helmetUse)

    var data1 = {
            type: 'bar',
            x: helmetUse,
            y: accident,
            // mode: 'lines+markers',
            transforms: [{
             type: 'aggregate',
             groups: helmetUse,
             aggregations: [
                {target: 'y', func: 'sum', enabled: true},
        ]
      }]
    };

    var traces = [data1]
    Plotly.newPlot("plot", traces);
});