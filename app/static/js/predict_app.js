
function buildPlot() {
    /* data route */
  var url = "/data";
  d3.json(url).then(function(response1) {
    // console.log(response1.daily.Death);
    // var dailySev = response1.daily;
    var dailyDeath = response1.daily.Death;
    var dailyInjury = response1.daily.Injury;
    var dailySafe = response1.daily.Safe;
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
   
    var trace1 = {
      x: weekDays,
      y: dailyDeath,
      name: "Death",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "darkred",
        size: 12
      },
      line: {
        color: "darkred"
      }
    };
    var trace2 = {
      x: weekDays,
      y: dailySafe,
      name: "Safe",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "limegreen",
        size: 12
      },
      line: {
        color: "limegreen"
      }
    };
    var trace3 = {
      x: weekDays,
      y: dailyInjury,
      name: "Injury",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "darkorange",
        size: 12
      },
      line: {
        color: "darkorange"
      }
    };

    var response1 = [trace1, trace2, trace3];
    
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

    Plotly.newPlot("plot", response1, layout);
  });
  
  d3.json(url).then(function(response2) {
    // console.log(response1.daily.Death);
    // var dailySev = response1.daily;
    var monthDeath = response2.monthly.Death;
    var monthInjury = response2.monthly.Injury;
    var monthSafe = response2.monthly.Safe;
    var months = ["January", "February", "March", "April", "May","June", "July", "August","September","October","November","December"];
   
    var trace1 = {
      x: months,
      y: monthDeath,
      name: "Death",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "darkred",
        size: 12
      },
      line: {
        color: "darkred"
      }
    };
    var trace2 = {
      x: months,
      y: monthSafe,
      name: "Safe",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "limegreen",
        size: 12
      },
      line: {
        color: "limegreen"
      }
    };
    var trace3 = {
      x: months,
      y: monthInjury,
      name: "Injury",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "darkorange",
        size: 12
      },
      line: {
        color: "darkorange"
      }
    };

    var response2 = [trace1, trace2, trace3];
    
    var layout = {
      title: "Monthly Injury Severity Index",
      xaxis: {
        title: "Month of Year"
      },
      yaxis: {
        title:"Injury Severity Probability",
        autorange: true,
        type: "linear"
      }
    }

    Plotly.newPlot("plot1", response2, layout);
  });
}

// Submit Button handler
// function handleSubmit() {

  // Prevent the page from refreshing
  // d3.event.preventDefault();

  // Select the input value from the form
//   var weather = d3.select("#Weather").node().value;
//   console.log(weather);

  // clear the input value
  // d3.select("#Weather").node().value = "";

//   // Build the plot with the new stock
  buildPlot();
// };

// // Add event listener for submit button
// d3.select("#submit").on("click", handleSubmit);
