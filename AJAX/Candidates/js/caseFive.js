document.addEventListener("caseFive", (event) => {
  let result = event.detail;
  let tr = $("<tr></tr>");
  tr.append(`<td>${result.city}</td>`);
  tr.append(`<td>${result.district}</td>`);
  tr.append(`<td>${result.sumcandidates}</td>`);
  let candidates = result.candidates
    .split(",")
    .map((candidate) => candidate.split(":")[0])
    .join(", ");
  tr.append(`<td>${candidates}</td>`);
  $("#tableFive").append(tr);
});
