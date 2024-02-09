$(document).ready(function () {
  $("#candidateBtn").click(function () {
    fetchData();
  });
});

function fetchData() {
  $.ajax({
    url: "https://data.gov.il/api/3/action/datastore_search?resource_id=ebcc8e6d-16df-43f9-97d6-a36f1912c9ed&q=",
    type: "GET",
    dataType: "json",
    success: function (data) {
      let results = data.result.records;

      results.forEach((result) => {
        let tr = $("<tr></tr>");
        tr.append(`<td>${result.city}</td>`);
        tr.append(`<td>${result.district}</td>`);
        tr.append(`<td>${result.sumcandidates}</td>`);
        let candidates = result.candidates
          .split(",")
          .map((candidate) => candidate.split(":")[0])
          .join(", ");
        tr.append(`<td>${candidates}</td>`);
        $("#res").append(tr);

        if (result.sumcandidates == 1) {
          let event = new CustomEvent("caseA", { detail: result });
          document.dispatchEvent(event);
        } else if (result.sumcandidates >= 5) {
          let event = new CustomEvent("caseB", { detail: result });
          document.dispatchEvent(event);
        }
      });
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
}
