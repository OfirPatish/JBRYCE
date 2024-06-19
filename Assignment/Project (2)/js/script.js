// Global variables
const coinCache = {};
const coinDisplayContainer = $("#coins-container .row");
const goTopButton = document.getElementById("goTopButton");
let countdownInterval;
let selectedCoins = [];
let allCoinsData = [];
let currentPage = 1;

// Functions declarations
function fetchAndDisplayCoins() {
  // Retrieve coins data and last fetch time from local storage
  const coinsData = localStorage.getItem("coinsData");
  const lastFetch = Number(localStorage.getItem("lastFetch"));

  // If coins data exists and last fetch was less than 24 hours ago, use the cached data
  if (coinsData && lastFetch && new Date().getTime() - lastFetch < 24 * 60 * 60 * 1000) {
    allCoinsData = JSON.parse(coinsData);
    displayCoins(allCoinsData.slice(0, 50 * currentPage));
  } else {
    // Show the spinner
    $("#spinner").show();

    // If no cached data or data is older than 24 hours, fetch new data from API
    $.get("https://api.coingecko.com/api/v3/coins/list")
      .done(function (data) {
        // Store the fetched data and current time in local storage
        localStorage.setItem("coinsData", JSON.stringify(data));
        localStorage.setItem("lastFetch", new Date().getTime().toString());

        allCoinsData = data;
        setTimeout(() => {
          displayCoins(data.slice(0, 50 * currentPage));
          $("#spinner").hide();
        }, 2000);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        // Log the error for debugging
        console.error("Error fetching coin data: ", textStatus, ", Details: ", errorThrown);
        // Display a user-friendly error message
        coinDisplayContainer.empty();
        coinDisplayContainer.append("<p>An error occurred while fetching coin data. Please try again later.</p>");
        // Hide the spinner
        $("#spinner").hide();
      });
  }
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

  // Loop through each coin in the data
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
        <td><div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck${
          coin.id
        }" ${selectedCoins.find((selectedCoin) => selectedCoin.id === coin.id) ? "checked" : ""}>
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

  // Clear the container and add the table title and the table to the container
  coinDisplayContainer.empty();
  coinDisplayContainer.append(tableTitle);
  coinDisplayContainer.append(table);

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
    coinDisplayContainer.append(buttonWrapper);
  }

  // Hide the spinner
  $("#spinner").hide();
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
  // Display the coin name at the top of the modal
  $("#modalTitle").text(data.name);

  // Set the image source and size
  $("#coinImage").attr("src", data.image.large);
  $("#coinImage").css({ width: "200px", height: "auto" });

  // Check if current_price exists for each currency and display the price or a default value
  $("#usdPrice").html(`<strong>USD:</strong> $${data.market_data.current_price.usd || "N/A"}`);
  $("#eurPrice").html(`<strong>EUR:</strong> €${data.market_data.current_price.eur || "N/A"}`);
  $("#ilsPrice").html(`<strong>ILS:</strong> ₪${data.market_data.current_price.ils || "N/A"}`);

  // Hide the loading bar and show the coin details
  $("#loadingBar").hide();
  $("#coinDetails").show();
}

function addSwitchListeners(data) {
  // Loop through each coin in the data
  data.forEach((coin) => {
    // Get the switch element for the current coin
    const switchElement = $(`#flexSwitchCheck${coin.id}`);

    // Add a change event listener to the switch element
    switchElement.on("change", function () {
      // If the switch is checked
      if (this.checked) {
        // If less than 5 coins are selected
        if (selectedCoins.length < 5) {
          // Add the current coin to the selected coins
          selectedCoins.push(coin);
          // Store the selected coins in local storage
          localStorage.setItem("selectedCoins", JSON.stringify(selectedCoins));
        } else {
          // If 5 coins are already selected, uncheck the switch
          this.checked = false;
          // Update the selected coins list
          updateSelectedCoinsList();
          // Show the coin limit modal
          $("#coinLimitModal").modal("show");
        }
      } else {
        // If the switch is unchecked, remove the current coin from the selected coins
        selectedCoins = selectedCoins.filter((selectedCoin) => selectedCoin.id !== coin.id);
        // Store the updated selected coins in local storage
        localStorage.setItem("selectedCoins", JSON.stringify(selectedCoins));
      }
    });
  });
}

