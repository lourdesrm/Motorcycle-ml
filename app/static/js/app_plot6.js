//-------------------------------------------------------------------------------------------------------------------------//
var path = '../../../Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var interType = data.map(d=>d.TYP_INT);
    var accident = data.map(d=>d.PER_TYP);
        console.log(interType)

        var trace = {
            labels: interType,
            values: accident,
            type: "pie",
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
            font:{
            color: 'black',
            size: 28,
            // family: 'Old Standard TT, serif',
            }
          },
          size: 40,
    
            height: 600,
            width: 600
        };
        Plotly.newPlot("plot", data, layout);
    }) 