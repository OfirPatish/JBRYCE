$(document).ready(function () {
  $.ajax({
    url: "https://data.gov.il/api/3/action/datastore_search?resource_id=a9588029-8dd6-4c6f-b4ff-e8ca6413642f&limit=1000",
    type: "GET",
    success: function (data) {
      var records = data.result.records;
      var html = "<table>";
      html += "<tr>";
      html += "<th>Positive</th>";
      html += "<th>Negative</th>";
      html += "<th>In Progress</th>";
      html += "</tr>";
      var positive = [];
      var negative = [];
      var inProgress = [];
      for (var index = 0; index < records.length; index++) {
        switch (records[index]["corona_result"]) {
          case "חיובי":
            positive.push(records[index]["corona_result"]);
            break;
          case "שלילי":
            negative.push(records[index]["corona_result"]);
            break;
          case "בעבודה":
            inProgress.push(records[index]["corona_result"]);
            break;
        }
      }
      html += "<tr>";
      html += "<td>" + positive.length + "</td>";
      html += "<td>" + negative.length + "</td>";
      html += "<td>" + inProgress.length + "</td>";
      html += "</tr>";
      html += "</table>";
      $("#tableContainer").html(html);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error: " + textStatus, errorThrown);
    },
  });
});
