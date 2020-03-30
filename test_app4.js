//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var drink = data.map(d=>d.DRINKING);
    var accident = data.map(d=>d.PER_TYP);
        console.log(drink)

    var trace = {
        x: drink,
        y: accident,
        type: "bar",
        transforms: {
            type: 'aggregate',
            groups: drink,
            aggregations: 
              {target: 'y', func: 'sum', enabled: true},
            
          }
    };

    var data = [trace];
    var layout = {
        title: "Test 4"
    };
    Plotly.newPlot("plot", data, layout);
})