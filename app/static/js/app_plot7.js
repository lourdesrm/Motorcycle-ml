//-------------------------------------------------------------------------------------------------------------------------//
d3.select("#plot").append('div')
var path = 'data123'
var fatality = 'Fatal'
d3.json(path).then(function(data){
    
    var yearAll = data.map(d=>d.YEAR);
    var accident = data.map(d=>d.PER_TYP);
    var fatal = data.filter(d=>d.INJ_SEV==fatality);
    var fatalFiltered = fatal.map(d=>d.PER_TYP);
    var yearFatal = fatal.map(d=>d.YEAR)
        console.log(yearFatal)

        var yearAll = data.map(d=>d.YEAR);
        var accident = data.map(d=>d.PER_TYP);
        var fatal = data.filter(d=>d.INJ_SEV==fatality);
        var fatalFiltered = fatal.map(d=>d.PER_TYP);
        var yearFatal = fatal.map(d=>d.YEAR)
            console.log(yearFatal)
    
        var data1 = {
            type: 'scatter',
            name: "Total Accidents",
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
        name: "Fatalities",
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
    
      title:{text:"<b>Total Accidents and Fatalities</b>",
      font:{
      color: 'black',
      size: 20,
      // family: 'Old Standard TT, serif',
      }
      },
    size: 40,
    
    legend: {
      font: {
        family: 'sans-serif',
        size: 18,
      },
    },
    
        xaxis: { 
        title: {text:'<b>Year</b>',
        font:{ color: 'darkblue', size: 16 } },
        dtick: 2,
        tickfont: {
          color: 'darkgreen', size: 16
            }
              },
        
        yaxis: { 
        title: {text:'<b>Number of Accidents / Fatalities</b>',
        font:{ color: 'darkblue', size: 16 } },
        autorange: true, 
        tickfont: {
        color: 'darkgreen', size:16
            },
        gridcolor:"lightgreen"
        },
      }
    // End Layout
    
    var traces = [data1, data2]
    
    
    Plotly.newPlot("plot", traces, layout);
    });