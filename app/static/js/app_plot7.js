//-------------------------------------------------------------------------------------------------------------------------//
var path = '../../../Cleaned/Master_filtered.json'
var fatality = 'Fatal'
d3.json(path).then(function(data){
    
    var yearAll = data.map(d=>d.YEAR);
    var accident = data.map(d=>d.PER_TYP);
    var fatal = data.filter(d=>d.INJ_SEV==fatality);
    var fatalFiltered = fatal.map(d=>d.PER_TYP);
    var yearFatal = fatal.map(d=>d.YEAR)
        console.log(yearFatal)

    var data1 = {
        type: 'scatter',
        x: yearAll,
        y: accident,
        mode: 'lines+markers',
        transforms: [{
         type: 'aggregate',
         groups: yearAll,
         aggregations: [
            {target: 'y', func: 'sum', enabled: true},
    ]
  }]
};

var data2 = {
    type: 'scatter',
    x: yearFatal,
    y: fatalFiltered,
    mode: 'lines+markers',
    transforms: [{
     type: 'aggregate',
     groups: yearFatal,
     aggregations: [
        {target: 'y', func: 'sum', enabled: true},
    ]
  }]
};


// Layout

var layout = {
  //title: "Climate Chart",
    xaxis: { 
    title: {text:'Year',
    font:{ color: 'green', size: 20 } },
    tickfont: {
      color: 'lightgreen',
        }
          },
    yaxis: { 
    title: {text:'Number of Accidents',
    font:{ color: 'green', size: 20 } },
    autorange: true, 
    tickfont: {
    color: 'lightgreen',
        },
    gridcolor:"lightgreen"
    },
  }
// End Layout

var traces = [data1, data2]

Plotly.newPlot("plot", traces, layout);
});