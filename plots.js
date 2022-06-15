// Dynamically generate the dropdown menu items
function plot() {
  var menu = d3.select("#selDataset");

  d3.json("static/samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((name) => {
      menu
        .append("option")
        .text(name)
        .property("value", name);
    });
})}

plot();

function optionChanged(id) {
  buildMetadata(id);
  buildCharts(id);
}

// Build the demographics panel
function buildMetadata(sample) {
  d3.json("static/samples.json").then((data) => {
    var metadata = data.metadata;
    var array = metadata.filter(obj => obj.id == sample);
    var result = array[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    Object.entries(result).forEach(([key,value]) => {
      PANEL.append("h6").text(key.toUpperCase() + ": " + value);
    }) 
  });
}