$(document).ready(function () {
  var map = L.map("map").setView([32.8417945, 35.0819335], 14);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var markers = L.layerGroup().addTo(map);

  $("#searchButton").click(function () {
    var searchedCity = $("#citySearch").val();
    var apiUrl =
      "https://data.gov.il/api/3/action/datastore_search?resource_id=e873e6a2-66c1-494f-a677-f5e77348edb0&q=" +
      searchedCity;

    $.ajax({
      url: apiUrl,
      type: "GET",
      success: function (response) {
        markers.clearLayers();
        var cityDataRecords = response.result.records;

        for (var index = 0; index < cityDataRecords.length; index++) {
          var singleCityData = cityDataRecords[index];
          if (singleCityData.Lat && singleCityData.Long && singleCityData.CityName === searchedCity) {
            var marker = L.marker([singleCityData.Lat, singleCityData.Long]).addTo(markers);
            marker.bindPopup("<b>City:</b> " + singleCityData.StationTypeName);
          }
        }
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  });
});
