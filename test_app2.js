//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var dayWeek = data.map(d=>d.DAY_WEEK);
    var accident = data.map(d=>d.PER_TYP);
        console.log(dayWeek)

        var data1 = {
            type: 'bar',
            x: dayWeek,
            y: accident,
            // mode: 'lines+markers',
            transforms: [{
             type: 'aggregate',
             groups: dayWeek,
             aggregations: [
                {target: 'y', func: 'sum', enabled: true},
        ]
      }]
    };

    var traces = [data1]
    Plotly.newPlot("plot", traces);
})