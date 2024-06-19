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
        if (result.sumcandidates == 1) {
          let event = new CustomEvent("caseOne", { detail: result });
          document.dispatchEvent(event);
        } else if (result.sumcandidates >= 5) {
          let event = new CustomEvent("caseFive", { detail: result });
          document.dispatchEvent(event);
        } else {
          let event = new CustomEvent("caseOther", { detail: result });
          document.dispatchEvent(event);
        }
      });
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
}
