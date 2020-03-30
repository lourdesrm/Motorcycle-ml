//-------------------------------------------------------------------------------------------------------------------------//
var path = 'Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var dayWeek = data.map(d=>d.DAY_WEEK);
    var accident = data.map(d=>d.PER_TYP);
        console.log(dayWeek)

    var trace = {
        x: dayWeek,
        y: accident,
        type: "bar",
        transforms: {
            type: 'aggregate',
            groups: dayWeek,
            aggregations: 
              {target: 'y', func: 'sum', enabled: true},
            
          }
    };

    var data = [trace];
    var layout = {
        title: "Test 2"
    };
    Plotly.newPlot("plot", data, layout);
})