// Constants
const carContainer = document.getElementById("carContainer");
const carEndPoint =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
var allCars = [];

// HTML template for the page
const siteTemplate = `
    <form id="carForm">
        <h1>Car Info</h1>
        <input type="text" id="carNumber" placeholder="Car Number" required/>
        <input type="text" placeholder="Manufacturer" id="manufacturer" disabled/>
        <input type="text" placeholder="Model" id="model" disabled/>
        <input type="text" placeholder="Color" id="color" disabled/>
        <input type="text" placeholder="Gasoline" id="gasoline" disabled/>
        <input type="text" placeholder="Year" id="year" disabled/>
        <input type="text" placeholder="Next Test" id="nextTest" disabled/>
        <input type="number" placeholder="Kilometers" id="km" required/>
        <input type="text" placeholder="Image URL" id="imageUrl"/>
        <div id="carImages"></div>
        <div class="button-container">
            <input type="submit" value="Add Car"/>
            <input type="reset" value="Reset Form"/>
            <input type="button" value="Clear" id="resetLocalStorageButton"/>
        </div>
    </form>
    <div id="carTable"></div>
`;
carContainer.innerHTML = siteTemplate;

// Event listeners
document.getElementById("carForm").addEventListener("submit", addCar);
document.getElementById("carNumber").addEventListener("focusout", handleCarNumberFocusOut);
document.getElementById("resetLocalStorageButton").addEventListener("click", resetLocalStorage);

// Load saved data from localStorage on page load
window.addEventListener("load", () => {
  const savedCars = localStorage.getItem("cars");
  if (savedCars) {
    allCars = JSON.parse(savedCars);
    createTable();
  }
});

// Async function to fetch car data from the API
async function getCarAPI(carNumber) {
  try {
    const response = await fetch(`${carEndPoint}${carNumber}`);
    const data = await response.json();
    return data.result.records[0];
  } catch (error) {
    console.error("Error fetching car data:", error);
  }
}

// Function to update form fields with car information
function updateFields(carInfo) {
  if (!carInfo) return;
  document.getElementById("manufacturer").value = carInfo.tozeret_nm;
  document.getElementById("model").value = carInfo.kinuy_mishari;
  document.getElementById("color").value = carInfo.tzeva_rechev;
  document.getElementById("year").value = carInfo.shnat_yitzur;
  document.getElementById("gasoline").value = carInfo.sug_delek_nm;
  document.getElementById("nextTest").value = formatDate(carInfo.tokef_dt);
}

// Event handler for when car number field loses focus
async function handleCarNumberFocusOut() {
  const inputCarNumber = document.getElementById("carNumber").value;
  const fetchedCarInfo = await getCarAPI(inputCarNumber);
  updateFields(fetchedCarInfo);
}

// Function to add a new car to the list
function addCar(formSubmitEvent) {
  formSubmitEvent.preventDefault();
  const newCarNumber = document.getElementById("carNumber").value;
  if (validateCar(newCarNumber)) {
    alert("Car already exists");
    return;
  }
  const newCarInfo = {
    carNumber: newCarNumber,
    manufacturer: document.getElementById("manufacturer").value,
    model: document.getElementById("model").value,
    color: document.getElementById("color").value,
    year: document.getElementById("year").value,
    gasoline: document.getElementById("gasoline").value,
    nextTest: formatDate(document.getElementById("nextTest").value),
    km: document.getElementById("km").value,
    imageUrl: document.getElementById("imageUrl").value,
  };
  allCars.push(newCarInfo);
  createTable();
  saveCarsToStorage(); // Save the updated data to localStorage
  document.getElementById("carForm").reset();
}

// Function to check if a car with the same carNumber already exists
function validateCar(checkCarNumber) {
  return allCars.some((currentCar) => currentCar.carNumber == checkCarNumber);
}

// Function to create and update the car table
function createTable() {
  var tableHTML = "";

  if (allCars.length == 0) {
    // If there are no cars, hide the table
    tableHTML = "<p style='text-align: center;'>No cars to display</p>";
  } else {
    tableHTML += `
    <h1>Vehicles</h1>
    <table>
          <tr>
              <th>Car Number</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Year</th>
              <th>Color</th>
              <th>Gasoline</th>
              <th>Test</th>
              <th>Kilometers</th>
              <th>Image</th>
          </tr>
    `;

    allCars.forEach((carObject) => {
      tableHTML += `
            <tr>
                <td>${carObject.carNumber}</td>
                <td>${carObject.manufacturer}</td>
                <td>${carObject.model}</td>
                <td>${carObject.year}</td>
                <td>${carObject.color}</td>
                <td>${carObject.gasoline}</td>
                <td>${formatDate(carObject.nextTest)}</td>
                <td>${carObject.km}</td>
                <td>${
                  carObject.imageUrl
                    ? `<img src="${carObject.imageUrl}" alt="Car Image" style="width:100px; height:auto;">`
                    : "No Image Provided"
                }</td>
            </tr>
        `;
    });

    tableHTML += `</table>`;
  }

  document.getElementById("carTable").innerHTML = tableHTML;
}

// Function to format date in "dd-mm-yyyy" format
function formatDate(date) {
  return date.split("-").reverse().join("-");
}

// Function to save the 'allCars' array to localStorage
function saveCarsToStorage() {
  localStorage.setItem("cars", JSON.stringify(allCars));
}

// Function to reset localStorage
function resetLocalStorage() {
  localStorage.removeItem("cars"); // Remove the "cars" key from localStorage
  allCars = []; // Clear the 'allCars' array
  createTable(); // Update the table to remove the car data
}
