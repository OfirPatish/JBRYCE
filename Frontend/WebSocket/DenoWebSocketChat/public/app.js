const myUsername = prompt("Please enter your name") || "Anonymous";

// Please remember to change the IP to your computer IP, or the server IP
const socket = new WebSocket(`ws://localhost:3000/start_web_socket?username=${myUsername}`);

socket.onmessage = (msg) => {
  const data = JSON.parse(msg.data);

  switch (data.event) {
    case "update-users":
      // Refresh displayed user list
      let userListHTML = "";
      for (const username of data.usernames) {
        userListHTML += `<div>${username}</div>`;
      }
      document.getElementById("users").innerHTML = userListHTML;
      break;

    case "send-message":
      // Display new chat message
      addMessage(data.username, data.message);
      break;
  }
};

// Function to display new message
function addMessage(username, message) {
  document.getElementById("conversation").innerHTML += `<b>${username}</b>: ${message}<br/>`;
}

// On page load
window.onload = () => {
  // When client hits the ENTER key
  document.getElementById("data").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const inputElement = document.getElementById("data");
      const message = inputElement.value;
      inputElement.value = "";
      socket.send(
        JSON.stringify({
          event: "send-message",
          message: message,
        })
      );
    }
  });
};

// To run this demo
// Install Deno
// irm https://deno.land/install.ps1 | iex

// Run demo
// deno run --allow-net server.js
