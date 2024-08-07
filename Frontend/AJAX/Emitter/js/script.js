// Select the text input element
let input = document.querySelector('input[type="text"]');
// Select the button element
let button = document.querySelector('input[type="button"]');
// Select the div element where the response will be displayed
let res = document.querySelector("div");

// Add an event listener to the button for the 'click' event
button.addEventListener("click", () => {
  // Dispatch a custom event to trigger the database function
  document.dispatchEvent(new CustomEvent("event:database"));
  // Dispatch a custom event to trigger the AJAX function
  document.dispatchEvent(new CustomEvent("event:ajax"));
  // Dispatch a custom event to trigger the response function, passing the input value as detail
  document.dispatchEvent(new CustomEvent("event:response", { detail: input.value }));
});
