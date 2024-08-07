const socket = new WebSocket(`ws://localhost:3000/start_web_socket`);

let isButton1Active = false;
let isButton2Active = false;

// Handle incoming WebSocket messages
socket.onmessage = (msg) => {
  const data = JSON.parse(msg.data);

  switch (data.event) {
    case "buttonColorChange":
      const button = document.getElementById(data.target);
      button.style.backgroundColor = data.color;
      break;
    case "checkboxToggle":
      document.getElementById("checkbox").checked = data.checked;
      break;
    case "textInputChange":
      document.getElementById("textInput").value = data.text;
      break;
  }
};

// Function to toggle Button 1 color
const toggleButton1Color = () => {
  isButton1Active = !isButton1Active;
  document.getElementById("button1").style.backgroundColor = isButton1Active ? "GREEN" : "LIGHTGREY";
  socket.send(
    JSON.stringify({
      event: "buttonColorChange",
      target: "button1",
      color: isButton1Active ? "GREEN" : "LIGHTGREY",
    })
  );
};

// Function to toggle Button 2 color
const toggleButton2Color = () => {
  isButton2Active = !isButton2Active;
  document.getElementById("button2").style.backgroundColor = isButton2Active ? "RED" : "LIGHTGREY";
  socket.send(
    JSON.stringify({
      event: "buttonColorChange",
      target: "button2",
      color: isButton2Active ? "RED" : "LIGHTGREY",
    })
  );
};

// Function to handle checkbox change
const handleCheckboxChange = () => {
  socket.send(
    JSON.stringify({
      event: "checkboxToggle",
      target: "checkbox",
      checked: document.getElementById("checkbox").checked,
    })
  );
};

// Function to handle text input change
const handleTextInputChange = () => {
  socket.send(
    JSON.stringify({
      event: "textInputChange",
      target: "textInput",
      text: document.getElementById("textInput").value,
    })
  );
};
