// Function to toggle rectangle color
function toggleRectangle(rect) {
  if (rect.style.backgroundColor === "green") {
    rect.style.backgroundColor = "white";
  } else if (rect.style.backgroundColor === "red") {
    rect.style.backgroundColor = "white";
  } else {
    rect.style.backgroundColor = rect.id === "rect1" ? "green" : "red";
  }
}

// Initialize socket.io connection
const socket = io();

// Add event listeners to rectangles
document.getElementById("rect1").addEventListener("click", () => {
  const rect = document.getElementById("rect1");
  toggleRectangle(rect);
  socket.emit("updateState", { rect: "rect1", color: rect.style.backgroundColor });
});

document.getElementById("rect2").addEventListener("click", () => {
  const rect = document.getElementById("rect2");
  toggleRectangle(rect);
  socket.emit("updateState", { rect: "rect2", color: rect.style.backgroundColor });
});

// Add event listener to "Remember me" checkbox
document.getElementById("rememberMe").addEventListener("change", () => {
  const rememberMe = document.getElementById("rememberMe").checked;
  socket.emit("updateState", { rect: "rememberMe", state: rememberMe });
});

// Add event listener to text input
document.getElementById("inputText").addEventListener("input", () => {
  const inputText = document.getElementById("inputText").value;
  socket.emit("updateState", { rect: "inputText", text: inputText });
});

// Listen for updateState events from the server
socket.on("updateState", (data) => {
  console.log("Received updateState event:", data);
  switch (data.rect) {
    case "rect1":
    case "rect2":
      const rect = document.getElementById(data.rect);
      rect.style.backgroundColor = data.color;
      break;
    case "rememberMe":
      document.getElementById("rememberMe").checked = data.state;
      break;
    case "inputText":
      document.getElementById("inputText").value = data.text;
      break;
    default:
      console.log("Unknown toggle event:", data);
  }
});
