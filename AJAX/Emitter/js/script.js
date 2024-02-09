let input = document.querySelector('input[type="text"]');
let button = document.querySelector('input[type="button"]');
let h1 = document.querySelector("h1");
let res = document.querySelector("div");

document.addEventListener("event:ajax", fetchData);

button.addEventListener("click", () => {
  // Database Function
  document.dispatchEvent(new CustomEvent("event:database"));
  // AJAX Function
  document.dispatchEvent(new CustomEvent("event:ajax"));
  // Response Function
  document.dispatchEvent(new CustomEvent("event:response"));
});
