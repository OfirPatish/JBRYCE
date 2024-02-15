// Wait for the document to be ready
$(document).ready(function () {
  // Event handler for the "all-button" click event
  $("#all-button").click(function () {
    // AJAX GET request to the REST Countries API
    $.ajax({
      url: "https://restcountries.com/v3.1/all",
      type: "GET",
      success: function (data) {
        // Calculate total population of all countries
        let totalPopulation = 0;
        for (let index = 0; index < data.length; index++) {
          totalPopulation += data[index].population;
        }

        // Calculate average population of all countries
        let averagePopulation = totalPopulation / data.length;

        // Calculate number of countries per region
        let regionCounts = {};
        data.forEach(function (country) {
          if (country.region in regionCounts) {
            regionCounts[country.region]++;
          } else {
            regionCounts[country.region] = 1;
          }
        });

        // Prepare HTML to display the data
        let html = "<p>Total countries: " + data.length + "</p>";
        html += "<p>Total population: " + totalPopulation + "</p>";
        html += "<p>Average population: " + averagePopulation + "</p>";

        // Prepare HTML for the table of countries
        html += "<table><tr><th>Country Name</th><th>Number of Citizens</th></tr>";
        data.forEach(function (country) {
          html += "<tr><td>" + country.name.common + "</td><td>" + country.population + "</td></tr>";
        });
        html += "</table>";

        // Prepare HTML for the table of regions
        html += "<table><tr><th>Region</th><th>Number of Countries</th></tr>";
        for (let region in regionCounts) {
          html += "<tr><td>" + region + "</td><td>" + regionCounts[region] + "</td></tr>";
        }
        html += "</table>";

        // Display the prepared HTML
        $("#country-data").html(html).show();
      },
      error: function (error) {
        // Log any errors
        console.log("Error:", error);
      },
    });
  });

  // Event handler for the "search-button" click event
  $("#search-button").click(function (clickEvent) {
    // Prevent the default form submission
    clickEvent.preventDefault();
    let countryName = $("#country-name").val();
    if (countryName) {
      // AJAX GET request to the REST Countries API for a specific country
      $.ajax({
        url: "https://restcountries.com/v3.1/name/" + countryName,
        type: "GET",
        success: function (data) {
          if (data.length > 0) {
            // Calculate total population of the searched countries
            let totalPopulation = 0;
            for (let index = 0; index < data.length; index++) {
              totalPopulation += data[index].population;
            }

            // Calculate average population of the searched countries
            let averagePopulation = totalPopulation / data.length;

            // Calculate number of searched countries per region
            let regionCounts = {};
            data.forEach(function (country) {
              if (country.region in regionCounts) {
                regionCounts[country.region]++;
              } else {
                regionCounts[country.region] = 1;
              }
            });

            // Prepare HTML to display the data
            let html = "<p>Total countries: " + data.length + "</p>";
            html += "<p>Total population: " + totalPopulation + "</p>";
            html += "<p>Average population: " + averagePopulation + "</p>";

            // Prepare HTML for the table of countries
            html += "<table><tr><th>Country Name</th><th>Number of Citizens</th></tr>";
            data.forEach(function (country) {
              html += "<tr><td>" + country.name.common + "</td><td>" + country.population + "</td></tr>";
            });
            html += "</table>";

            // Prepare HTML for the table of regions
            html += "<table><tr><th>Region</th><th>Number of Countries</th></tr>";
            for (let region in regionCounts) {
              html += "<tr><td>" + region + "</td><td>" + regionCounts[region] + "</td></tr>";
            }
            html += "</table>";

            // Display the prepared HTML
            $("#country-data").html(html).show();
          } else {
            // Hide the country data if no country was found
            $("#country-data").hide();
            console.log("Country not found");
          }
        },
        error: function (error) {
          // Log any errors
          console.log("Error:", error);
        },
      });
    } else {
      // Highlight the input field in red if no country name was entered
      $("#country-name").css("border", "1px solid red");
      // Remove the red border after X seconds
      setTimeout(function () {
        $("#country-name").css("border", "");
      }, 3000);
    }
  });
});
