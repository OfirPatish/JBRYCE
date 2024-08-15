const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS middleware
const connectDB = require("./config/db");
const operationsRoutes = require("./routes/operations");

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware

app.use("/operations", operationsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
