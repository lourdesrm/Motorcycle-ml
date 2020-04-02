//-------------------------------------------------------------------------------------------------------------------------//
// var selPlot = document.getElementById('plot');
d3.select("#plot").append('div')
var path = 'data123'
d3.json(path).then(function(data){
    
    var weather = data.map(d=>d.WEATHER);
    var accident = data.map(d=>d.PER_TYP);
        console.log(weather)

    
        var data1 = {
          type: 'bar',
          width: 0.2,
          x: weather,
          y: accident,
          marker:{color: 'rgb(127,204,182)',
          },
          // mode: 'lines+markers',
          transforms: [{
           type: 'aggregate',
           groups: weather,
           aggregations: [
              {target: 'y', func: 'sum', enabled: true},
      ]
    }]
  }

  // Define layout
  var layout = {
    title:{text:"<b>Number of Accidents vs. Weather</b>",
      font:{
      color: 'black',
      size: 28,
      // family: 'Old Standard TT, serif',
      }
    },
    size: 40,
    yaxis: {
    title: {text: "<b>Number of Accidents</b>",
    zerolinecolor:"green",
    font:{
    color: 'green',
    size: 26,
      }
    },
    gridcolor:"lightgreen",
    tickfont: {
      // family: 'Old Standard TT, serif',
      size: 16,
      color: 'green',
      }
    },
  
    xaxis: {
    // outlinecolor:"green",
    title:{text: "<b>Weather Conditions</b>",
    font:{
    color: 'green',
    size: 26,
      }
    },
    tickfont: {
      // family: 'Old Standard TT, serif',
      size: 18,
      color: 'darkgreen',
    }
},
plot_bgcolor: "white",
paper_bgcolor:"white",

  };

// End Layout





  var traces = [data1]
  Plotly.newPlot("plot", traces, layout);
})



