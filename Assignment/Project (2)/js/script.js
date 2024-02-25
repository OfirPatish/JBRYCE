// Global variables
const coinCache = {};
const container = $("#coins-container .row");
const goTopButton = document.getElementById("goTopButton");
let countdownInterval;
let selectedCoins = [];
let allCoinsData = [];
let currentPage = 1;

// Function declarations
function fetchAndDisplayCoins() {
  const coinsData = localStorage.getItem("coinsData");
  const lastFetch = Number(localStorage.getItem("lastFetch"));

  if (coinsData && lastFetch && new Date().getTime() - lastFetch < 24 * 60 * 60 * 1000) {
    allCoinsData = JSON.parse(coinsData);
    displayCoins(allCoinsData.slice(0, 50 * currentPage));
  } else {
    $.get("https://api.coingecko.com/api/v3/coins/list", function (data) {
      localStorage.setItem("coinsData", JSON.stringify(data));
      localStorage.setItem("lastFetch", new Date().getTime().toString());

      allCoinsData = data;
      displayCoins(data.slice(0, 50 * currentPage));
    });
  }
}

function addSwitchListeners(data) {
  data.forEach((coin) => {
    const switchElement = $(`#flexSwitchCheck${coin.id}`);
    switchElement.on("change", function () {
      if (this.checked) {
        if (selectedCoins.length < 5) {
          selectedCoins.push(coin);
          localStorage.setItem("selectedCoins", JSON.stringify(selectedCoins));
        } else {
          this.checked = false;
          updateSelectedCoinsList();
          $("#coinLimitModal").modal("show");
        }
      } else {
        selectedCoins = selectedCoins.filter((selectedCoin) => selectedCoin.id !== coin.id);
        localStorage.setItem("selectedCoins", JSON.stringify(selectedCoins));
      }
    });
  });
}

function displayCoins(data) {
  // Create a table title
  let tableTitle = '<h2 class="text-center mb-4">Cryptocurrency List</h2>';

  // Create a table and a table head
  let table = `
    <table class="table table-hover shadow">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Symbol</th>
          <th scope="col">Name</th>
          <th scope="col">Details</th>
          <th scope="col">Select</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Loop through each coin in the limited data
  data.forEach((coin) => {
    // Create a new row for each coin
    const row = `
      <tr>
        <td>${coin.id}</td>
        <td>${coin.symbol}</td>
        <td>${coin.name}</td>
        <td><button class="btn btn-primary" onclick="fetchAndDisplayCoinDetails(event, '${
          coin.id
        }')">View Details</button></td>
        <td>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck${coin.id}" ${
      selectedCoins.find((selectedCoin) => selectedCoin.id === coin.id) ? "checked" : ""
    }>
          </div>
        </td>
      </tr>
    `;

    // Add the row to the table
    table += row;
  });

  // Close the table body and the table
  table += `
      </tbody>
    </table>
  `;

  // Add the table title and the table to the container
  container.empty();
  container.append(tableTitle);
  container.append(table);

  // Add the event listeners to the switches
  addSwitchListeners(data); // Pass the data to the function

  // Add a "View More" button if there are more coins to display
  if (data.length < allCoinsData.length) {
    const viewMoreButton = $('<button class="btn btn-primary">View More</button>');
    viewMoreButton.on("click", function () {
      currentPage++;
      fetchAndDisplayCoins();
    });
    const buttonWrapper = $('<div class="d-flex justify-content-center"></div>');
    buttonWrapper.append(viewMoreButton);
    container.append(buttonWrapper);
  }
}

function updateSelectedCoinsList() {
  // Get the list element
  const list = $("#selectedCoinsList");

  // Clear the list
  list.empty();

  // Add each selected coin to the list
  selectedCoins.forEach((coin) => {
    list.append(
      `<li class="list-group-item d-flex justify-content-between align-items-center">${coin.name} <button class="btn btn-outline-danger btn-sm" onclick="deselectCoin('${coin.id}')">Deselect</button></li>`
    );
  });
}

function deselectCoin(id) {
  // Deselect the coin
  $(`#flexSwitchCheck${id}`).prop("checked", false);

  // Remove the coin from the selected coins list
  selectedCoins = selectedCoins.filter((coin) => coin.id !== id);

  // Update the list in the modal
  updateSelectedCoinsList();
}

