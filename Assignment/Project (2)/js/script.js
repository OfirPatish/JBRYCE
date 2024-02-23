// script.js

$(document).ready(function () {
  // Define your navigation buttons and their corresponding content
  const navButtons = {
    coins: "<div><h2>Coins</h2><p>Coins content goes here...</p></div>",
    reports: "<div><h2>Real-time Reports</h2><p>Reports content goes here...</p></div>",
    about: "<div><h2>About</h2><p>About content goes here...</p></div>",
  };

  // Add click event listeners to the navigation buttons
  $("nav button").click(function () {
    const buttonId = $(this).attr("id");
    const content = navButtons[buttonId];
    $("main").html(content);
  });
});

// window.onload = function () {
//   // Initialize data points for each cryptocurrency
//   var btcDataPoints = [];
//   var ethDataPoints = [];
//   var xrpDataPoints = [];
//   var ltcDataPoints = [];
//   var adaDataPoints = [];

//   // Define chart options
//   var options = {
//     theme: "light2",
//     title: {
//       text: "Live Cryptocurrency Data",
//     },
//     data: [
//       { type: "line", dataPoints: btcDataPoints, name: "BTC", showInLegend: true },
//       { type: "line", dataPoints: ethDataPoints, name: "ETH", showInLegend: true },
//       { type: "line", dataPoints: xrpDataPoints, name: "XRP", showInLegend: true },
//       { type: "line", dataPoints: ltcDataPoints, name: "LTC", showInLegend: true },
//       { type: "line", dataPoints: adaDataPoints, name: "ADA", showInLegend: true },
//     ],
//   };

//   // Initialize the chart with the defined options
//   $("#chartContainer").CanvasJSChart(options);

//   // Fetch new data and update the chart
//   updateData();

//   function addData(data) {
//     var now = new Date();

//     // Add new data points for each cryptocurrency
//     btcDataPoints.push({ x: now, y: parseFloat(data.BTC.USD) });
//     ethDataPoints.push({ x: now, y: parseFloat(data.ETH.USD) });
//     xrpDataPoints.push({ x: now, y: parseFloat(data.XRP.USD) });
//     ltcDataPoints.push({ x: now, y: parseFloat(data.LTC.USD) });
//     adaDataPoints.push({ x: now, y: parseFloat(data.ADA.USD) });

//     // Render the updated chart
//     $("#chartContainer").CanvasJSChart().render();

//     // Fetch new data every minute
//     setTimeout(updateData, 500);
//   }

//   function updateData() {
//     // Fetch current prices for the cryptocurrencies from the CryptoCompare API
//     $.getJSON("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,ADA&tsyms=USD", addData);
//   }
// };