function updateSelectedCoinsList() {
  // Get the list element
  const list = $("#selectedCoinsList");

  // Clear the list
  list.empty();

  // Add each selected coin to the list
  selectedCoins.forEach((coin) => {
    // For each coin, append a list item to the list. The list item contains the coin name and a "Deselect" button.
    // The "Deselect" button has an onclick attribute that calls the deselectCoin function with the coin id as argument.
    list.append(
      `<li class="list-group-item d-flex justify-content-between align-items-center">${coin.name} <button class="btn btn-danger btn-sm" onclick="deselectCoin('${coin.id}')">Deselect</button></li>`
    );
  });
}

function deselectCoin(id) {
  // Uncheck the switch for the coin with the given id
  $(`#flexSwitchCheck${id}`).prop("checked", false);

  // Remove the coin with the given id from the selected coins array
  selectedCoins = selectedCoins.filter((coin) => coin.id !== id);

  // Update the list of selected coins in the modal
  updateSelectedCoinsList();
}

// Event listeners
$("#searchButton").on("click", function () {
  // Get the search term from the input field and convert it to lower case
  const searchTerm = $("#searchInput").val().toLowerCase();

  // Clear the coin display container
  coinDisplayContainer.empty();

  // Check if the search term is empty
  if (!searchTerm) {
    // If the search term is empty, display an error message in the container and exit the function
    coinDisplayContainer.append("<p>Search term cannot be empty.</p>");
    return;
  }

  // Filter the coins based on the search term
  // Only include coins whose symbol matches the search term
  const filteredCoins = allCoinsData.filter((coin) => coin.symbol.toLowerCase() === searchTerm);

  // Check if any coins were found
  if (filteredCoins.length > 0) {
    // If one or more coins were found, display them in the container
    displayCoins(filteredCoins);
  } else {
    // If no coins were found, display a message in the container
    coinDisplayContainer.append("<p>No coins found for the given search term.</p>");
  }
});

$("#coinsLink").on("click", function (event) {
  // Prevent the default action of the click event
  event.preventDefault();

  // Clear the coin display container
  coinDisplayContainer.empty();

  // Fetch and display the coins data
  fetchAndDisplayCoins();

  // Scroll smoothly to the coins section
  document.getElementById("coins-container").scrollIntoView({ behavior: "smooth" });
});

