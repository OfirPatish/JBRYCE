$(document).ready(function () {
  var apiUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=7c8255d0-49ef-49db-8904-4cf917586031";
  var records = [];

  $.ajax({
    url: apiUrl,
    type: "GET",
    success: function (data) {
      records = data.result.records;
      var cities = {};

      for (var index = 0; index < records.length; index++) {
        cities[records[index].LamasName] = true;
      }

      for (var city in cities) {
        $("#countrySelect").append(new Option(city, city));
      }
    },
    error: function (error) {
      console.log("Error:", error);
    },
  });

  $("#countrySelect").change(function () {
    var selectedCity = $(this).val();
    var filteredRecords = records.filter(function (cityRecord) {
      return cityRecord.LamasName === selectedCity;
    });

    var info = "";
    for (var index = 0; index < filteredRecords.length; index++) {
      info += "<p>";
      info += "Project Name: " + filteredRecords[index].ProjectName + "<br>";
      info += "Provider Name: " + filteredRecords[index].ProviderName + "<br>";
      info += "Project Status: " + filteredRecords[index].ProjectStatus + "<br>";
      info += "Price Per Meter: " + filteredRecords[index].PriceForMeter + "<br>";
      info += "Neighborhood: " + filteredRecords[index].Neighborhood;
      info += "</p>";
    }
    $("#info").html(info);
  });
});
