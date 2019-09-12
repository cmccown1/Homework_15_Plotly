function buildGauge(wfreq) {

    // needle math
    var deg = 190 - parseFloat(wfreq) * 20;
    var r = 0.6; // the length of the needle
    var x = r * Math.cos(deg*Math.PI/180);
    var y = r * Math.sin(deg*Math.PI/180);
    var path = "M -.0 -0.02 L .0 0.02 L " + String(x) + " " + String(y) + " Z" // the triangle of the needle
    var data = [
      // the center of the needle, also covers up the end of the triangle
      {
        type: "scatter",
        x: [0],
        y: [0],
        marker: { size: 20, color: "black" },
        showlegend: false
      },
      // the half pie / donut
      {
        values: [20,20,20,20,20,20,20,20,20,180],
        rotation: 90,
        text: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ""],
        textinfo: "text",
        textposition: "inside",
        marker: {
          colors: [
            "rgba( 15,0,0, 0.50)", //shades of red are the easiest to figure out
            "rgba( 45,0,0, 0.45)",
            "rgba( 75,0,0, 0.40)",
            "rgba(105,0,0, 0.35)",
            "rgba(135,0,0, 0.30)",
            "rgba(165,0,0, 0.25)",
            "rgba(195,0,0, 0.20)",
            "rgba(225,0,0, 0.15)",
            "rgba(255,0,0, 0.10)",
            "rgba(255,0,0, 0.00)" // alpha 0 = "invisible" for the bottom half
          ]
        },
        
        labels: ["  9", "  8", "  7", "  6", "  5", "  4", "  3", "  2", "  1", ""],
        hoverinfo: "label",
        hole: 0.5,
        type: "pie",
        showlegend: false
      }
    ];
    // the needle  
    var layout = {
      shapes: [
        {
          type: "path",
          path: path,
          fillcolor: "black",
          line: {color: "black"}
        }
      ],
      title: "Washing Frequency per Week",
      height: 500,
      width: 500,
      xaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
      },
      yaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
      }
    };

    Plotly.newPlot("gauge", data, layout);
  }