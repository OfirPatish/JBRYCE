// Global variables
const coinCache = {};
let countdownInterval;
let selectedCoins = [];
let allCoinsData = [];
const container = $("#coins-container .row");

// Fetch and display coins
function fetchAndDisplayCoins() {
  const coinsData = localStorage.getItem("coinsData");
  const lastFetch = Number(localStorage.getItem("lastFetch")); // Convert the retrieved string back to a number

  // Check if data is in localStorage and not older than 1 day
  if (coinsData && lastFetch && new Date().getTime() - lastFetch < 24 * 60 * 60 * 1000) {
    // Parse the coins data and pass the first 21 coins to displayCoins
    allCoinsData = JSON.parse(coinsData);
    displayCoins(allCoinsData.slice(0, 21));
  } else {
    // Use jQuery's $.get() function to fetch data from the API
    $.get("https://api.coingecko.com/api/v3/coins/list", function (data) {
      // Save the fetched data and the fetch time to localStorage
      localStorage.setItem("coinsData", JSON.stringify(data));
      localStorage.setItem("lastFetch", new Date().getTime().toString()); // Convert the date to a string before storing

      // Pass the first 21 coins to displayCoins
      allCoinsData = data;
      displayCoins(data.slice(0, 21));
    });
  }
}

// Display coins
function displayCoins(data) {
  // Limit the data to the first 100 coins
  const limitedData = data.slice(0, 100);

  // Create a new div to contain the cards
  const cardContainer = $('<div class="d-flex flex-wrap justify-content-center"></div>');

  // Loop through each coin in the limited data
  limitedData.forEach((coin) => {
    // Create a new card for each coin
    const card = `
      <div class="col-md-4">
          <div class="card">
              <div class="card-body d-flex justify-content-between align-items-start">
                  <div>
                  <h5 class="card-title">${coin.id}</h5>
                  <p class="card-text">Symbol: ${coin.symbol}<br>Name: ${coin.name}</p>
                      <a href="#" class="btn btn-primary" onclick="fetchAndDisplayCoinDetails(event, '${coin.id}')">View Details</a>
                  </div>
                  <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck${coin.id}">
                  </div>
              </div>
          </div>
      </div>
    `;

    // Add the card to the card container
    cardContainer.append(card);

    // Add an event listener to the switch
    $(`#flexSwitchCheck${coin.id}`).on("change", function () {
      if (this.checked) {
        // If the switch is turned on, add the coin to the list
        if (selectedCoins.length < 5) {
          selectedCoins.push(coin);
        } else {
          // If there are already 5 coins in the list, show the coin limit modal
          this.checked = false;
          updateSelectedCoinsList();
          $("#coinLimitModal").modal("show");
        }
      } else {
        // If the switch is turned off, remove the coin from the list
        selectedCoins = selectedCoins.filter((selectedCoin) => selectedCoin.id !== coin.id);
      }
    });
  });

  // Add the card container to the main container
  container.append(cardContainer);
}

// Update selected coins list
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

// Deselect coin
function deselectCoin(id) {
  // Deselect the coin
  $(`#flexSwitchCheck${id}`).prop("checked", false);

  // Remove the coin from the selected coins list
  selectedCoins = selectedCoins.filter((coin) => coin.id !== id);

  // Update the list in the modal
  updateSelectedCoinsList();
}

// Fetch and display coin details
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

// Display coin details
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

$(document).ready(function () {
  // Fetch and display coins
  fetchAndDisplayCoins();

  // Add a title and some content for the coins page
  const container = $("#coins-container .row");
  container.prepend("<h1>Coins Page</h1>");

  // Function to reset all switchers
  function resetSwitchers() {
    $(".form-check-input").prop("checked", false);
    selectedCoins = [];
  }

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
    // Add a title and some content for the coins page
    container.prepend("<h1>Coins Page</h1>");
    // Reset all switchers
    resetSwitchers();
  });

  $("#liveDataLink").on("click", function (event) {
    event.preventDefault();
    // Clear the container and display the live data
    container.empty();
    container.append("<h1>Live Data Page</h1>");
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
        verticalAlign: "top",
        horizontalAlign: "right",
        dockInsidePlotArea: true,
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
      <div class="card mb-4">
        <div class="card-header">
          <h6>About Me</h6>
        </div>
        <div class="card-body">
          <p>I'm a dedicated software developer with a keen interest in the ever-evolving world of cryptocurrencies. With a background in computer science, I have a firm understanding of the underlying principles of software development.</p>
          <p>I specialize in web development, particularly in JavaScript and its frameworks. I have experience in both front-end and back-end development, and I'm always eager to learn new technologies and improve my skills.</p>
          <p>In my spare time, I enjoy contributing to open-source projects and exploring the latest trends in the tech industry. I believe in continuous learning and strive to stay updated with the latest industry advancements.</p>
          <p>Here are some of my skills:</p>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
      </div>
    `;

    const projectDescription = `
      <div class="card mt-4">
        <div class="card-header">
          <h6>Project Description</h6>
        </div>
        <div class="card-body">
          <p>My recent project involves creating a dynamic web application designed to deliver real-time cryptocurrency data. This application is built with a focus on user interaction, allowing for the seamless fetching, display, and filtration of cryptocurrency information.</p>
          <p>Utilizing local storage, it efficiently caches data to minimize API calls, ensuring a fast and responsive user experience. Additionally, the application features a live data page that presents the latest prices of selected cryptocurrencies, demonstrating my commitment to leveraging technology to provide valuable and up-to-date financial insights.</p>
          <p>Here are some of the technologies I used in this project:</p>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
    `;

    // Append your personal details and project description to the container
    container.append(personalDetails);
    container.append(projectDescription);

    // Reset all switchers
    resetSwitchers();
  });
});
