//-------------------------------------------------------------------------------------------------------------------------//
d3.select("#plot").append('div')
var path = 'data123'
d3.json(path).then(function(data){
    
    var dayWeek = data.map(d=>d.DAY_WEEK);
    var accident = data.map(d=>d.PER_TYP);
        console.log(dayWeek)

        var data1 = {
          type: 'bar',
          x: dayWeek,
          y: accident,
          marker:{color: 'rgb(143,175,242)',
          },
          // mode: 'lines+markers',
          transforms: [{
           type: 'aggregate',
           groups: dayWeek,
           aggregations: [
              {target: 'y', func: 'sum', enabled: true},
      ]
    }]
  };

  // Define layout
  var layout = {
    title:{text:"<b>Number of Accidents vs. Day of the Week</b>",
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
  color: 'darkblue',
  size: 16,
  }
  },

  gridcolor:"lightblue",
  tickfont: {
  // family: 'Old Standard TT, serif',
  size: 13,
  color: 'green',
    }
  },

  xaxis: {
  // outlinecolor:"green",
  title:{text: "",
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