
function buildPlot() {
    /* data route */
  var url = "/data";
  d3.json(url).then(function(response) {
    // console.log(response.daily.Death);
    // var dailySev = response.daily;
    var dailyDeath = response.daily.Death;
    var dailyInjury = response.daily.Injury;
    var dailySafe = response.daily.Safe;
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
   
    var trace1 = {
      x: weekDays,
      y: dailyDeath,
      name: "Death",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "red",
        size: 12
      },
      line: {
        color: "red"
      }
    };
    var trace2 = {
      x: weekDays,
      y: dailySafe,
      name: "Safe",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "green",
        size: 12
      },
      line: {
        color: "green"
      }
    };
    var trace3 = {
      x: weekDays,
      y: dailyInjury,
      name: "Injury",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "orange",
        size: 12
      },
      line: {
        color: "orange"
      }
    };

    var response = [trace1, trace2, trace3];
    
    var layout = {
      title: "Weekday Injury Severity Index",
      xaxis: {
        title: "Weekdays"
      },
      yaxis: {
        title:"Injury Severity Probability",
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", response, layout);
  });
}

buildPlot();
