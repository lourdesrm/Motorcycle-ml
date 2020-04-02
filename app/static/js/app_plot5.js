//-------------------------------------------------------------------------------------------------------------------------//
d3.select("#plot").append('div')
var path = 'data123'
d3.json(path).then(function(data){
    
    var injuryType = data.map(d=>d.INJ_SEV);
    var accident = data.map(d=>d.PER_TYP);
        console.log(injuryType)

        var trace = {
            labels: injuryType,
            values: accident,
            type: "pie",
            hole: .4,
            textinfo: "label+percent",
            automargin: true,
            showlegend: true,
            transforms: {
                type: 'aggregate',
                groups: injuryType,
                aggregations: 
                  {target: 'y', func: 'sum', enabled: true},
                
              }
        };
    
        var data = [trace];
        var layout = {
    
            title:{text:"<b>Type of Injury Occurrence</b>",
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
        //   size: 40,
    

        };
        Plotly.newPlot("plot", data, layout);
    })  