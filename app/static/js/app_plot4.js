//-------------------------------------------------------------------------------------------------------------------------//
var path = '../../../Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var drinkRecord = data.filter(d=>["Yes", "No"].indexOf(d.DRINKING) != -1);
    var accident = drinkRecord.map(d=>d.PER_TYP);
    var drink = drinkRecord.map(d=>d.DRINKING)
        console.log(drink)

        var data1 = {
          type: 'bar',
          width: 0.2,
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
      size: 28,
      // family: 'Old Standard TT, serif',
      }
    },
    size: 40,

    yaxis: {
    title: {text: "<b>Number of Accidents</b>",
    zerolinecolor:"greenblue",
    font:{
    color: 'darkblue',
    size: 26,
    }
    },

    gridcolor:"lightblue",
    tickfont: {
    // family: 'Old Standard TT, serif',
    size: 16,
    color: 'darkblue',
      }
    },

    xaxis: {
    // outlinecolor:"green",
    title:{text: "<b>Presence of Alcohol</b>",
    font:{
    color: 'darkblue',
    size: 26,
      }
    },
    tickfont: {
    // family: 'Old Standard TT, serif',
    size: 18,
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