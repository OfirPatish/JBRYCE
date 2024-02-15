$(document).ready(function () {
  $("#all-button").click(function () {
    $.ajax({
      url: "https://restcountries.com/v3.1/all",
      type: "GET",
      success: function (data) {
        // Calculate total population
        var totalPopulation = 0;
        for (var index = 0; index < data.length; index++) {
          totalPopulation += data[index].population;
        }

        // Calculate average population
        var averagePopulation = totalPopulation / data.length;

        // Calculate number of countries per region
        var regionCounts = {};
        data.forEach(function (country) {
          if (country.region in regionCounts) {
            regionCounts[country.region]++;
          } else {
            regionCounts[country.region] = 1;
          }
        });

        // Display the data
        var html = "<p>Total countries: " + data.length + "</p>";
        html += "<p>Total population: " + totalPopulation + "</p>";
        html += "<p>Average population: " + averagePopulation + "</p>";

        // Display the table
        html += "<table><tr><th>Country Name</th><th>Number of Citizens</th></tr>";
        data.forEach(function (country) {
          html += "<tr><td>" + country.name.common + "</td><td>" + country.population + "</td></tr>";
        });
        html += "</table>";

        // Display the region data
        html += "<table><tr><th>Region</th><th>Number of Countries</th></tr>";
        for (var region in regionCounts) {
          html += "<tr><td>" + region + "</td><td>" + regionCounts[region] + "</td></tr>";
        }
        html += "</table>";

        $("#country-data").html(html).show();
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  });

  $("#search-button").click(function (clickEvent) {
    clickEvent.preventDefault();
    var countryName = $("#country-name").val();
    $.ajax({
      url: "https://restcountries.com/v3.1/name/" + countryName,
      type: "GET",
      success: function (data) {
        if (data.length > 0) {
          // Calculate total population using a for loop
          var totalPopulation = 0;
          for (var index = 0; index < data.length; index++) {
            totalPopulation += data[index].population;
          }

          // Calculate average population
          var averagePopulation = totalPopulation / data.length;

          // Display the data
          var html = "<p>Total countries: " + data.length + "</p>";
          html += "<p>Total population: " + totalPopulation + "</p>";
          html += "<p>Average population: " + averagePopulation + "</p>";

          // Display the table
          html += "<table><tr><th>Country Name</th><th>Number of Citizens</th></tr>";
          data.forEach(function (country) {
            html += "<tr><td>" + country.name.common + "</td><td>" + country.population + "</td></tr>";
          });
          html += "</table>";

          $("#country-data").html(html).show();
        } else {
          $("#country-data").hide();
          console.log("Country not found");
        }
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  });
});
