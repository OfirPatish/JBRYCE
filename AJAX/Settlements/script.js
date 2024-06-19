$(document).ready(function () {
  $.ajax({
    url: "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=60835",
    type: "GET",
    success: function (res) {
      let data = res.result.records;
      let settlements = {};

      for (let index = 0; index < data.length; index++) {
        let settlement = data[index]["שם_ישוב"];

        if (!settlements[settlement]) {
          settlements[settlement] = 0;
        }

        settlements[settlement]++;
      }

      for (let settlement in settlements) {
        let row = "<tr><td>" + settlement + "</td><td>" + settlements[settlement] + "</td></tr>";
        $("#tableBody").append(row);
      }
    },
  });
});
