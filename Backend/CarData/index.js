const fs = require("fs");

function appendCarDataToFile(carNumber) {
  const apiUrl = `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${carNumber}`;

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.result.records.length > 0) {
        const carData = data.result.records[0];
        fs.readFile("carData.json", (err, fileData) => {
          if (err && err.code === "ENOENT") {
            console.log("File not found. Creating new file.");
            fileData = "[]";
          } else if (err) {
            console.error("Error reading file:", err);
            throw err;
          }
          const jsonArr = JSON.parse(fileData);
          jsonArr.push(carData);
          fs.writeFile("carData.json", JSON.stringify(jsonArr, null, 2), (err) => {
            if (err) {
              console.error("Error writing to file:", err);
              throw err;
            }
            console.log("Car data appended to file successfully.");
          });
        });
      } else {
        console.log("No records found for this car number.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data from API:", error);
      throw error;
    });
}

appendCarDataToFile(85126802);
