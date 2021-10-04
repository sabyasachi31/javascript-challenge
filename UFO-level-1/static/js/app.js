// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//Function to list all sightings
function runAll(){
    //Deleting the filtered entries first
    var tb = d3.select("tbody");
    tb.html("");
    //Appending all the sightings in the table
    tableData.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}

//Function call to list all sightings
runAll();
//Event Triggering
var form = d3.select("#form");
var button = d3.select("#filter-btn");
var button2= d3.select("#all-btn");

form.on("submit",runEnter);
button.on("click", runEnter);
button2.on("click", runAll);

//Function to filter results depending on datetime
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    var tb = d3.select("tbody");
    tb.html("");

    filteredData.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
  }