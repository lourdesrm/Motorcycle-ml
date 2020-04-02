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
          width: 0.25,
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
    // autosize: True,
    // width: 600,
    // height: 400,
    title:{text:"<b>Number of Accidents vs. Weather</b>",
      font:{
      color: 'black',
      size: 20,
      // family: 'Old Standard TT, serif',
      }
    },
    yaxis: {
    title: {text: "<b>Number of Accidents</b>",
    zerolinecolor:"green",
    font:{
    color: 'green',
    size: 16,
      }
    },
    gridcolor:"lightgreen",
    tickfont: {
      // family: 'Old Standard TT, serif',
      size: 13,
      color: 'green',
      }
    },
  
    xaxis: {
    // outlinecolor:"green",
    title:{text: "<b>Weather Conditions</b>",
    font:{
    color: 'green',
    size: 16,
      }
    },
    tickfont: {
      // family: 'Old Standard TT, serif',
      size: 13,
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



