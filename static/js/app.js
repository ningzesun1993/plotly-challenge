const initial_data = {"otu_ids":[1167,2859,482,2264,41,1189,352,189,2318,1977,3450,874,1959,2191,
  1950,2077,2275,944,2184,2244,2024,2419,2811,165,2782,2247,2011,2396,830,2964,1795,2722,307,2178,
  2908,1193,2167,1208,2039,1274,2739,2737,1314,1962,2186,2335,2936,907,833,2483,2475,2491,2291,159,
  2571,2350,2342,2546,725,170,1505,513,259,1169,258,1232,1497,1498,1503,412,2235,1960,1968,121,2065,
  340,2110,2188,357,342],
  "otu_labels":["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus","Bacteria",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI","Bacteria",
  "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas",
  "Bacteria","Bacteria","Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales",
  "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter",
  "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum","Bacteria;Firmicutes;Clostridia",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI","Bacteria;Firmicutes;Clostridia",
  "Bacteria;Firmicutes;Clostridia;Clostridiales","Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",
  "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI","Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",
  "Bacteria;Firmicutes;Clostridia;Clostridiales","Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus","Bacteria",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI","Bacteria;Firmicutes;Clostridia;Clostridiales",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales","Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae",
  "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia","Bacteria",
  "Bacteria;Firmicutes;Clostridia;Clostridiales","Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus",
  "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas","Bacteria;Firmicutes;Clostridia;Clostridiales",
  "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas","Bacteria;Firmicutes;Clostridia;Clostridiales",
  "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola",
  "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella","Bacteria;Firmicutes;Clostridia",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae",
  "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae",
  "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI","Bacteria",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus","Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
  "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales","Bacteria","Bacteria;Firmicutes","Bacteria","Bacteria",
  "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas","Bacteria",
  "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas","Bacteria;Firmicutes","Bacteria;Firmicutes",
  "Bacteria;Firmicutes","Bacteria","Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI","Bacteria;Firmicutes;Clostridia",
  "Bacteria;Firmicutes;Clostridia","Bacteria","Bacteria;Firmicutes;Clostridia;Clostridiales","Bacteria",
  "Bacteria;Firmicutes;Clostridia;Clostridiales","Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI","Bacteria","Bacteria"],
  "sample_values":[163,126,113,78,71,51,50,47,40,40,37,36,30,28,25,23,22,19,19,14,13,13,13,12,12,11,
    11,11,10,10,10,8,7,7,7,6,5,5,5,4,4,4,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]}

let pie_data = initial_data;
let dataset = [{values: pie_data['sample_values'].slice(0,10), labels: pie_data['otu_ids'].slice(0,10), 
                hovertext: pie_data['otu_labels'].slice(0,10),type: 'pie'}];
let layout = {title: "pie chart"};
Plotly.newPlot('pie', dataset, layout);

let bubble_data = initial_data;
let bubble_dataset = [{x: bubble_data['otu_ids'], y: bubble_data['sample_values'],
                       mode: 'markers', marker: {size: bubble_data['sample_values'], 
                      color: bubble_data['otu_ids']}, text: bubble_data['otu_labels']}];
let bubble_layout = {title: 'bubble size'};
Plotly.newPlot('bubble', bubble_dataset, bubble_layout)



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
  }
  getData(sample)
  async function updatePlotly(data_index){
    let pie_data = await d3.json(`/samples/${data_index}`)
    const dataset = {y: pie_data['sample_values'], x: pie_data['otu_ids'], type: 'pie'};
    const layout = {title: "'Pie' Chart"};
    Plotly.newPlot('pie', dataset, layout);
    console.log(dataset)
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


function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
