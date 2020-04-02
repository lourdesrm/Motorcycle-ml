//-------------------------------------------------------------------------------------------------------------------------//
d3.select("#plot").append('div')
var path = 'data123'
d3.json(path).then(function(data){
    
    var drinkRecord = data.filter(d=>["Yes", "No"].indexOf(d.DRINKING) != -1);
    var accident = drinkRecord.map(d=>d.PER_TYP);
    var drink = drinkRecord.map(d=>d.DRINKING)
        console.log(drink)

        var data1 = {
          type: 'bar',
          width: 0.25,
          x: drink,
          y: accident,
          marker:{color: 'rgb(143,175,242)',
          },
          // mode: 'lines+markers',
          transforms: [{
           type: 'aggregate',
           groups: drink,
           aggregations: [
              {target: 'y', func: 'sum', enabled: true},
      ]
    }]
  };
  



  // Define layout
  var layout = {
      
    title:{text:"<b>Number of Accidents vs. Presence of Alcohol</b>",
      font:{
      color: 'black',
      size: 20,
      // family: 'Old Standard TT, serif',
      }
    },

    yaxis: {
    title: {text: "<b>Number of Accidents</b>",
    zerolinecolor:"greenblue",
    font:{
    color: 'darkblue',
    size: 16,
    }
    },

    gridcolor:"lightblue",
    tickfont: {
    // family: 'Old Standard TT, serif',
    size: 13,
    color: 'darkblue',
      }
    },

    xaxis: {
    // outlinecolor:"green",
    title:{text: "<b>Presence of Alcohol</b>",
    font:{
    color: 'darkblue',
    size: 16,
      }
    },
    tickfont: {
    // family: 'Old Standard TT, serif',
    size: 13,
    color: 'darkblue',
      }
    },
  plot_bgcolor: "white",
  paper_bgcolor:"white",

};

// End Layout


  
  var traces = [data1]
  Plotly.newPlot("plot", traces, layout);
})     