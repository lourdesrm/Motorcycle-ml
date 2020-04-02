//-------------------------------------------------------------------------------------------------------------------------//
d3.select("#plot").append('div')
var path = 'data123'
d3.json(path).then(function(data){
    
    var interType = data.map(d=>d.TYP_INT);
    var accident = data.map(d=>d.PER_TYP);
        console.log(interType)

        var trace = {
            labels: interType,
            values: accident,
            type: "pie",
            hole: .4,
            textinfo: "label+percent",
            automargin: true,
            showlegend: true,
            transforms: {
                type: 'aggregate',
                groups: interType,
                aggregations: 
                  {target: 'y', func: 'sum', enabled: true},
                
              }
        };
    
        var data = [trace];
        var layout = {
  
            title:{text:"<b>Accidents Occurrence <br> by Intersection Type</b>",
            height: 400,
            width: 400,
            margin:{
                l: 20,
                r: 5,
                b: 1,
                t: 1,
                pad: 2
            }, 
            font:{
            color: 'black',
            size: 20,
            // family: 'Old Standard TT, serif',
            }
          },

        };
        Plotly.newPlot("plot", data, layout);
    }) 