function fetchAndDisplayCoinDetails(event, id) {
  // Prevent the default action of the click event
  event.preventDefault();

  // Clear the previous fetched result
  $("#coinImage").attr("src", "");
  $("#usdPrice").text("");
  $("#eurPrice").text("");
  $("#ilsPrice").text("");

  // Show the modal and the loading bar, hide the coin details
  $("#coinModal").modal("show");
  $("#loadingBar").show();
  $("#coinDetails").hide();

  // Function to fetch data from the API
  const fetchData = () => {
    const request = $.get(`https://api.coingecko.com/api/v3/coins/${id}`, function (data) {
      // Store the data and the current time in the cache
      coinCache[id] = {
        data: data,
        timestamp: new Date().getTime(),
      };
      // Display the fetched data
      displayCoinDetails(data);
    });

    // Initialize the countdown timer
    let countdown = 60;
    // Display the countdown timer on the progress bar
    $("#countdown").text(`Fetching data... (${countdown}s)`);

    // Clear any existing countdown interval
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    // Update the countdown timer every second
    countdownInterval = setInterval(() => {
      countdown--;
      $("#countdown").text(`Fetching data... (${countdown}s)`);
    }, 1000);

    // Set a timeout to limit the API call to 60 seconds
    const timeout = setTimeout(function () {
      // Clear the countdown interval
      clearInterval(countdownInterval);
      if (coinCache[id]) {
        // If the data is in the cache, display it
        displayCoinDetails(coinCache[id].data);
      } else {
        // If the data is not in the cache after 60 seconds, fetch it again
        fetchData();
      }
    }, 60 * 1000); // 60 seconds in milliseconds

    // Clear the timeout and the countdown interval if the request completes successfully
    request.done(function () {
      clearTimeout(timeout);
      clearInterval(countdownInterval);
    });
  };

  // Check if the data is in the cache and not older than 2 minutes
  const cachedData = coinCache[id];
  if (cachedData && new Date().getTime() - cachedData.timestamp < 2 * 60 * 1000) {
    // If the data is in the cache and not older than 2 minutes, display it
    displayCoinDetails(cachedData.data);
  } else {
    // If the data is not in the cache or older than 2 minutes, fetch it from the API
    fetchData();
  }
}

function displayCoinDetails(data) {
  $("#coinImage").attr("src", data.image.large);
  $("#coinImage").css({ width: "200px", height: "auto" }); // Set the dimensions of the image

  // Check if current_price exists for each currency and display the price or a default value
  $("#usdPrice").text(`USD: $${data.market_data.current_price.usd || "N/A"}`);
  $("#eurPrice").text(`EUR: €${data.market_data.current_price.eur || "N/A"}`);
  $("#ilsPrice").text(`ILS: ₪${data.market_data.current_price.ils || "N/A"}`);

  // Hide the loading bar and show the coin details
  $("#loadingBar").hide();
  $("#coinDetails").show();
}

// Event listeners
$("#searchButton").on("click", function () {
  // Get the search term
  const searchTerm = $("#searchInput").val().toLowerCase();

  // Clear the container
  container.empty();

  // Check if the search term is empty
  if (!searchTerm) {
    // If the search term is empty, display an error message
    container.append("<p>Search term cannot be empty.</p>");
    return;
  }

  // Filter the coins based on the search term
  const filteredCoins = allCoinsData.filter((coin) => coin.symbol.toLowerCase() === searchTerm);

  // Check if any coins were found
  if (filteredCoins.length > 0) {
    // Display the filtered coins
    displayCoins(filteredCoins);
  } else {
    // If no coins were found, display a message
    container.append("<p>No coins found for the given search term.</p>");
  }
});

$("#coinsLink").on("click", function (event) {
  event.preventDefault();
  // Clear the container and fetch the coins data
  container.empty();
  fetchAndDisplayCoins();
  // Scroll to the coins section
  document.getElementById("coins-container").scrollIntoView({ behavior: "smooth" });
});

