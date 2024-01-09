const carEndPoint =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
const carHandicapEndPoint =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";
const carNumber = "1002339";

function getCarDetails(carEndPoint, carNumber) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${carEndPoint}${carNumber}`);
      const data = await response.json();
      if (data.result.records.length === undefined) {
        throw new Error("Car not found");
      }
      resolve(data.result.records[0]);
    } catch (error) {
      console.error("Error:", error);
      reject(error);
    }
  });
}

function isCarHandicap(carHandicapEndPoint, carNumber) {
  return getCarDetails(carHandicapEndPoint, carNumber)
    .then((handicapStatus) => {
      return handicapStatus ? true : false;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

getCarDetails(carEndPoint, carNumber)
  .then((carDetails) => {
    console.log("Car Details:", carDetails);
    return isCarHandicap(carHandicapEndPoint, carNumber);
  })
  .then((isHandicap) => {
    console.log("Handicap:", isHandicap);
  })
  .catch(console.error);