$("#liveDataLink").on("click", function (event) {
  // Prevent the default action of the click event
  event.preventDefault();

  // Check if any coins have been selected
  if (selectedCoins.length === 0) {
    // If no coins have been selected, display a toast and exit the function
    const toast = new bootstrap.Toast(document.getElementById("noCoinsToast"));
    toast.show();
    return;
  }

  // Clear the container and add a div for the chart
  coinDisplayContainer.empty();
  coinDisplayContainer.append('<div id="chartContainer" style="height: 370px; width: 100%;"></div>');

  // Limit the number of coins to 5
  const selectedCoinsLimited = selectedCoins.slice(0, 5);

  // Create an array of dataPoints objects for each selected coin
  const dataPoints = selectedCoinsLimited.map((coin) => ({
    type: "line",
    dataPoints: [],
    name: coin.name,
    showInLegend: true,
  }));

  // Create a new chart with the dataPoints
  const chart = new CanvasJS.Chart("chartContainer", {
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

  // Function to update the chart data
  function updateData() {
    // Get the symbols of the selected coins
    const coinSymbols = selectedCoinsLimited.map((coin) => coin.symbol.toUpperCase()).join(",");

    // Fetch the current prices of the selected coins
    $.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinSymbols}&tsyms=USD`, function (data) {
      if (data.Response === "Error") {
        // If the response contains an error, clear the container and display the error message
        const message = $('<p class="text-center text-danger" style="font-size: 24px;">' + data.Message + "</p>");
        coinDisplayContainer.append(message);
      } else {
        // If the response does not contain an error, update the chart data and render the chart
        Object.keys(data).forEach((coin, index) => {
          dataPoints[index].dataPoints.push({ x: new Date(), y: data[coin].USD });
          if (dataPoints[index].dataPoints.length > 50) {
            // Keep only the last 50 points
            dataPoints[index].dataPoints.shift();
          }
        });
        chart.render();

        // Update the data every 2 seconds
        setTimeout(updateData, 2000);
      }
    });
  }

  // Call the updateData function to start updating the chart data
  updateData();
});

$("#aboutLink").on("click", function (event) {
  // Prevent the default action of the click event
  event.preventDefault();

  // Clear the coin display container
  coinDisplayContainer.empty();

  // Define the personal details and project description
  const personalDetails = `
  <!-- Personal details card -->
  <div class="card mb-4 shadow">
    <!-- Card header -->
    <div class="card-header bg-primary text-white">
      <h5>About Me</h5>
    </div>
    <!-- Card body -->
    <div class="card-body">
      <!-- Personal details -->
      <p>I'm a full-stack web developer in training, currently enrolled in a comprehensive course that covers a wide range of technologies and frameworks.</p>
      <!-- Education -->
      <h6>Education</h6>
      <p>I'm currently pursuing a Full-Stack Web Development course from John Bryce Institute...</p>
      <!-- Projects -->
      <h6>Projects</h6>
      <p>This cryptocurrency web application is one of the key projects I've worked on during my course...</p>
      <!-- Skills -->
      <h6>Skills</h6>
      <ul class="list-unstyled">
        <li><span class="badge bg-secondary">HTML/CSS</span></li>
        <li><span class="badge bg-secondary">JavaScript</span></li>
        <li><span class="badge bg-secondary">React</span></li>
        <li><span class="badge bg-secondary">Node.js</span></li>
        <li><span class="badge bg-secondary">Express.js</span></li>
        <li><span class="badge bg-secondary">MongoDB</span></li>
      </ul>
      <!-- Contact Information  -->
      <h6>Contact Information</h6>
      <p>You can reach me at <a href="mailto:ofirpatishop@gmail.com">Gmail</a>, on <a href="https://www.linkedin.com/in/ofirpatish">LinkedIn</a>, or view my projects on <a href="https://github.com/OfirPatish">GitHub</a>.</p>
  </div>
`;

  const projectDescription = `
    <!-- Project description card -->
    <div class="card mt-4 shadow">
      <!-- Card header -->
      <div class="card-header bg-primary text-white">
        <h5>Project Description</h5>
      </div>
      <!-- Card body -->
      <div class="card-body">
        <!-- Project description -->
        <p>This project is a dynamic web application designed to deliver real-time cryptocurrency data. It allows users to fetch, display, and filter cryptocurrency information interactively. The application efficiently caches data using local storage to minimize API calls, ensuring a fast and responsive user experience.</p>
        <!-- Project updates -->
        <p>Recently, we've made significant updates to improve the application's performance and user experience. These updates include:</p>
        <ul>
          <li>Implemented a caching mechanism to store coin data and reduce the number of API calls.</li>
          <li>Added a search functionality to filter coins based on their symbols.</li>
          <li>Introduced a live data page that presents the latest prices of selected cryptocurrencies in a dynamic chart.</li>
          <li>Enhanced the user interface with Bootstrap and jQuery for a better user experience.</li>
          <li>Added a "View More" button to load more coins without refreshing the page.</li>
          <li>Implemented a selection limit for coins to be displayed in the live data page.</li>
        </ul>
        <!-- Technologies used -->
        <p>Here are some of the technologies we used in this project:</p>
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

  // Append the personal details and project description to the coin display container
  coinDisplayContainer.append(personalDetails);
  coinDisplayContainer.append(projectDescription);
});

// Code that runs on document ready
$(document).ready(function () {
  // Fetch and display coins when the document is ready
  fetchAndDisplayCoins();

  // Reset the selected coins array when the document is ready
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
