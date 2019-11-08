function make_gauge(set_value){
  //Enter a level between 1 and 9
  var level = set_value;
  // Trig to calc meter point
  var degrees = 90 - (level)*10;
  let radius = .7;
  var radians = degrees * Math.PI / 90;
  var x = radius * Math.cos(radians);
  var y = radius * Math.sin(radians);
  // Path: may have to change to create a better triangle
  var mainPath = 'M -.0 -0.035 L .0 0.035 L ',
      pathX = String(x),
      space = ' ',
      pathY = String(y),
      pathEnd = ' Z';
  var path = mainPath.concat(pathX,space,pathY,pathEnd);
  var data = [{ type: 'category', x: [0], y:[0], marker: {size: 28, color:'850000'}, 
              showlegend: false, name: 'speed', text: level, hoverinfo: 'text+name'},
    { values: [1,1,1,1,1,1,1,1,1,9], rotation: 90, 
      text: ['8-9', '7-8', '6-7', '5-6', '4-5',  '3-4', '2-3', '1-2', '0-1',''], 
      textinfo: 'text', textposition:'inside',      
      marker: 
      {colors:['#84B589', '#89BC8D', '#8BC086', '#B7CD8F', '#D5E599', 
                '#E5E8B0', '#E9E7C9', '#E9E7C9', '#F8F3EC','rgba(255,255,255,0)']},
      labels: ['8-9', '7-8', '6-7', '5-6', '4-5',  '3-4', '2-3', '1-2', '0-1'],
      hoverinfo: 'label', hole: .5, type: 'pie', showlegend: false
  }];

  var layout = {
    shapes:[{type: 'path', path: path, fillcolor: '850000', line: {color: '850000'}}],
    title: 'Maturity Total Score 1-5', height: 500, width: 600,
    xaxis: {type:'category',zeroline:false, showticklabels:false, showgrid: false, range: [-1, 1]},
    yaxis: {type:'category',zeroline:false, showticklabels:false, showgrid: false, range: [-1, 1]}
  };

  Plotly.newPlot('gauge', data, layout);
}

function buildMetadata(sample) {
  // @TODO: Complete the following function that builds the metadata panel
  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
  async function getData(data_index) {
    let data = await d3.json(`/metadata/${data_index}`);
    let metadata = d3.select('#sample-metadata')
      metadata.html('');
    for (i in data){
      metadata.append('p').text(i + ': ' + data[i]);
    }
    make_gauge(data['WFREQ']);
    console.log(data)
  }
  getData(sample)
  async function updatePlotly(data_index){
    let pie_data = await d3.json(`/samples/${data_index}`)
    let dataset = [{values: pie_data['sample_values'].slice(0,10), labels: pie_data['otu_ids'].slice(0,10), 
                    hovertext: pie_data['otu_labels'].slice(0,10),type: 'pie'}];
    let layout = {title: "pie chart"};
    Plotly.newPlot('pie', dataset, layout);
    let bubble_data = pie_data;
    let bubble_dataset = [{x: bubble_data['otu_ids'], y: bubble_data['sample_values'],
                          mode: 'markers', marker: {size: bubble_data['sample_values'], 
                          color: bubble_data['otu_ids']}, text: bubble_data['otu_labels']}];
    let bubble_layout = {title: 'bubble chart'};
    Plotly.newPlot('bubble', bubble_dataset, bubble_layout)
    // console.log(dataset)
  }
  updatePlotly(sample)
    // Use `.html("") to clear any existing metadata

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
}

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots

    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
