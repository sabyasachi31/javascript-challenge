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

form.on("change",runEnter);
button.on("click", runEnter);
button2.on("click", runAll);

//Function for Level 1 (with only datetime)

/*function runEnter() {

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
    
  }*/


  //Function for Level 2 (with all filters)
  function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var tb = d3.select("tbody");
    tb.html("");
  
    // Select the input element and get the raw HTML node
    var inputElements=[];
    var filter_ids=['#datetime','#city','#state','#country','#shape'];
    var filters=['datetime','city','state','country','shape'];
    var n= filter_ids.length;
    
    var filteredData=tableData;

    for (i=0;i<n;i++)
    {
        inputElements[i]=d3.select(filter_ids[i]);
        var inputValue = inputElements[i].property("value");
        //console.log(inputValue);
        //If the input field is empty, skipping it
         if (inputValue==="")
         {
             continue;
         }
         //Filtering filtered data for each search parameter, so we get the intersection 
         else
         {
            filteredData=filteredData.filter(ufo => ufo[filters[i]]=== inputValue);
            //Storing most updated filtered results in combinedData
            var combinedData=[];
            filteredData.forEach((UFO) => {
                combinedData.push(UFO);
            });

         }
       
    }

    //Function to remove duplicates (To be used when filtering out union of results)
    /*function removeDuplicates(data){
        return data.filter((value, index) => data.indexOf(value) === index);
    }*/
    //combinedData = removeDuplicates(combinedData);

    //Adding most updated filtered results to table
    combinedData.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
  }