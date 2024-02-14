$(document).ready(function () {
  $("#all-button").click(function () {
    $.ajax({
      url: "https://restcountries.com/v3.1/all",
      type: "GET",
      success: function (data) {
        // Calculate total population
        var totalPopulation = data.reduce(function (total, country) {
          return total + country.population;
        }, 0);

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

        // Display the region data
        html += "<p>Number of countries per region:</p>";
        html += "<ul>";
        for (var region in regionCounts) {
          html += "<li>" + region + ": " + regionCounts[region] + "</li>";
        }
        html += "</ul>";

        // Display the table
        html += "<table><tr><th>Country Name</th><th>Number of Citizens</th><th>Region</th></tr>";
        data.forEach(function (country) {
          html +=
            "<tr><td>" +
            country.name.common +
            "</td><td>" +
            country.population +
            "</td><td>" +
            country.region +
            "</td></tr>";
        });
        html += "</table>";

        $("#country-data").html(html).show();
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  });

  $("#search-button").click(function () {
    var countryName = $("#country-name").val();
    $.ajax({
      url: "https://restcountries.com/v3.1/name/" + countryName,
      type: "GET",
      success: function (data) {
        if (data.length > 0) {
          // Calculate total population
          var totalPopulation = data.reduce(function (total, country) {
            return total + country.population;
          }, 0);

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