$("#liveDataLink").on("click", function (event) {
  event.preventDefault();
  // Clear the container and display the live data
  container.empty();
  container.append('<div id="chartContainer" style="height: 370px; width: 100%;"></div>');

  // Check if any coins have been selected
  if (selectedCoins.length === 0) {
    // If no coins have been selected, display a message
    var message = $(
      '<p class="text-center text-danger" style="font-size: 24px;">You need to select at least one coin.</p>'
    );
    container.append(message);
    return;
  }

  // Limit the number of coins to 5
  var selectedCoinsLimited = selectedCoins.slice(0, 5);

  var dataPoints = selectedCoinsLimited.map((coin) => ({
    type: "line",
    dataPoints: [],
    name: coin.name,
    showInLegend: true,
  }));

  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light1",
    title: {
      text: "Currency Prices in USD",
    },
    legend: {
      cursor: "pointer",
      verticalAlign: "bottom",
      horizontalAlign: "center",
      dockInsidePlotArea: false,
    },
    data: dataPoints,
  });

  function updateData() {
    var fsyms = selectedCoinsLimited.map((coin) => coin.symbol.toUpperCase()).join(",");
    $.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${fsyms}&tsyms=USD`, function (data) {
      if (data.Response === "Error") {
        // If the response contains an error, clear the container and display the error message
        var message = $('<p class="text-center text-danger" style="font-size: 24px;">' + data.Message + "</p>");
        container.append(message);
      } else {
        Object.keys(data).forEach((coin, index) => {
          dataPoints[index].dataPoints.push({ x: new Date(), y: data[coin].USD });
          if (dataPoints[index].dataPoints.length > 50) {
            // keep only last 50 points
            dataPoints[index].dataPoints.shift();
          }
        });
        chart.render();
        setTimeout(updateData, 2000); // Only update if no error
      }
    });
  }

  updateData();
});

$("#aboutLink").on("click", function (event) {
  event.preventDefault();
  // Clear the container
  container.empty();

  // Add your personal details and project description
  const personalDetails = `
    <div class="card mb-4 shadow">
      <div class="card-header bg-primary text-white">
        <h5>About Me</h5>
      </div>
      <div class="card-body">
        <p>I'm a dedicated software developer with a keen interest in the ever-evolving world of cryptocurrencies. With a background in computer science, I have a firm understanding of the underlying principles of software development.</p>
        <p>I specialize in web development, particularly in JavaScript and its frameworks. I have experience in both front-end and back-end development, and I'm always eager to learn new technologies and improve my skills.</p>
        <p>In my spare time, I enjoy contributing to open-source projects and exploring the latest trends in the tech industry. I believe in continuous learning and strive to stay updated with the latest industry advancements.</p>
        <p>Here are some of my skills:</p>
        <ul class="list-unstyled">
          <li><span class="badge bg-secondary">JavaScript</span></li>
          <li><span class="badge bg-secondary">React</span></li>
          <li><span class="badge bg-secondary">Node.js</span></li>
          <li><span class="badge bg-secondary">Python</span></li>
          <li><span class="badge bg-secondary">Django</span></li>
        </ul>
      </div>
    </div>
  `;

  const projectDescription = `
    <div class="card mt-4 shadow">
      <div class="card-header bg-primary text-white">
        <h5>Project Description</h5>
      </div>
      <div class="card-body">
        <p>My recent project involves creating a dynamic web application designed to deliver real-time cryptocurrency data. This application is built with a focus on user interaction, allowing for the seamless fetching, display, and filtration of cryptocurrency information.</p>
        <p>Utilizing local storage, it efficiently caches data to minimize API calls, ensuring a fast and responsive user experience. Additionally, the application features a live data page that presents the latest prices of selected cryptocurrencies, demonstrating my commitment to leveraging technology to provide valuable and up-to-date financial insights.</p>
        <p>Here are some of the technologies I used in this project:</p>
        <ul class="list-unstyled">
          <li><span class="badge bg-secondary">HTML/CSS</span></li>
          <li><span class="badge bg-secondary">JavaScript</span></li>
          <li><span class="badge bg-secondary">Bootstrap</span></li>
          <li><span class="badge bg-secondary">jQuery</span></li>
          <li><span class="badge bg-secondary">APIs</span></li>
        </ul>
      </div>
    </div>
  `;

  // Append your personal details and project description to the container
  container.append(personalDetails);
  container.append(projectDescription);
});

// Code that runs on document ready
$(document).ready(function () {
  // Fetch and display coins
  fetchAndDisplayCoins();

  // Add a title and some content for the coins page
  const container = $("#coins-container .row");

  // Reset selected coins
  selectedCoins = [];
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopButton.style.display = "block";
  } else {
    goTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
goTopButton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
