const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;
const host = "localhost";

// Generic function to fetch vehicle details
async function fetchVehicleDetails(req, res, vehicleType, resourceId) {
  const vehicleId = req.params.id;
  const apiUrl = `https://data.gov.il/api/3/action/datastore_search?resource_id=${resourceId}&q=${vehicleId}`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data && response.data.success && response.data.result.records.length > 0) {
      res.json(response.data.result.records[0]);
    } else {
      res.status(404).send(`${vehicleType} not found`);
    }
  } catch (error) {
    res.status(500).send(`Error fetching ${vehicleType} details`);
  }
}

// Landing page route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Vehicle Information API</h1>
    <p>To view vehicle details, use the following endpoints:</p>
    <ul>
      <li>For cars: <code>/car/:id</code></li>
      <li>For trucks: <code>/truck/:id</code></li>
      <li>For bikes: <code>/bike/:id</code></li>
      <li>For handicap: <code>/handicap/:id</code></li>
      <li>For recall: <code>/recall/:id</code></li>
    </ul>
    <p>Replace <code>:id</code> with the actual vehicle ID.</p>
  `);
});

// Endpoint to fetch car details
app.get("/car/:id", (req, res) => {
  fetchVehicleDetails(req, res, "Car", "053cea08-09bc-40ec-8f7a-156f0677aff3");
});

// Endpoint to fetch truck details
app.get("/truck/:id", (req, res) => {
  fetchVehicleDetails(req, res, "Truck", "cd3acc5c-03c3-4c89-9c54-d40f93c0d790");
});

// Endpoint to fetch bike details
app.get("/bike/:id", (req, res) => {
  fetchVehicleDetails(req, res, "Bike", "bf9df4e2-d90d-4c0a-a400-19e15af8e95f");
});

// Endpoint to fetch handicap details
app.get("/handicap/:id", (req, res) => {
  fetchVehicleDetails(req, res, "Handicap", "c8b9f9c8-4612-4068-934f-d4acd2e3c06e");
});

// Endpoint to fetch recall details
app.get("/recall/:id", (req, res) => {
  fetchVehicleDetails(req, res, "Recall", "36bf1404-0be4-49d2-82dc-2f1ead4a8b93");
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
