// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var tbody = d3.select("tbody");

data.forEach(function(ufoReport) {
      console.log(ufoReport);
     });
    

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

button.on("click", function() {

  d3.event.preventDefault()

  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  if(inputValue =='') {
    alert("Please enter in a value!");
    autopopulate(tableData)
  }


  var filteredData = data.filter(datesighting => datesighting.datetime == inputValue);
  console.log(filteredData);

  //Displaying the data for the selection
  filteredData.forEach((ufoReport) => {
    // Creating table rows for each row of alients data
    var row = tbody.append("tr");
    //Iterating thru each row for key and values
    Object.entries(ufoReport).forEach(([key, value]) => {
        // Creating cells for posting table data
        var cell = row.append("td");
        cell.text(value);
    });
});

})

