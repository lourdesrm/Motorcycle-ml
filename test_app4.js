//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var drinkRecord = data.filter(d=>["Yes", "No"].indexOf(d.DRINKING) != -1);
    var accident = drinkRecord.map(d=>d.PER_TYP);
    var drink = drinkRecord.map(d=>d.DRINKING)
        console.log(drink)

        var data1 = {
            type: 'bar',
            x: drink,
            y: accident,
            // mode: 'lines+markers',
            transforms: [{
             type: 'aggregate',
             groups: drink,
             aggregations: [
                {target: 'y', func: 'sum', enabled: true},
        ]
      }]
    };
    
    
    var traces = [data1]
    Plotly.newPlot("plot", traces);
})