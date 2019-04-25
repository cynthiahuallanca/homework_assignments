// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
//console.log(data);

// Load data into table --------------
data.forEach(function(UFO) {
   //console.log(UFO);
  var row = tbody.append("tr");
  
  Object.entries(UFO).forEach(function([key, value]) {
     //console.log(key, value);
     
     // Append a cell to the row for each value
     var cell = row.append("td");
     cell.text(value);
  });
});
// End--------------------------------



// Filter by DateTime ----------------

// Define button 
var button = d3.select("#filter-btn-datetime");

// Function to make button filter
 button.on("click", function() {
  d3.event.preventDefault();
  console.log("Hi, a button was clicked!");
  var inputElement = d3.select("#datetime");//define input element
  var inputValue = inputElement.property("value"); // Get the value property of the input element 
  console.log(inputValue); // see in the console the input value on the filter  
  console.log(tableData); // va a mostrar todos los datos, no se para que sirve aun 

  var filteredData = tableData.filter(record => record.datetime === inputValue);
  console.log(filteredData); // this is working. it's showing the filtered data in the log! :) yuhu

  // clear table to show the filtered data after
  d3.select('tbody').selectAll('tr').remove();
  
  //TODO: improve by storing the function in a variable
  // to show the filtered data
  filteredData.forEach(function(UFO) {
    //console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //TODO: cuando filtro nada debe haber un mensaje
});
// End--------------------------------



// Filter by City ----------------
// TODO: lowercase input value 
var button = d3.select("#filter-btn-city");

// Function to make button filter
 button.on("click", function() {
  d3.event.preventDefault();
  console.log("Hi, button to filter city was clicked!");
  var inputElement = d3.select("#city");//define input element
  var inputValue = inputElement.property("value"); // Get the value property of the input element 
  console.log(inputValue); // see in the console the input value on the filter  
  console.log(tableData); // va a mostrar todos los datos, no se para que sirve aun 

  var filteredData = tableData.filter(record => record.city === inputValue);
  console.log(filteredData); // this is working. it's showing the filtered data in the log! :) yuhu

  // clear table to show the filtered data after
  d3.select('tbody').selectAll('tr').remove();
  
  //TODO: improve by storing the function in a variable
  // to show the filtered data
  filteredData.forEach(function(UFO) {
    //console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
// End--------------------------------

// Filter by State ----------------
// TODO: lowercase input value 
var button = d3.select("#filter-btn-state");

// Function to make button filter
 button.on("click", function() {
  d3.event.preventDefault();
  console.log("Hi, button to filter state was clicked!");
  var inputElement = d3.select("#state");//define input element
  var inputValue = inputElement.property("value"); // Get the value property of the input element 
  console.log(inputValue); // see in the console the input value on the filter  
  console.log(tableData); // va a mostrar todos los datos, no se para que sirve aun 

  var filteredData = tableData.filter(record => record.state === inputValue);
  console.log(filteredData); // this is working. it's showing the filtered data in the log! :) yuhu

  // clear table to show the filtered data after
  d3.select('tbody').selectAll('tr').remove();
  
  //TODO: improve by storing the function in a variable
  // to show the filtered data
  filteredData.forEach(function(UFO) {
    //console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
// End--------------------------------

// Filter by Shape ----------------
// TODO: lowercase input value 
var button = d3.select("#filter-btn-shape");

// Function to make button filter
 button.on("click", function() {
  d3.event.preventDefault();
  console.log("Hi, button to filter shape was clicked!");
  var inputElement = d3.select("#shape");//define input element
  var inputValue = inputElement.property("value"); // Get the value property of the input element 
  console.log(inputValue); // see in the console the input value on the filter  
  console.log(tableData); // va a mostrar todos los datos, no se para que sirve aun 

  var filteredData = tableData.filter(record => record.shape === inputValue);
  console.log(filteredData); // this is working. it's showing the filtered data in the log! :) yuhu

  // clear table to show the filtered data after
  d3.select('tbody').selectAll('tr').remove();
  
  //TODO: improve by storing the function in a variable
  // to show the filtered data
  filteredData.forEach(function(UFO) {
    //console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});