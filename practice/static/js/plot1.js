// // Sort the data array using the greekSearchResults value
// data.sort(function(a, b) {
//   return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
// });

// // Slice the first 10 objects for plotting
// data = data.slice(0, 10);

// // Reverse the array due to Plotly's defaults
// data = data.reverse();

// // Trace1 for the Greek Data
// var trace1 = {
//   x: data.map(row => row.greekSearchResults),
//   y: data.map(row => row.greekName),
//   text: data.map(row => row.greekName),
//   name: "Greek",
//   type: "bar",
//   orientation: "h"
// };

// // data
// var data = [trace1];

// // Apply the group bar mode to the layout
// var layout = {
//   title: "Greek gods search results",
//   margin: {
//     l: 100,
//     r: 100,
//     t: 100,
//     b: 100
//   }
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", data, layout);


// var numbers = [0,2,4,6,8];

// var addFive = numbers.map(number => number+5);
//   console.log(addFive);

// var cities = [
//   {
//     "Rank": 1,
//     "City": "San Antonio ",
//     "State": "Texas",
//     "Increase_from_2016": "24208",
//     "population": "1511946"
//   },
//   {
//     "Rank": 2,
//     "City": "Phoenix ",
//     "State": "Arizona",
//     "Increase_from_2016": "24036",
//     "population": "1626078"
//   },
//   {
//     "Rank": 3,
//     "City": "Dallas",
//     "State": "Texas",
//     "Increase_from_2016": "18935",
//     "population": "1341075"
//   }
// ];

// var cityNames = cities.map(function(city){
//   return city.City;
// });
// console.log(cityNames);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// let firstThree = words.slice(0,3);
// console.log(firstThree);

// let animals = words.filter((animal) => animal.startsWith("s"))
//   console.log(animals);

// var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// var topFiveCities = sortedCities.slice(0,5);

// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
// console.log(topFiveCityNames);
// console.log(topFiveCityGrowths);

// var trace = [{
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
// }];

// var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City"},
//     yaxis: {title: "Pop Growth, 2016-2017"}
// };
// Plotly.newPlot("bar-plot", trace, layout);

// var data = [
//   {
//     x:
//     y: [20, 14, 23],
//     type: 'bar'
//   }
// ];

// Plotly.newPlot('myDiv', data);

// Create a plot based on dropdown menu selection
function plot() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  plot();