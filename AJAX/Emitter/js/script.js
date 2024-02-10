let input = document.querySelector('input[type="text"]');
let button = document.querySelector('input[type="button"]');
let res = document.querySelector("div");

button.addEventListener("click", () => {
  // Database Function
  document.dispatchEvent(new CustomEvent("event:database"));
  // AJAX Function
  document.dispatchEvent(new CustomEvent("event:ajax"));
  // Response Function
  document.dispatchEvent(new CustomEvent("event:response", { detail: input.value }));
});
