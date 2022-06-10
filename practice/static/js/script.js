// -------------------------------------------
// Load in Belly Button JSON file (for security reasons this requires a local server)
// create local server with: python -m http.server
// -------------------------------------------



// Retrieve first object in the array by locating the first object [0] and then using Object.entries to extract key,value pairs.
//---------------------------------------------------------
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//         {console.log(key + ": " + value);});
// });
	

// Retrieve the wfreq in descending order
//----------------------------------------
// d3.json("samples.json").then(function(data){
//     // sort through the JSON to find only the wfreq data, sort in descending order
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//     // filter again to drop null values
//     filteredWfreq = wfreq.filter(wash => wash != null);
//     // print filtered values
//     console.log(filteredWfreq);
// });

// create an event listener for dropdown menu
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectedOption);
};