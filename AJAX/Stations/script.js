$(document).ready(function () {
  $("#searchButton").click(function () {
    var neighborhood = $("#citySearch").val();
    var apiUrl =
      "https://data.gov.il/api/3/action/datastore_search?resource_id=e873e6a2-66c1-494f-a677-f5e77348edb0&q=" +
      neighborhood;

    $.ajax({
      url: apiUrl,
      type: "GET",
      success: function (response) {
        var records = response.result.records;
        $("#tableBody").empty();

        for (var index = 0; index < records.length; index++) {
          var row =
            "<tr><td>" +
            records[index].Neighborhood +
            "</td><td>" +
            records[index].Lat +
            "</td><td>" +
            records[index].Long +
            "</td></tr>";
          $("#tableBody").append(row);
        }
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  });
});
