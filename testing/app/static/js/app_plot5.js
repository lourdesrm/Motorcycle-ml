//-------------------------------------------------------------------------------------------------------------------------//
var path = '../../../Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var injuryType = data.map(d=>d.INJ_SEV);
    var accident = data.map(d=>d.PER_TYP);
        console.log(injuryType)

    var trace = {
        labels: injuryType,
        values: accident,
        type: "pie",
        transforms: {
            type: 'aggregate',
            groups: injuryType,
            aggregations: 
              {target: 'y', func: 'sum', enabled: true},
            
          }
    };

    var data = [trace];
    var layout = {
        title: "Type of Injury",
        height: 600,
        width: 600
    };
    Plotly.newPlot("plot", data, layout);
})