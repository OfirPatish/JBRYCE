$(document).ready(function () {
  $("#all-button").click(function () {
    // Clear the input field
    $("#country-name").val("");
    $.ajax({
      url: "https://restcountries.com/v3.1/all",
      type: "GET",
      success: function (data) {
        let totalPopulation = 0;
        for (let index = 0; index < data.length; index++) {
          totalPopulation += data[index].population;
        }

        // Calculate average population
        let averagePopulation = Math.round(totalPopulation / data.length);

        // Count countries per region
        let regionCounts = {};
        data.forEach(function (country) {
          if (country.region in regionCounts) {
            regionCounts[country.region]++;
          } else {
            regionCounts[country.region] = 1;
          }
        });

        // Count countries per currency
        let currencyCounts = {};
        data.forEach(function (country) {
          for (let currencyCode in country.currencies) {
            if (currencyCode in currencyCounts) {
              currencyCounts[currencyCode]++;
            } else {
              currencyCounts[currencyCode] = 1;
            }
          }
        });

        // Construct HTML for data display
        let html = "<p class='data-display'>Total countries: " + data.length + "</p>";
        html += "<p class='data-display'>Total population: " + totalPopulation + "</p>";
        html += "<p class='data-display'>Average population: " + averagePopulation + "</p>";

        // Construct HTML for countries table
        html += "<table class='table'><thead><tr><th>Country Name</th><th>Number of Citizens</th></tr></thead><tbody>";
        data.forEach(function (country) {
          html += "<tr><td>" + country.name.common + "</td><td>" + country.population + "</td></tr>";
        });
        html += "</tbody></table>";

        // Construct HTML for regions table
        html += "<table class='table'><thead><tr><th>Region</th><th>Number of Countries</th></tr></thead><tbody>";
        for (let region in regionCounts) {
          html += "<tr><td>" + region + "</td><td>" + regionCounts[region] + "</td></tr>";
        }
        html += "</tbody></table>";

        // Construct HTML for currencies table
        html +=
          "<table class='table'><thead><tr><th>Currency</th><th>Countries Using This Currency</th></tr></thead><tbody>";
        for (let currency in currencyCounts) {
          html += "<tr><td>" + currency + "</td><td>" + currencyCounts[currency] + "</td></tr>";
        }
        html += "</tbody></table>";

        // Display data
        $("#country-data").html(html);
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  });

  $("#country-search-form").submit(function (submitEvent) {
    submitEvent.preventDefault();

    let countryName = $("#country-name").val();
    // Clear the input field
    $("#country-name").val("");

    $.ajax({
      url: "https://restcountries.com/v3.1/name/" + countryName,
      type: "GET",
      success: function (data) {
        if (data.length > 0) {
          let totalPopulation = 0;
          for (let index = 0; index < data.length; index++) {
            totalPopulation += data[index].population;
          }

          // Calculate average population
          let averagePopulation = Math.round(totalPopulation / data.length);

          // Count countries per region
          let regionCounts = {};
          data.forEach(function (country) {
            if (country.region in regionCounts) {
              regionCounts[country.region]++;
            } else {
              regionCounts[country.region] = 1;
            }
          });

          // Count countries per currency
          let currencyCounts = {};
          data.forEach(function (country) {
            for (let currencyCode in country.currencies) {
              if (currencyCode in currencyCounts) {
                currencyCounts[currencyCode]++;
              } else {
                currencyCounts[currencyCode] = 1;
              }
            }
          });

          // Construct HTML for data display
          let html = "<p class='data-display'>Total countries: " + data.length + "</p>";
          html += "<p class='data-display'>Total population: " + totalPopulation + "</p>";
          html += "<p class='data-display'>Average population: " + averagePopulation + "</p>";

          // Construct HTML for countries table
          html +=
            "<table class='table'><thead><tr><th>Country Name</th><th>Number of Citizens</th></tr></thead><tbody>";
          data.forEach(function (country) {
            html += "<tr><td>" + country.name.common + "</td><td>" + country.population + "</td></tr>";
          });
          html += "</tbody></table>";

          // Construct HTML for regions table
          html += "<table class='table'><thead><tr><th>Region</th><th>Number of Countries</th></tr></thead><tbody>";
          for (let region in regionCounts) {
            html += "<tr><td>" + region + "</td><td>" + regionCounts[region] + "</td></tr>";
          }
          html += "</tbody></table>";

          // Construct HTML for currencies table
          html +=
            "<table class='table'><thead><tr><th>Currency</th><th>Countries Using This Currency</th></tr></thead><tbody>";
          for (let currency in currencyCounts) {
            html += "<tr><td>" + currency + "</td><td>" + currencyCounts[currency] + "</td></tr>";
          }
          html += "</tbody></table>";

          // Display data
          $("#country-data").html(html);
        } else {
          console.log("Country not found");
          $("#country-data").html("<p class='error-message'>Country not found</p>");
        }
      },
      error: function (error) {
        $("#country-data").html("<p class='error-message'>Country not found</p>");
        console.log("Error:", error);
      },
    });
  });
});
