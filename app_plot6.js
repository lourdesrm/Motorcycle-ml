//-------------------------------------------------------------------------------------------------------------------------//
var path = '../../../Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var interType = data.map(d=>d.TYP_INT);
    var accident = data.map(d=>d.PER_TYP);
        console.log(interType)

    var trace = {
        labels: interType,
        values: accident,
        type: "pie",
        transforms: {
            type: 'aggregate',
            groups: interType,
            aggregations: 
              {target: 'y', func: 'sum', enabled: true},
            
          }
    };

    var data = [trace];
    var layout = {
        title: "Test 6",
        height: 400,
        width: 500
    };
    Plotly.newPlot("plot", data, layout);
})