//-------------------------------------------------------------------------------------------------------------------------//
// var selPlot = document.getElementById('plot');
d3.select("#plot").append('div')
var path = '../../../Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var weather = data.map(d=>d.WEATHER);
    var accident = data.map(d=>d.PER_TYP);
        console.log(weather)

    var data1 = {
            type: 'bar',
            x: weather,
            y: accident,
            marker:{color: "lightgreen",
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
    
      yaxis: {
      title: {text: "Number of Accidents",
      zerolinecolor:"green",
      font:{
      color: 'green',
      size: 25,
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
      title:{text: "Weather Conditions",
      font:{
      color: 'green',
      size: 25,
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



