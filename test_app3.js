//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_helmet.json'
d3.json(path).then(function(data){
    
    var helmetUse = data.map(d=>d.REST_USE);
    var accident = data.map(d=>d.PER_TYP);
        console.log(helmetUse)

    var trace = {
        x: helmetUse,
        y: accident,
        type: "bar",
        transforms: {
            type: 'aggregate',
            groups: helmetUse,
            aggregations: 
              {target: 'y', func: 'sum', enabled: true},
            
          }
    };

    var data = [trace];
    var layout = {
        title: "Test 3"
    };
    Plotly.newPlot("plot", data, layout);
})