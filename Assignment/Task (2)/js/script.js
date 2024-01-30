// Store the elements and context in variables
var ribAElement = document.getElementById("ribA");
var ribBElement = document.getElementById("ribB");
var coordXElement = document.getElementById("coordX");
var coordYElement = document.getElementById("coordY");
var squareAreaElement = document.getElementById("squareArea");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to calculate the area of a rectangle and draw it on a canvas
function calculateArea() {
  // Get the values from the input fields
  var ribA = ribAElement.value;
  var ribB = ribBElement.value;
  var coordX = coordXElement.value;
  var coordY = coordYElement.value;

  // Check if all fields have values
  if (ribA === "" || ribB === "" || coordX === "" || coordY === "") {
    alert("Please enter values in all fields.");
    return;
  }

  // Regular expression to check if the input is a number
  var regex = /^[0-9]+$/;

  // Check if all inputs are numbers
  if (!ribA.match(regex) || !ribB.match(regex) || !coordX.match(regex) || !coordY.match(regex)) {
    alert("Please enter numeric values only.");
    return;
  }

  // Parse the inputs to integers
  ribA = parseInt(ribA);
  ribB = parseInt(ribB);
  coordX = parseInt(coordX);
  coordY = parseInt(coordY);

  // Check if the rectangle fits within the canvas
  if (coordX + ribA > canvas.width || coordY + ribB > canvas.height) {
    alert("The rectangle exceeds the canvas area. Please enter smaller values.");
    return;
  }

  // Calculate the area of the rectangle and display it
  var area = ribA * ribB;
  squareAreaElement.textContent = "Square Area: " + area;

  // Clear the canvas and draw the rectangle
  clearCanvas();
  ctx.strokeRect(coordX, coordY, ribA, ribB);
}

canvas.addEventListener("click", function (buttonClickEvent) {
  // Get the coordinates of the click relative to the canvas
  var rect = canvas.getBoundingClientRect();
  var coordX = Math.round(buttonClickEvent.clientX - rect.left);
  var coordY = Math.round(buttonClickEvent.clientY - rect.top);

  // Set the coordinates in the input fields
  coordXElement.value = coordX;
  coordYElement.value = coordY;
});

// function generateRectangle() {
//   clearCanvas();

//   var coordX = Math.floor(Math.random() * canvas.width);
//   var coordY = Math.floor(Math.random() * canvas.height);
//   var ribA = Math.floor(Math.random() * (canvas.width - coordX));
//   var ribB = Math.floor(Math.random() * (canvas.height - coordY));

//   ctx.strokeRect(coordX, coordY, ribA, ribB);
// }

// setInterval(generateRectangle, 1000);
