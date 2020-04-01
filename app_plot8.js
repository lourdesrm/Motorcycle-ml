//-------------------------------------------------------------------------------------------------------------------------//
var path = '../../../Cleaned/Master_helmet.json'
// var fatality = 'Fatal'
d3.json(path).then(function(data){
    
    var fatal = data.filter(d=>["Minor"].indexOf(d.INJ_SEV) != -1);
    var helmetUse = fatal.map(d=>d.REST_USE);
    var accidentFatal = fatal.map(d=>d.PER_TYP)
        console.log(fatal)

    var data1 = {
        type: 'bar',
        x: helmetUse,
        y: accidentFatal,
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

Plotly.newPlot("plot", traces)
});